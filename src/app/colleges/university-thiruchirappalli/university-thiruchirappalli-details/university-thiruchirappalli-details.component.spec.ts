import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThiruchirappalliDetailsComponent } from './university-thiruchirappalli-details.component';

describe('UniversityThiruchirappalliDetailsComponent', () => {
  let component: UniversityThiruchirappalliDetailsComponent;
  let fixture: ComponentFixture<UniversityThiruchirappalliDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThiruchirappalliDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThiruchirappalliDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
