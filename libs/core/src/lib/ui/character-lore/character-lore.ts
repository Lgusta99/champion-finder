import { Component, Input } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'lib-character-lore',
  standalone: true,
  imports: [],
  templateUrl: './character-lore.html',
  styleUrl: './character-lore.scss',
})
export class CharacterLore {
  @Input() character!: Character;
}
