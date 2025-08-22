import {
  patchState,
  signalStore,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Character } from '@champion-finder/core';
import { inject } from '@angular/core';
import { CharacterService } from './character-service';

type CharacterState = {
  characters: Character[];
  filteredCharacters: Character[];
  selectedId: string | null;
  selectedCharacter: Character | null;
  loading: boolean;
};

const initialState: CharacterState = {
  characters: [],
  filteredCharacters: [],
  selectedId: null,
  selectedCharacter: null,
  loading: false,
};

export const CharacterStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const characterService = inject(CharacterService);

    return {
      loadCharacters(): void {
        patchState(store, { loading: true });

        characterService.getCharacterList().subscribe({
          next: (characters: Character[]) => {
            patchState(store, {
              characters,
              filteredCharacters: characters,
              loading: false
            });

            characterService.getCharacterByName(store.characters()[0].id).subscribe({
              next: (character: Character) => {
                patchState(store, {
                  selectedCharacter: character,
                  loading: false
                });
              },
              error: () => {
                patchState(store, { loading: false });
              }
            });
          },
          error: () => {
            patchState(store, { loading: false });
          }
        });
      },

      filterCharacters(query: string): void {
        const filtered = store.characters().filter((character: Character) =>
          character.name.toLowerCase().includes(query.toLowerCase()));

        patchState(store, {
          filteredCharacters: filtered
        });
      },

      setSelectedId(id: string | null): void {
        patchState(store, {
          selectedId: id,
          selectedCharacter: id == null ? null : store.characters().find((c: Character) => c.id === id) ?? null,
          loading: true
        });

        if (store.selectedCharacter()) {
          characterService.getCharacterByName(store.selectedCharacter()?.id ?? '').subscribe({
            next: (character: Character) => {
              patchState(store, {
                selectedCharacter: character,
                loading: false
              });
            },
            error: () => {
              patchState(store, { loading: false });
            }
          });
        }
      }
    };
  }),
);
