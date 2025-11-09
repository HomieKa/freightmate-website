import clsx, { type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const formatNumber = (n: number) => new Intl.NumberFormat().format(n);

export const currency = (amount: number, currency = 'AUD') =>
  new Intl.NumberFormat(undefined, { style: 'currency', currency, maximumFractionDigits: 2 }).format(amount);

export const formatPct = (n: number) => `${(n * 100).toFixed(0)}%`;

export const toCsv = (rows: Record<string, string | number>[]) => {
  if (!rows.length) return '';
  const headers = Object.keys(rows[0] as Record<string, string | number>);
  const esc = (v: string | number) => `"${String(v).replace(/"/g, '""')}"`;
  const lines = [headers.join(',')].concat(rows.map(r => headers.map(h => esc(r[h] ?? '')).join(',')));
  return lines.join('\n');
};
