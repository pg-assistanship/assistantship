import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityPanrutiiViewformComponent } from './university-panrutii-viewform.component';

describe('UniversityPanrutiiViewformComponent', () => {
  let component: UniversityPanrutiiViewformComponent;
  let fixture: ComponentFixture<UniversityPanrutiiViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityPanrutiiViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityPanrutiiViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
