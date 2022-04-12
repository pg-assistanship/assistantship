import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiagarajarMaduraiViewformComponent } from './thiagarajar-madurai-viewform.component';

describe('ThiagarajarMaduraiViewformComponent', () => {
  let component: ThiagarajarMaduraiViewformComponent;
  let fixture: ComponentFixture<ThiagarajarMaduraiViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThiagarajarMaduraiViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiagarajarMaduraiViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
