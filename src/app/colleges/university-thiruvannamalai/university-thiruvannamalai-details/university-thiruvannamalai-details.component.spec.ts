import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThiruvannamalaiDetailsComponent } from './university-thiruvannamalai-details.component';

describe('UniversityThiruvannamalaiDetailsComponent', () => {
  let component: UniversityThiruvannamalaiDetailsComponent;
  let fixture: ComponentFixture<UniversityThiruvannamalaiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThiruvannamalaiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThiruvannamalaiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
