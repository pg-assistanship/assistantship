import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityRamanathapuramViewformComponent } from './university-ramanathapuram-viewform.component';

describe('UniversityRamanathapuramViewformComponent', () => {
  let component: UniversityRamanathapuramViewformComponent;
  let fixture: ComponentFixture<UniversityRamanathapuramViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityRamanathapuramViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityRamanathapuramViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
