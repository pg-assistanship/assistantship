import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityPattukodaiDetailsComponent } from './university-pattukodai-details.component';

describe('UniversityPattukodaiDetailsComponent', () => {
  let component: UniversityPattukodaiDetailsComponent;
  let fixture: ComponentFixture<UniversityPattukodaiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityPattukodaiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityPattukodaiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
