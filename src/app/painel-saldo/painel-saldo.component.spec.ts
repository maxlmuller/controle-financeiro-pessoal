import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PainelSaldoComponent } from './painel-saldo.component';

describe('PainelSaldoComponent', () => {
  let component: PainelSaldoComponent;
  let fixture: ComponentFixture<PainelSaldoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelSaldoComponent]
    });
    fixture = TestBed.createComponent(PainelSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
