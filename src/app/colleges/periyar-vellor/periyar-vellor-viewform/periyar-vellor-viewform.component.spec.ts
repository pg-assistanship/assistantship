import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriyarVellorViewformComponent } from './periyar-vellor-viewform.component';

describe('PeriyarVellorViewformComponent', () => {
  let component: PeriyarVellorViewformComponent;
  let fixture: ComponentFixture<PeriyarVellorViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriyarVellorViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriyarVellorViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
