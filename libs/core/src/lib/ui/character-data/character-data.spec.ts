import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterData } from './character-data';

describe('CharacterData', () => {
  let component: CharacterData;
  let fixture: ComponentFixture<CharacterData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterData],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
