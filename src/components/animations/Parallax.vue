<template>
  <div
    ref="target"
    class="transition-transform duration-300 will-change-transform"
    :style="{ transform: `translateY(${offsetY}px)` }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useMouseInElement } from '@vueuse/core';

const props = withDefaults(defineProps<{ offset?: number }>(), {
  offset: 12
});

const target = ref<HTMLElement | null>(null);
const { elementHeight, elementTop, mouseY, isOutside } = useMouseInElement(target);

const offsetY = computed(() => {
  if (isOutside.value || !elementHeight.value) return 0;
  const relativeY = mouseY.value - (elementTop.value + elementHeight.value / 2);
  return (relativeY / elementHeight.value) * props.offset;
});
</script>
