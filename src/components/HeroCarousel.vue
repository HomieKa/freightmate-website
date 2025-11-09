<template>
  <div
    ref="container"
    tabindex="0"
    aria-label="Slideshow of freight images"
    class="group relative isolate overflow-hidden rounded-xl bg-transparent shadow-card transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-600"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
  >
    <div class="relative w-full" :style="{ aspectRatio: '1024/684' }">
      <div
        v-for="(img, i) in slides"
        :key="img.src"
        class="absolute inset-0 transition-opacity duration-700"
        :class="i === index ? 'opacity-100' : 'opacity-0'"
        :aria-hidden="i !== index"
      >
        <img
          :src="img.src"
          :alt="img.alt"
          class="h-full w-full rounded-xl object-contain bg-transparent"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { usePrefersReducedMotion } from '@/composables/usePrefersReducedMotion';
import { withBase } from '@/lib/assets';

type Slide = { src: string; alt: string };

const DEFAULT_IMAGES: Slide[] = [
  { src: withBase('images/hero/TUCO_24.jpg'), alt: 'Freightmate warehouse scene' },
  { src: withBase('images/hero/TUCO_35.jpg'), alt: 'Warehouse worker moving packages' },
  { src: withBase('images/hero/TUCO_60 (1).jpg'), alt: 'Dispatcher operating freight software' },
  { src: withBase('images/hero/TUCO_74.jpg'), alt: 'Busy warehouse aisle' },
  { src: withBase('images/hero/TUCO_75.jpg'), alt: 'Pallets prepared for despatch' },
  { src: withBase('images/hero/TUCO_81.jpg'), alt: 'Freightmate operations floor' },
  { src: withBase('images/hero/TUCO_87.jpg'), alt: 'High-bay racking and forklifts' },
  { src: withBase('images/hero/TUCO_93.jpg'), alt: 'Large distribution center' }
];

const props = defineProps<{ images?: Slide[] }>();

const slides = computed<Slide[]>(() => (props.images?.length ? props.images : DEFAULT_IMAGES));
const index = ref(0);
const paused = ref(false);
const container = ref<HTMLElement | null>(null);
const prefersReducedMotion = usePrefersReducedMotion();

let timer: ReturnType<typeof setInterval> | null = null;
const INTERVAL_MS = 5000;

const clearTimer = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

const startTimer = () => {
  clearTimer();
  if (prefersReducedMotion.value || paused.value || slides.value.length <= 1) return;
  timer = setInterval(() => {
    index.value = (index.value + 1) % slides.value.length;
  }, INTERVAL_MS);
};

watch([paused, prefersReducedMotion, () => slides.value.length], startTimer);

const prev = () => {
  index.value = (index.value - 1 + slides.value.length) % slides.value.length;
};

const next = () => {
  index.value = (index.value + 1) % slides.value.length;
};

onMounted(() => {
  startTimer();
  if (typeof window !== 'undefined' && container.value) {
    container.value.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prev();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        next();
      }
    });
  }
});

onBeforeUnmount(() => {
  clearTimer();
});
</script>
