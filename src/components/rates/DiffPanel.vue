<template>
  <section class="mx-auto max-w-6xl px-6" aria-labelledby="diffpanel-title">
    <h2 id="diffpanel-title" class="sr-only">Rate breakdown example</h2>
    <div class="surface p-6 md:p-8">
      <header class="mb-4 md:mb-6">
        <p class="text-sm uppercase tracking-wide text-slate-500">How Freightmate calculates profit</p>
        <h3 class="mt-1 text-xl font-semibold text-brand-slate md:text-2xl">
          Buy + fuel + fees + markup = sell &amp; margin
        </h3>
      </header>

      <div class="grid gap-4 md:grid-cols-2">
        <figure class="rounded-xl border border-brand-light p-4" aria-label="Cost and price build-up visual">
          <div class="space-y-3" role="list">
            <div v-for="(step, index) in steps" :key="step.label" role="listitem" class="flex items-center gap-3">
              <div class="w-28 text-sm text-slate-600">
                {{ step.label }}
                <span v-if="step.note" class="text-slate-500"> - {{ step.note }}</span>
              </div>
              <div class="relative h-3 flex-1 rounded-full bg-brand-light/50">
                <div
                  class="absolute inset-y-0 left-0 rounded-full bg-[color:var(--brand-teal)] transition-[width]"
                  :style="{ width: animate ? `${(step.value / max) * 100}%` : '0%' }"
                  :class="{ 'delay-100': index * 50 }"
                />
              </div>
              <div class="w-20 text-right font-medium text-slate-800">${{ step.value.toFixed(2) }}</div>
            </div>
          </div>
          <figcaption class="mt-3 text-xs text-slate-500">
            Example only. Configure your own fees, fuel and markups.
          </figcaption>
        </figure>

        <div class="grid content-center gap-3 rounded-xl border border-brand-light p-4">
          <div class="flex justify-between text-slate-700">
            <span>Cost (buy + fuel + fees)</span>
            <span class="font-medium">${{ cost.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between text-slate-700">
            <span>Sell (cost + markup)</span>
            <span class="font-medium">${{ sell.toFixed(2) }}</span>
          </div>
          <div class="divider" />
          <div class="flex items-center justify-between">
            <span class="text-brand-slate">Margin</span>
            <span class="text-2xl font-semibold text-[color:var(--brand-green)]">
              <CountUp :to="marginPct" suffix="%" :decimals="1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CountUp from '@/components/animations/CountUp.vue';

type Step = {
  label: string;
  value: number;
  note?: string;
};

const buy = 100;
const fuelPct = 0.15;
const fees = 11;
const fuel = +(buy * fuelPct).toFixed(2);
const cost = +(buy + fuel + fees).toFixed(2);
const markupPct = 0.2;
const markup = +(cost * markupPct).toFixed(2);
const sell = +(cost + markup).toFixed(2);
const marginPct = +(((sell - cost) / sell) * 100).toFixed(1);

const steps: Step[] = [
  { label: 'Buy rate', value: buy },
  { label: 'Fuel levy', value: fuel, note: `${(fuelPct * 100).toFixed(0)}%` },
  { label: 'Fees', value: fees, note: 'DG, Residential' },
  { label: 'Markup', value: markup, note: `${(markupPct * 100).toFixed(0)}%` },
  { label: 'Sell rate', value: sell }
];

const max = Math.max(...steps.map((step) => step.value));
const animate = ref(false);

onMounted(() => {
  requestAnimationFrame(() => {
    animate.value = true;
  });
});
</script>
