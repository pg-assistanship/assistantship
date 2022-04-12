import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsgCoimbatoreDetailsComponent } from './psg-coimbatore-details.component';

describe('PsgCoimbatoreDetailsComponent', () => {
  let component: PsgCoimbatoreDetailsComponent;
  let fixture: ComponentFixture<PsgCoimbatoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsgCoimbatoreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsgCoimbatoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
