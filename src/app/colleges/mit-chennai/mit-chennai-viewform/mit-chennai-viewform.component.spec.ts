import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitChennaiViewformComponent } from './mit-chennai-viewform.component';

describe('MitChennaiViewformComponent', () => {
  let component: MitChennaiViewformComponent;
  let fixture: ComponentFixture<MitChennaiViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitChennaiViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MitChennaiViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
