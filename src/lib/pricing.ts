import ratecard from '@/data/ratecard.json';

export type OptimiseInput = { goal: 'targetSell' | 'savings'; value: number };

export function computePricingScenario(input: OptimiseInput) {
  const services = ratecard.map((r) => {
    const cost = r.base + r.base * (r.fuelPct / 100) + r.surcharges.reduce((a, s) => a + s.amount, 0);
    let suggested = cost * 1.2; // default 20% margin
    let marginPct = 20;
    let savingsPct = 0;
    if (input.goal === 'targetSell') {
      suggested = input.value;
      marginPct = ((suggested - cost) / cost) * 100;
    } else {
      savingsPct = input.value;
      suggested = cost * (1 - savingsPct / 100);
      marginPct = ((suggested - cost) / cost) * 100;
    }
    return { name: `${r.carrier} ${r.service}`, suggested: Math.max(suggested, 0), marginPct, savingsPct, notes: `${r.etaDays}d ETA` };
  });
  return { services };
}

