import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiagarajarMaduraiDetailsComponent } from './thiagarajar-madurai-details.component';

describe('ThiagarajarMaduraiDetailsComponent', () => {
  let component: ThiagarajarMaduraiDetailsComponent;
  let fixture: ComponentFixture<ThiagarajarMaduraiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThiagarajarMaduraiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiagarajarMaduraiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
