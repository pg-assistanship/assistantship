import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityNagercoilViewformComponent } from './university-nagercoil-viewform.component';

describe('UniversityNagercoilViewformComponent', () => {
  let component: UniversityNagercoilViewformComponent;
  let fixture: ComponentFixture<UniversityNagercoilViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityNagercoilViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityNagercoilViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
