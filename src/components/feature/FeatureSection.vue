<template>
  <section
    ref="target"
    class="mx-auto max-w-7xl px-6 py-8 transition-all duration-500"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
  >
    <h2 v-if="title" class="mb-4 text-2xl font-semibold text-slate-900">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
import { useInView } from '@/composables/useInView';

withDefaults(defineProps<{ title?: string }>(), {
  title: undefined
});

const { target, isVisible } = useInView({ threshold: 0.15 });
const visible = isVisible;
</script>
