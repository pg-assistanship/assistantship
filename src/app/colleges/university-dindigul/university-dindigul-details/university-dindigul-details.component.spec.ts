import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDindigulDetailsComponent } from './university-dindigul-details.component';

describe('UniversityDindigulDetailsComponent', () => {
  let component: UniversityDindigulDetailsComponent;
  let fixture: ComponentFixture<UniversityDindigulDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityDindigulDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDindigulDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
