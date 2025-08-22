import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterLore } from './character-lore';

describe('CharacterLore', () => {
  let component: CharacterLore;
  let fixture: ComponentFixture<CharacterLore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterLore],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterLore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
