import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPromocoesComponent } from './form-promocoes.component';

describe('FormPromocoesComponent', () => {
  let component: FormPromocoesComponent;
  let fixture: ComponentFixture<FormPromocoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPromocoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPromocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
