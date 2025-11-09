<template>
  <div
    class="transition will-change-transform"
    :class="hovered ? 'scale-[1.02] -translate-y-[2px]' : ''"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @focusin="hovered = true"
    @focusout="hovered = false"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const hovered = ref(false);
</script>
