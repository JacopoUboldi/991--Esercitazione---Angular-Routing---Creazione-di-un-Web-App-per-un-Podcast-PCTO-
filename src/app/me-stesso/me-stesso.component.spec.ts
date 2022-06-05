import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeStessoComponent } from './me-stesso.component';

describe('MeStessoComponent', () => {
  let component: MeStessoComponent;
  let fixture: ComponentFixture<MeStessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeStessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeStessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
