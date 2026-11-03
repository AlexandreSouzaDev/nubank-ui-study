export const MONTHLY_RATE = 0.0085;

/** Future value of equal end-of-month deposits with compound interest. */
export const futureValue = (deposit: number, months: number, rate = MONTHLY_RATE): number =>
  rate === 0 ? deposit * months : (deposit * ((1 + rate) ** months - 1)) / rate;

export const formatBRL = (n: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(n);

export const formatTerm = (months: number): string =>
  months % 12 === 0 ? `${months / 12} ${months === 12 ? 'ano' : 'anos'}` : `${months} meses`;
