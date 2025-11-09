<template>
  <main class="pb-16">
    <IntegrationsContent />
  </main>
</template>

<script setup lang="ts">
import IntegrationsContent from '@/components/partners/IntegrationsContent.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta({
  title: 'Integrations | Freightmate',
  description: 'Connect Freightmate to your ERP, WMS, ecommerce or finance stack with prebuilt integrations, adapters and APIs.'
});
</script>
