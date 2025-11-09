<template>
  <span>{{ prefix }}{{ formatted }}{{ suffix }}</span>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    from?: number;
    to: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
  }>(),
  {
    from: 0,
    duration: 1.6,
    prefix: '',
    suffix: '',
    decimals: 0
  }
);

const value = ref(props.from);
const formatter = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: props.decimals,
  minimumFractionDigits: props.decimals
});
const formatted = computed(() => formatter.format(value.value));

const animate = () => {
  const start = performance.now();
  const change = props.to - props.from;
  const durationMs = props.duration * 1000;

  const tick = (now: number) => {
    const progress = Math.min((now - start) / durationMs, 1);
    value.value = props.from + change * progress;
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

onMounted(() => {
  if (props.from !== props.to) {
    animate();
  }
});

const prefix = computed(() => props.prefix);
const suffix = computed(() => props.suffix);
</script>
