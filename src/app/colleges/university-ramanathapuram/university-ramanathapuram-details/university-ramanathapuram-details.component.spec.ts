import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityRamanathapuramDetailsComponent } from './university-ramanathapuram-details.component';

describe('UniversityRamanathapuramDetailsComponent', () => {
  let component: UniversityRamanathapuramDetailsComponent;
  let fixture: ComponentFixture<UniversityRamanathapuramDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityRamanathapuramDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityRamanathapuramDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
