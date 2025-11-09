<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
    <h1 class="text-4xl font-bold text-brand-slate">Page not found</h1>
    <p class="mt-2 text-slate-600">The page you were looking for could not be found.</p>
    <RouterLink class="btn-primary mt-4" to="/">Back to home</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
