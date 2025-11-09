<template>
  <div>
    <Hero />
    <FeaturesCompact />
    <FadeUp>
      <CarrierIntegrationShowcase />
    </FadeUp>
    <Testimonials />
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import FeaturesCompact from '@/components/FeaturesCompact.vue';
import CarrierIntegrationShowcase from '@/components/CarrierIntegrationShowcase.vue';
import Testimonials from '@/components/Testimonials.vue';
import FadeUp from '@/components/animations/FadeUp.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta({
  title: 'Freightmate - Automate your freight',
  description: 'Live rates, zero-touch documents, and AI-assisted workflows built for all businesses.'
});
</script>
