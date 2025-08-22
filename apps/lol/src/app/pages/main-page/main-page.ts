import { Component, inject, OnInit } from '@angular/core';
import { Character, CharacterData, CharacterList, CharacterLore } from '@champion-finder/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterStore } from '../../services/character-service/character-store';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CharacterList, CharacterData, CharacterLore],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  readonly characterStore = inject(CharacterStore);

  tabs = ['História', 'Habilidades'];

  ngOnInit(): void {
    this.characterStore.loadCharacters();

    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.characterStore.setSelectedId(id ? id : null);
    });
  }

  onCharacterSelected(character: Character): void {
    this.router.navigate(['/lol', character.id]).then();
  }

  onSearchChange(search: string): void {
    this.characterStore.filterCharacters(search);
  }
}
