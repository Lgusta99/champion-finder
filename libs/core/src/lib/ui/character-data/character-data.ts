import { AfterViewInit, Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Character } from '../../models/character';

@Component({
  selector: 'lib-character-data',
  standalone: true,
  imports: [
    NgClass,
    NgTemplateOutlet
  ],
  templateUrl: './character-data.html',
  styleUrl: './character-data.scss',
})
export class CharacterData implements AfterViewInit {
  @Input() tabs!: string[];
  @Input() character!: Character | null;

  @ContentChildren('tabContent') tabContents!: QueryList<TemplateRef<any>>;

  activeTab: number = 0;

  ngAfterViewInit(): void {
    if (this.tabs && this.tabs.length > 0) {
      this.activeTab = 0;
    }
  }

  selectTab(index: number): void {
    this.activeTab = index;
  }

  getActiveTemplate(): TemplateRef<any> | null {
    const templates = this.tabContents.toArray();
    return templates[this.activeTab] || null;
  }

  getTabStyle(index: number): string {
    return this.activeTab === index ? 'character-data__container__tabs__items__tab--active' : '';
  }
}
