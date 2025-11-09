<template>
  <section class="mx-auto max-w-screen-2xl px-6 py-12">
    <header class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-semibold text-[#5A6268] md:text-4xl">Carrier and integration ecosystem</h2>
      <p class="mt-3 text-slate-600">
        See a snapshot of the carriers and software partners Freightmate already connects with - explore more in the dedicated partner pages.
      </p>
    </header>

    <div class="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
      <div class="rounded-2xl border border-[#e5f3f2] bg-white p-6 shadow-sm md:p-8">
        <header class="mb-6 text-center">
          <h3 class="text-2xl font-semibold text-[#5A6268]">Trusted carriers</h3>
          <p class="mt-3 text-slate-600">National and specialist partners already working with Freightmate.</p>
        </header>
        <ul class="mx-auto grid w-full max-w-md grid-cols-3 place-items-center gap-6">
          <li
            v-for="carrier in carrierPreview"
            :key="carrier.name"
            class="flex h-14 w-full items-center justify-center opacity-80 transition hover:opacity-100"
            :aria-label="carrier.name"
          >
            <img
              :src="carrier.logo"
              :alt="`Carrier: ${carrier.name}`"
              class="h-9 w-auto grayscale transition hover:grayscale-0"
              loading="lazy"
            />
          </li>
        </ul>
        <div class="mt-6 text-center">
          <RouterLink to="/partners/carriers" class="text-brand-teal hover:underline">
            View all carriers
          </RouterLink>
        </div>
      </div>

      <div class="rounded-2xl border border-[#e5f3f2] bg-white p-6 shadow-sm md:p-8">
        <header class="mb-6 text-center">
          <h3 class="text-2xl font-semibold text-[#5A6268]">System integrations</h3>
          <p class="mt-3 text-slate-600">Connect Freightmate with ERPs, commerce and finance tools.</p>
        </header>
        <ul class="mx-auto grid w-full max-w-md grid-cols-3 place-items-center gap-6">
          <li v-for="integration in integrationPreview" :key="integration.label" class="flex h-14 w-full items-center justify-center">
            <RouterLink
              :to="integration.href"
              class="inline-flex h-full w-full items-center justify-center rounded-xl border border-transparent bg-white transition hover:-translate-y-1 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
              :aria-label="integration.label"
            >
              <img
                :src="integration.src"
                :alt="integration.label"
                class="h-9 w-auto opacity-90 transition-opacity hover:opacity-100"
                loading="lazy"
              />
            </RouterLink>
          </li>
        </ul>
        <div class="mt-6 text-center">
          <RouterLink to="/partners/integrations" class="text-brand-teal hover:underline">
            View all integrations
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CARRIERS, INTEGRATION_ITEMS } from '@/data/ecosystem';

const CARRIER_LIMIT = 6;
const INTEGRATION_LIMIT = 6;

const carrierPreview = computed(() => CARRIERS.slice(0, CARRIER_LIMIT));
const integrationPreview = computed(() => INTEGRATION_ITEMS.slice(0, INTEGRATION_LIMIT));
</script>
