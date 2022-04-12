import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityPanrutiiDetailsComponent } from './university-panrutii-details.component';

describe('UniversityPanrutiiDetailsComponent', () => {
  let component: UniversityPanrutiiDetailsComponent;
  let fixture: ComponentFixture<UniversityPanrutiiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityPanrutiiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityPanrutiiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
