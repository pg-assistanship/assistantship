import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThirukkuvalaiViewformComponent } from './university-thirukkuvalai-viewform.component';

describe('UniversityThirukkuvalaiViewformComponent', () => {
  let component: UniversityThirukkuvalaiViewformComponent;
  let fixture: ComponentFixture<UniversityThirukkuvalaiViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThirukkuvalaiViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThirukkuvalaiViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
