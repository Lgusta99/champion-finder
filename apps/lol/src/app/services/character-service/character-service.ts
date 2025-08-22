import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Character } from '@champion-finder/core';
import { ApiResponse } from './response/api-response';
import { CharacterListResponse } from './response/character-list-response';
import { CharacterDetails } from './response/character-response';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  http = inject(HttpClient);

  getCharacterList(): Observable<Character[]> {
    return this.http.get<ApiResponse<CharacterListResponse>>('https://ddragon.leagueoflegends.com/cdn/15.15.1/data/pt_BR/champion.json').pipe(
      map(response => response.data),
      map(data => {
        return Object.values(data).map(character => ({
          id: character.id,
          name: character.name,
          image: `https://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/${character.image.full}`,
          title: character.title
        }));
      }));
  }

  getCharacterByName(name: string): Observable<Character> {
    return this.http.get<ApiResponse<CharacterDetails>>(`https://ddragon.leagueoflegends.com/cdn/15.15.1/data/pt_BR/champion/${name}.json`).pipe(
      map(response => response.data),
      map(data => {
        const character = Object.values(data)[0];
        return {
          id: character.id,
          name: character.name,
          image: `https://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/${character.image.full}`,
          description: character.lore,
          title: character.title
        };
      }));
  }
}
