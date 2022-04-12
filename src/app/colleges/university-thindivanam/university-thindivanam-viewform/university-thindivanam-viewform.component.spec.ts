import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThindivanamViewformComponent } from './university-thindivanam-viewform.component';

describe('UniversityThindivanamViewformComponent', () => {
  let component: UniversityThindivanamViewformComponent;
  let fixture: ComponentFixture<UniversityThindivanamViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThindivanamViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThindivanamViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
