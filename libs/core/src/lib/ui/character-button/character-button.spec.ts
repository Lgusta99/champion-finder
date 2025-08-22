import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterButton } from './character-button';

describe('CharacterButton', () => {
  let component: CharacterButton;
  let fixture: ComponentFixture<CharacterButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterButton],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
