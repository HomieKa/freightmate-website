<template>
  <div
    ref="target"
    v-bind="$attrs"
    class="transition duration-500"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useInView } from '@/composables/useInView';

defineOptions({ inheritAttrs: false });

const { target, isVisible } = useInView({ threshold: 0.3 });
const visible = isVisible;
</script>
