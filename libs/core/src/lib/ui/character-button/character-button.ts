import { Component, Input } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'lib-character-button',
  standalone: true,
  imports: [],
  templateUrl: './character-button.html',
  styleUrl: './character-button.scss',
})
export class CharacterButton {
  @Input() character!: Character;
  protected readonly onclick = onclick;
}
