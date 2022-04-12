import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityKanchepuramDetailsComponent } from './university-kanchepuram-details.component';

describe('UniversityKanchepuramDetailsComponent', () => {
  let component: UniversityKanchepuramDetailsComponent;
  let fixture: ComponentFixture<UniversityKanchepuramDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityKanchepuramDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityKanchepuramDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
