import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThiruchirappalliViewformComponent } from './university-thiruchirappalli-viewform.component';

describe('UniversityThiruchirappalliViewformComponent', () => {
  let component: UniversityThiruchirappalliViewformComponent;
  let fixture: ComponentFixture<UniversityThiruchirappalliViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThiruchirappalliViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThiruchirappalliViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
