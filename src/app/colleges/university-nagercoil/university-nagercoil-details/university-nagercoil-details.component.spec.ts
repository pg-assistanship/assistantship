import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityNagercoilDetailsComponent } from './university-nagercoil-details.component';

describe('UniversityNagercoilDetailsComponent', () => {
  let component: UniversityNagercoilDetailsComponent;
  let fixture: ComponentFixture<UniversityNagercoilDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityNagercoilDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityNagercoilDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
