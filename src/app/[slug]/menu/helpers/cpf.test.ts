import { describe, it, expect } from 'vitest';
import { isValidCpf, removeCpfPunctuation } from './cpf';

describe('removeCpfPunctuation', () => {
  it('strips dots and hyphen from CPF string', () => {
    expect(removeCpfPunctuation('123.456.789-09')).toBe('12345678909');
    expect(removeCpfPunctuation('935.411.347-80')).toBe('93541134780');
  });
});

describe('isValidCpf', () => {
  it('returns true for valid CPF numbers', () => {
    const valids = ['529.982.247-25', '12345678909', '935.411.347-80'];
    valids.forEach((cpf) => expect(isValidCpf(cpf)).toBe(true));
  });

  it('returns false for invalid CPF numbers', () => {
    const invalids = ['000.000.000-00', '11111111111', '123.456.789-00'];
    invalids.forEach((cpf) => expect(isValidCpf(cpf)).toBe(false));
  });
});
