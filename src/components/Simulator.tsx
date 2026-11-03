import { useState } from 'react';
import { formatBRL, formatTerm, futureValue } from '../lib/finance';

export function Simulator() {
  const [deposit, setDeposit] = useState(500);
  const [months, setMonths] = useState(36);
  const total = futureValue(deposit, months);
  const invested = deposit * months;

  return (
    <section className="sim" id="simulador" aria-labelledby="h2b">
      <div className="wrap">
        <h2 id="h2b">Simule quanto seu dinheiro pode render.</h2>
        <p className="lead">Estimativa ilustrativa com taxa fixa de 0,85% ao mês. Não é promessa de rentabilidade.</p>
        <div className="simbox">
          <div>
            <div className="ctl">
              <label htmlFor="dep">Depósito mensal <output htmlFor="dep">{formatBRL(deposit)}/mês</output></label>
              <input type="range" id="dep" min={50} max={5000} step={50} value={deposit} onChange={(e) => setDeposit(Number(e.target.value))} />
            </div>
            <div className="ctl">
              <label htmlFor="mes">Prazo <output htmlFor="mes">{formatTerm(months)}</output></label>
              <input type="range" id="mes" min={6} max={120} step={6} value={months} onChange={(e) => setMonths(Number(e.target.value))} />
            </div>
          </div>
          <div className="result" aria-live="polite">
            <span>Você terá cerca de</span>
            <div className="big" data-testid="total">{formatBRL(total)}</div>
            <div className="bar" aria-hidden="true"><i style={{ width: `${Math.min(100, (invested / total) * 100).toFixed(1)}%` }} /></div>
            <span>Você investe {formatBRL(invested)} e rende {formatBRL(total - invested)}</span>
            <small>Simulação educativa. Valores arredondados.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
