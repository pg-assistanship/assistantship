import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityKanchepuramViewformComponent } from './university-kanchepuram-viewform.component';

describe('UniversityKanchepuramViewformComponent', () => {
  let component: UniversityKanchepuramViewformComponent;
  let fixture: ComponentFixture<UniversityKanchepuramViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityKanchepuramViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityKanchepuramViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
