import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThoothukudiDetailsComponent } from './university-thoothukudi-details.component';

describe('UniversityThoothukudiDetailsComponent', () => {
  let component: UniversityThoothukudiDetailsComponent;
  let fixture: ComponentFixture<UniversityThoothukudiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThoothukudiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThoothukudiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
