import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityAriyalurViewformComponent } from './university-ariyalur-viewform.component';

describe('UniversityAriyalurViewformComponent', () => {
  let component: UniversityAriyalurViewformComponent;
  let fixture: ComponentFixture<UniversityAriyalurViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityAriyalurViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityAriyalurViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
