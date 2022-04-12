import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThoothukudiViewformComponent } from './university-thoothukudi-viewform.component';

describe('UniversityThoothukudiViewformComponent', () => {
  let component: UniversityThoothukudiViewformComponent;
  let fixture: ComponentFixture<UniversityThoothukudiViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThoothukudiViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThoothukudiViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
