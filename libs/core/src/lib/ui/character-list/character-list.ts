import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchInput } from '../search-input/search-input';
import { CharacterButton } from '../character-button/character-button';
import { Character } from '../../models/character';

@Component({
  selector: 'lib-character-list',
  standalone: true,
  imports: [SearchInput, CharacterButton],
  templateUrl: './character-list.html',
  styleUrl: './character-list.scss',
})
export class CharacterList {
  @Input() type!: 'lol' | 'valorant';
  @Input() characters!: Character[];

  @Output() characterSelected = new EventEmitter<Character>();
  @Output() searchChange = new EventEmitter<string>();

  onCharacterSelected(character: Character): void {
    this.characterSelected.emit(character);
  }

  onSearchChange(search: string): void {
    this.searchChange.emit(search);
  }
}
