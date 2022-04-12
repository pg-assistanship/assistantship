import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThirukkuvalaiDetailsComponent } from './university-thirukkuvalai-details.component';

describe('UniversityThirukkuvalaiDetailsComponent', () => {
  let component: UniversityThirukkuvalaiDetailsComponent;
  let fixture: ComponentFixture<UniversityThirukkuvalaiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThirukkuvalaiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThirukkuvalaiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
