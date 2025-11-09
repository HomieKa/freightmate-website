<template>
  <header class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2">
    <div>
      <p v-if="eyebrow" class="text-xs uppercase tracking-wide text-teal-700">
        {{ eyebrow }}
      </p>
      <h1 class="mt-1 text-3xl font-semibold text-slate-900 md:text-4xl">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="mt-3 max-w-2xl text-slate-600">
        {{ subtitle }}
      </p>
    </div>
    <div
      v-if="imageSrc"
      class="rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-sm"
    >
      <img
        :src="imageSrc"
        :alt="imageAlt || ''"
        width="980"
        height="640"
        class="h-auto w-full rounded-xl object-cover"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    subtitle?: string;
    imageSrc?: string;
    imageAlt?: string;
  }>(),
  {
    eyebrow: undefined,
    subtitle: undefined,
    imageSrc: undefined,
    imageAlt: ''
  }
);
</script>
