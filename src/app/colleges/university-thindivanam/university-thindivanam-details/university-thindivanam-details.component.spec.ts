import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThindivanamDetailsComponent } from './university-thindivanam-details.component';

describe('UniversityThindivanamDetailsComponent', () => {
  let component: UniversityThindivanamDetailsComponent;
  let fixture: ComponentFixture<UniversityThindivanamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThindivanamDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThindivanamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
