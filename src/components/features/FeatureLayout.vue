<template>
  <main class="mx-auto max-w-5xl px-6 pb-16 pt-24 sm:px-8">
    <header class="mb-8 space-y-3 text-left">
      <h1 class="text-4xl font-bold tracking-tight text-brand-slate sm:text-5xl">
        {{ title }}
      </h1>
      <p class="text-lg text-slate-600">
        {{ tagline }}
      </p>
      <div
        v-if="heroImageSrc"
        class="mt-4 w-full max-w-[560px] rounded-2xl border border-[color:var(--brand-light)] bg-white p-2 shadow-sm"
      >
        <div class="relative w-full overflow-hidden rounded-xl" style="aspect-ratio: 16/9;">
          <img :src="heroImageSrc" :alt="title" class="h-full w-full rounded-xl object-contain" />
        </div>
      </div>
    </header>

    <div class="space-y-16">
      <slot />
    </div>

    <div class="mt-12 flex flex-wrap gap-3">
      <RouterLink v-if="ctaPrimary" :to="ctaPrimary.href" class="btn-primary-teal">
        {{ ctaPrimary.label }}
      </RouterLink>
      <RouterLink v-if="ctaSecondary" :to="ctaSecondary.href" class="btn-secondary">
        {{ ctaSecondary.label }}
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

type CTA = { label: string; href: string };

withDefaults(
  defineProps<{
    title: string;
    tagline: string;
    heroImageSrc?: string;
    ctaPrimary?: CTA;
    ctaSecondary?: CTA;
  }>(),
  {
    heroImageSrc: '',
    ctaPrimary: () => ({ label: 'Talk to us', href: '/contact' }),
    ctaSecondary: undefined
  }
);
</script>
