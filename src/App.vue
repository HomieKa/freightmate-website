<template>
  <div class="min-h-screen bg-white">
    <SiteHeader />
    <a
      class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded-md focus:bg-white focus:px-3 focus:py-1 focus:ring-2 focus:ring-brand-teal"
      href="#main-content"
    >
      Skip to content
    </a>
    <main id="main-content" class="min-h-screen">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import SiteHeader from '@/components/Header.vue';
import SiteFooter from '@/components/Footer.vue';
</script>
