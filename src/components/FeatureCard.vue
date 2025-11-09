<template>
  <component
    :is="href ? RouterLink : 'div'"
    v-bind="href ? { to: href } : {}"
    class="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
  >
    <div class="group relative h-full rounded-2xl bg-white/80 p-6 ring-1 ring-[color:var(--brand-light)]/60 shadow-card transition hover:-translate-y-px">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-teal)]/10 text-[color:var(--brand-teal)]">
          <slot name="icon" />
        </div>
        <h3 class="font-semibold text-[color:var(--brand-slate)]">
          {{ title }}
        </h3>
      </div>
      <p class="mt-3 text-sm leading-relaxed text-[color:var(--brand-slate)]">
        {{ description }}
      </p>
    </div>
  </component>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  title: string;
  description: string;
  href?: string;
}>();
</script>
