<template>
  <div class="grid gap-3">
    <div v-for="(item, index) in items" :key="`${item.q}-${index}`" class="surface p-4">
      <button
        class="flex w-full items-center justify-between text-left font-medium"
        :aria-expanded="openIndex === index"
        @click="toggle(index)"
      >
        {{ item.q }}
        <span class="text-sm opacity-70">{{ openIndex === index ? '-' : '+' }}</span>
      </button>
      <p v-if="openIndex === index" class="mt-2 text-sm">
        {{ item.a }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRef } from 'vue';

const props = defineProps<{ items: { q: string; a: string }[] }>();
const items = toRef(props, 'items');
const openIndex = ref<number | null>(0);

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>
