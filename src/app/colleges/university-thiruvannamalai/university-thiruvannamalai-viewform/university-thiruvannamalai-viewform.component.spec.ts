import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThiruvannamalaiViewformComponent } from './university-thiruvannamalai-viewform.component';

describe('UniversityThiruvannamalaiViewformComponent', () => {
  let component: UniversityThiruvannamalaiViewformComponent;
  let fixture: ComponentFixture<UniversityThiruvannamalaiViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThiruvannamalaiViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThiruvannamalaiViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
