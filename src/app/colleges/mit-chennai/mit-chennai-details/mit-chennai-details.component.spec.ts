import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitChennaiDetailsComponent } from './mit-chennai-details.component';

describe('MitChennaiDetailsComponent', () => {
  let component: MitChennaiDetailsComponent;
  let fixture: ComponentFixture<MitChennaiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitChennaiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MitChennaiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
