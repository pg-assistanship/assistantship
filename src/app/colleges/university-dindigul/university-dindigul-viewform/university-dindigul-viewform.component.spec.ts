import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDindigulViewformComponent } from './university-dindigul-viewform.component';

describe('UniversityDindigulViewformComponent', () => {
  let component: UniversityDindigulViewformComponent;
  let fixture: ComponentFixture<UniversityDindigulViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityDindigulViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDindigulViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
