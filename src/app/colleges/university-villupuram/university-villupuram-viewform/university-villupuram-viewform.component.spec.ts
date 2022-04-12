import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityVillupuramViewformComponent } from './university-villupuram-viewform.component';

describe('UniversityVillupuramViewformComponent', () => {
  let component: UniversityVillupuramViewformComponent;
  let fixture: ComponentFixture<UniversityVillupuramViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityVillupuramViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityVillupuramViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
