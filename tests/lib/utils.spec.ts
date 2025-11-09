import { describe, expect, it } from 'vitest';
import { currency, formatNumber, toCsv } from '@/lib/utils';

describe('utils', () => {
  it('formats currency in AUD by default', () => {
    expect(currency(125.5)).toContain('$125.50');
  });

  it('formats numbers with locale separators', () => {
    expect(formatNumber(12345)).toBe('12,345');
  });

  it('creates CSV with escaped values', () => {
    const csv = toCsv([
      { carrier: 'Acme', cost: 10 },
      { carrier: 'AC, Logistics', cost: 12.5 }
    ]);
    const [header, second] = csv.split('\n');
    expect(header).toBe('carrier,cost');
    expect(csv).toContain('"AC, Logistics","12.5"');
    expect(second).toBe('"Acme","10"');
  });
});
