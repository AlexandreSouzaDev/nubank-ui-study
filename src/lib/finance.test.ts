import { formatTerm, futureValue } from './finance';

describe('futureValue', () => {
  it('equals simple sum at zero rate', () => expect(futureValue(100, 12, 0)).toBe(1200));
  it('earns interest at a positive rate', () => {
    expect(futureValue(500, 36)).toBeGreaterThan(500 * 36);
    expect(futureValue(100, 1)).toBeCloseTo(100, 6);
  });
});

describe('formatTerm', () => {
  it('uses years for multiples of 12', () => {
    expect(formatTerm(12)).toBe('1 ano');
    expect(formatTerm(36)).toBe('3 anos');
    expect(formatTerm(18)).toBe('18 meses');
  });
});
