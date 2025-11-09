import { onBeforeUnmount, onMounted, ref } from 'vue';

export function useInView(options: globalThis.IntersectionObserverInit = { threshold: 0.2, rootMargin: '0px' }) {
  const target = ref<HTMLElement | null>(null);
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      isVisible.value = true;
      return;
    }
    observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry?.isIntersecting) {
        isVisible.value = true;
        observer?.disconnect();
        observer = null;
      }
    }, options);
    if (target.value) {
      observer.observe(target.value);
    }
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    observer = null;
  });

  return { target, isVisible };
}
