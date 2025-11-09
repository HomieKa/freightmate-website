<template>
  <div class="h-full w-full max-w-xl shrink-0 snap-start rounded-2xl bg-white p-8 ring-1 ring-[color:var(--brand-light)]/60 shadow-card">
    <p class="text-lg italic leading-relaxed md:text-xl">
      &ldquo;{{ quote }}&rdquo;
    </p>
    <div class="mt-4 text-sm font-medium">
      {{ author }}
    </div>
    <div class="text-xs opacity-80">
      {{ role }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  quote: string;
  author: string;
  role: string;
}>();
</script>
