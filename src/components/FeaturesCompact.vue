<template>
  <section aria-labelledby="features-compact" class="mx-auto max-w-screen-2xl px-6 pb-16 pt-0">
    <div class="grid items-start gap-8 md:grid-cols-3">
      <div class="md:col-span-1">
        <h2 id="features-compact" class="text-3xl font-semibold text-[#5A6268] md:text-4xl">
          End-to-end logistics tools built around you
        </h2>
        <p class="mt-3 text-slate-600">
          Everything from carrier selection to tracking, reporting and basic BI - clearly explained, no fluff.
        </p>
        <RouterLink to="/features" class="btn-primary-teal mt-6 inline-flex">
          Explore all features &rarr;
        </RouterLink>
      </div>

      <div class="grid gap-6 md:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
        <FadeUp
          v-for="(card, index) in cards"
          :key="card.id"
          class="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm transition will-change-transform hover:-translate-y-1"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <RouterLink
            :to="card.href"
            class="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            <div class="flex h-36 items-center justify-center overflow-hidden rounded-xl bg-white sm:h-40 md:h-44 lg:h-48">
              <img
                :src="card.imgSrc"
                :alt="card.imgAlt"
                class="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <h3 class="mt-4 text-lg font-semibold text-[#5A6268]">
              {{ card.title }}
            </h3>
            <p class="mt-1 text-sm text-slate-600">
              {{ card.blurb }}
            </p>
            <span class="mt-3 inline-block text-[#00827A]">Learn more &rarr;</span>
          </RouterLink>
        </FadeUp>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FadeUp from '@/components/animations/FadeUp.vue';
import { withBase } from '@/lib/assets';

type Card = {
  id: string;
  title: string;
  blurb: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
};

const cards: Card[] = [
  {
    id: 'carrier-selection',
    title: 'Carrier selection & costing',
    blurb: 'BYO carriers and rates; see the cheapest and the cost up-front.',
    imgSrc: withBase('images/features/carrier_selection_costing.png'),
    imgAlt: 'Carrier selection & costing',
    href: '/features/carrier-selection'
  },
  {
    id: 'rates',
    title: 'Rate Management',
    blurb: 'Buy/sell cards, fuel, fees and margins in one place.',
    imgSrc: withBase('images/features/pricing.png'),
    imgAlt: 'Rate Management',
    href: '/features/rates'
  },
  {
    id: 'despatch',
    title: 'Book & Despatch',
    blurb: 'Bookings, manifests and CSV imports in one workflow.',
    imgSrc: withBase('images/features/despatch.png'),
    imgAlt: 'Book & Despatch',
    href: '/features/despatch'
  },
  {
    id: 'track-trace',
    title: 'Track & trace',
    blurb: 'One timeline for every shipment, with live events.',
    imgSrc: withBase('images/features/track-trace.png'),
    imgAlt: 'Unified tracking timeline',
    href: '/features/track-trace'
  },
  {
    id: 'bi',
    title: 'BI dashboard',
    blurb: 'Quick KPIs, trends and exceptions with exports.',
    imgSrc: withBase('images/features/analytics.png'),
    imgAlt: 'BI dashboard',
    href: '/features/basic-bi-dashboard'
  }
];
</script>
