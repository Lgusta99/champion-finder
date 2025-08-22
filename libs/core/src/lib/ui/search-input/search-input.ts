import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss',
})
export class SearchInput {
  @Input() placeholder = 'Search...';
}
