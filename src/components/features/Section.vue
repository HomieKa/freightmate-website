<template>
  <section>
    <h2 class="text-2xl font-semibold text-brand-slate">
      {{ title }}
    </h2>
    <div class="prose prose-slate mt-3 max-w-none">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
