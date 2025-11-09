<template>
  <main class="pb-16">
    <section class="hero-bg pb-10 pt-24">
      <div class="mx-auto max-w-7xl px-6 pt-10">
        <h1 class="text-4xl font-bold tracking-tight text-brand-slate sm:text-5xl">Partners</h1>
        <p class="mt-2 text-slate-600">
          Freightmate works with your existing carrier network and tech stack. Explore how we connect every step.
        </p>
      </div>
    </section>

    <section
      v-for="(block, index) in partnerBlocks"
      :key="block.id"
      class="mx-auto max-w-7xl px-6 py-12"
    >
      <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <Reveal :class="index % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-2'">
          <div class="group rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-sm transition-transform duration-200 hover:-translate-y-1">
            <div class="relative h-64 w-full md:h-72 lg:h-80">
              <img
                :src="block.img"
                :alt="block.alt"
                class="h-full w-full rounded-xl object-contain"
              />
            </div>
          </div>
        </Reveal>

        <Reveal :class="index % 2 === 0 ? 'order-1 md:order-2' : 'order-1 md:order-1'">
          <div>
            <h2 class="text-2xl font-semibold text-slate-900">{{ block.title }}</h2>
            <p class="mt-2 text-slate-600">{{ block.blurb }}</p>
            <ul class="mt-4 list-disc space-y-1 pl-5 text-slate-600">
              <li v-for="(item, idx) in block.bullets" :key="idx">
                {{ item }}
              </li>
            </ul>
            <RouterLink
              :to="block.href"
              class="mt-4 inline-block text-teal-700 hover:underline"
            >
              {{ block.ctaLabel }} -&gt;
            </RouterLink>
          </div>
        </Reveal>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import Reveal from '@/components/features/Reveal.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { withBase } from '@/lib/assets';

type PartnerBlock = {
  id: string;
  title: string;
  blurb: string;
  bullets: string[];
  img: string;
  alt: string;
  href: string;
  ctaLabel: string;
};

const partnerBlocks: PartnerBlock[] = [
  {
    id: 'carriers',
    title: 'Carrier network',
    blurb: "Keep your existing contracts. Freightmate standardises workflows while respecting each carrier's rules.",
    bullets: [
      'Bring your own accounts, services and rate cards.',
      'Standardise bookings, labels and manifests across providers.',
      'Track every milestone in one shared timeline.',
      'Measure performance with carrier-friendly KPIs.'
    ],
    img: withBase('images/features/network.png'),
    alt: 'Carrier management dashboards',
    href: '/partners/carriers',
    ctaLabel: 'Browse carriers'
  },
  {
    id: 'integrations',
    title: 'Integrations and API',
    blurb: 'Plug Freightmate into your ERP, WMS, CRM and ecommerce stack with pre-built connectors or our API.',
    bullets: [
      'Native connectors for NetSuite, Shopify, WooCommerce and more.',
      'Adapters and webhooks to sync ERP, finance and CRM data.',
      'Push tracking, exceptions and ETAs back to customer tools.',
      'Use our API and sandbox when you need something custom.'
    ],
    img: withBase('images/features/integrations.png'),
    alt: 'Integration options',
    href: '/partners/integrations',
    ctaLabel: 'Explore integrations'
  }
];

usePageMeta({
  title: 'Partners | Freightmate',
  description: 'Work with the carriers you trust and the systems you already run. Explore supported carriers, integrations and API options.'
});
</script>
