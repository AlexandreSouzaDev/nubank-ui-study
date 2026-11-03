import { isValidCPF, maskCPF } from './cpf';

describe('maskCPF', () => {
  it('formats progressively and ignores non-digits', () => {
    expect(maskCPF('529')).toBe('529');
    expect(maskCPF('5299')).toBe('529.9');
    expect(maskCPF('52998224725')).toBe('529.982.247-25');
    expect(maskCPF('529.982.247-25999')).toBe('529.982.247-25');
    expect(maskCPF('abc')).toBe('');
  });
});

describe('isValidCPF', () => {
  it('accepts a valid CPF', () => expect(isValidCPF('529.982.247-25')).toBe(true));
  it('rejects wrong check digits, short input and repeated digits', () => {
    expect(isValidCPF('529.982.247-24')).toBe(false);
    expect(isValidCPF('123')).toBe(false);
    expect(isValidCPF('111.111.111-11')).toBe(false);
  });
});
