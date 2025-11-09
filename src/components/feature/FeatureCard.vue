<template>
  <div class="group rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
    <h3 class="text-lg font-semibold text-slate-900">
      {{ title }}
    </h3>
    <div class="mt-2 text-slate-600">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
