<template>
  <section class="pb-0 pt-16" style="background: rgba(0,130,122,0.05);">
    <div class="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between">
      <div class="max-w-lg space-y-6 text-center lg:text-left">
        <span class="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand-teal)]">Testimonials</span>
        <h2 class="text-3xl font-semibold text-[#3b3f41]">What our customers say</h2>
        <p class="text-slate-600">
          Ops, finance and customer service teams rely on Freightmate to keep bookings, pricing and tracking in sync. Here's a quick look at what they've shared with us.
        </p>
        <div class="flex items-center justify-center gap-4 lg:justify-start">
          <button
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--brand-teal)] text-[color:var(--brand-teal)] transition hover:bg-[color:var(--brand-light)]"
            aria-label="Previous testimonial"
            @click="prev"
          >
            <ChevronLeft class="h-5 w-5" />
          </button>
          <div class="flex items-center gap-2">
            <span
              v-for="(_, i) in testimonials"
              :key="`dot-${i}`"
              class="h-2.5 w-2.5 rounded-full transition"
              :class="i === index ? 'bg-[color:var(--brand-teal)]' : 'bg-[color:var(--brand-light)]'"
            />
          </div>
          <button
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--brand-teal)] text-[color:var(--brand-teal)] transition hover:bg-[color:var(--brand-light)]"
            aria-label="Next testimonial"
            @click="next"
          >
            <ChevronRight class="h-5 w-5" />
          </button>
        </div>
      </div>

      <div class="flex flex-1 justify-center lg:justify-end">
        <TestimonialCard v-bind="current" />
      </div>
    </div>

    <div class="mx-auto mt-12 max-w-4xl px-6 pb-16">
      <div class="rounded-2xl bg-white/90 p-8 text-center shadow-card">
        <h3 class="text-2xl font-semibold text-[color:var(--brand-slate)]">Ready to automate your freight?</h3>
        <p class="mt-2 text-slate-600">Book a demo and keep your team moving, or explore the feature tour.</p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
          <RouterLink to="/contact" class="btn-primary">
            Book a demo
          </RouterLink>
          <a href="#feature-grid" class="btn-secondary">
            Explore features
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { usePrefersReducedMotion } from '@/composables/usePrefersReducedMotion';
import TestimonialCard from '@/components/TestimonialCard.vue';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

const testimonials: Testimonial[] = [
  { quote: 'Freightmate cut our booking time in half!', author: 'Jess, Ops Lead', role: 'National Forwarder' },
  { quote: 'The pricing optimiser paid for itself in weeks.', author: 'Sam, Commercial Manager', role: '3PL' },
  { quote: 'We automated invoice audit and saved thousands.', author: 'Priya, Finance', role: 'Global Forwarder' },
  { quote: 'Exception visibility helped us get ahead of delays.', author: 'Michael, Customer Service', role: 'Freight' }
];

const index = ref(0);
const prefersReducedMotion = usePrefersReducedMotion();
let timer: ReturnType<typeof setInterval> | null = null;

const next = () => {
  index.value = (index.value + 1) % testimonials.length;
};

const prev = () => {
  index.value = (index.value - 1 + testimonials.length) % testimonials.length;
};

const startLoop = () => {
  clearLoop();
  if (prefersReducedMotion.value) return;
  timer = setInterval(next, 6000);
};

const clearLoop = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

onMounted(() => {
  startLoop();
});

onBeforeUnmount(() => {
  clearLoop();
});

watch(prefersReducedMotion, (prefers) => {
  if (prefers) {
    clearLoop();
  } else {
    startLoop();
  }
});

const current = computed(() => testimonials[index.value] ?? testimonials[0]);
</script>
