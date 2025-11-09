<template>
  <section aria-labelledby="carriers-strip" class="mx-auto max-w-7xl px-6 pb-4 pt-6">
    <template v-if="showHeading">
      <h2 id="carriers-strip" class="sr-only">Trusted by Australian carriers</h2>
      <div class="mb-6 h-px w-full bg-[#E5E7EB]/80" />
      <p class="mb-3 text-center text-sm text-slate-500">Trusted by leading Australian carriers</p>
    </template>

    <ul class="grid grid-cols-3 gap-x-6 gap-y-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
      <li
        v-for="carrier in carriers"
        :key="carrier.name"
        class="flex h-12 items-center justify-center opacity-80 transition hover:opacity-100"
        :aria-label="carrier.name"
        :title="carrier.name"
      >
        <img
          :src="carrier.logo"
          :alt="`Carrier: ${carrier.name}`"
          class="h-8 w-auto grayscale transition hover:grayscale-0"
          loading="lazy"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { CARRIERS } from '@/data/ecosystem';

withDefaults(defineProps<{ showHeading?: boolean }>(), {
  showHeading: true
});

const carriers = CARRIERS;
</script>
