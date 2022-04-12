import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityVillupuramDetailsComponent } from './university-villupuram-details.component';

describe('UniversityVillupuramDetailsComponent', () => {
  let component: UniversityVillupuramDetailsComponent;
  let fixture: ComponentFixture<UniversityVillupuramDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityVillupuramDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityVillupuramDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
