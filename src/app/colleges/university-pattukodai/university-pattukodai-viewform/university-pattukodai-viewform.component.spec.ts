import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityPattukodaiViewformComponent } from './university-pattukodai-viewform.component';

describe('UniversityPattukodaiViewformComponent', () => {
  let component: UniversityPattukodaiViewformComponent;
  let fixture: ComponentFixture<UniversityPattukodaiViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityPattukodaiViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityPattukodaiViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
