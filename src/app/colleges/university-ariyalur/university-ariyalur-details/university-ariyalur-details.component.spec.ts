import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityAriyalurDetailsComponent } from './university-ariyalur-details.component';

describe('UniversityAriyalurDetailsComponent', () => {
  let component: UniversityAriyalurDetailsComponent;
  let fixture: ComponentFixture<UniversityAriyalurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityAriyalurDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityAriyalurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
