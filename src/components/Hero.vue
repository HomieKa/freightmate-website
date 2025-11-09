<template>
  <section class="hero-bg pb-10 pt-32">
    <section class="relative overflow-hidden pb-8 md:pb-12">
      <div class="relative z-10 mx-auto grid max-w-screen-2xl items-center gap-10 px-6 md:grid-cols-2 lg:gap-16">
        <FadeUp>
          <div>
            <h1 class="fluid-h1 font-extrabold text-[color:var(--brand-slate)]">
              Powerful
              <span class="text-[color:var(--brand-teal)]">freight management</span>
              built for your growth.
            </h1>
            <p class="mt-4 text-lg">
              Handle bookings, pricing, consignments and tracking in one place - with unified workflows, clear ETAs and fewer manual steps.
            </p>
          </div>
        </FadeUp>
        <div class="relative md:-mr-2 lg:-mr-4 xl:-mr-8 2xl:-mr-10">
          <HeroCarousel />
        </div>
      </div>
      <svg
        aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-0 w-full translate-y-[1px]"
        viewBox="0 0 1440 90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,64 C240,96 480,0 720,16 C960,32 1200,112 1440,80 L1440,90 L0,90 Z" fill="#ffffff" />
      </svg>
    </section>
  </section>
</template>

<script setup lang="ts">
import HeroCarousel from '@/components/HeroCarousel.vue';
import FadeUp from '@/components/animations/FadeUp.vue';
</script>
