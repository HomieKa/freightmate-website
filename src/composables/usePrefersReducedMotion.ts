import { onMounted, ref } from 'vue';

export function usePrefersReducedMotion() {
  const prefersReducedMotion = ref(false);

  onMounted(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) {
      return;
    }
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.value = media.matches;
    const handler = (event: MediaQueryListEvent) => {
      prefersReducedMotion.value = event.matches;
    };
    media.addEventListener('change', handler);
    window.addEventListener('beforeunload', () => media.removeEventListener('change', handler), { once: true });
  });

  return prefersReducedMotion;
}
