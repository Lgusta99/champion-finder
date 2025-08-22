import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss',
})
export class SearchInput {
  @Input() placeholder = 'Search...';
  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(event: any): void {
    this.searchChange.emit(event.target.value);
  }
}
