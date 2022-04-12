import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriyarVellorDetailsComponent } from './periyar-vellor-details.component';

describe('PeriyarVellorDetailsComponent', () => {
  let component: PeriyarVellorDetailsComponent;
  let fixture: ComponentFixture<PeriyarVellorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriyarVellorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriyarVellorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
