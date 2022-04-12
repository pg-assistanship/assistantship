import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsgCoimbatoreViewformComponent } from './psg-coimbatore-viewform.component';

describe('PsgCoimbatoreViewformComponent', () => {
  let component: PsgCoimbatoreViewformComponent;
  let fixture: ComponentFixture<PsgCoimbatoreViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsgCoimbatoreViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsgCoimbatoreViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
