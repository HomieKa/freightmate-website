<template>
  <header class="fixed inset-x-0 top-0 z-50 text-white transition-[color,transform]">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out backdrop-blur-xl"
      :class="scrolled ? 'opacity-100' : 'opacity-0'"
      :style="{
        background: scrolled
          ? 'linear-gradient(90deg, rgba(128,191,69,0.92), rgba(0,130,122,0.92))'
          : 'transparent'
      }"
    />
    <div
      class="relative mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-4 transition-all"
      :class="scrolled ? 'py-2' : 'py-4'"
    >
      <div class="flex items-center gap-6">
        <RouterLink to="/">
          <img
            :src="logoSrc"
            alt="Freightmate"
            class="w-auto transition-all"
            :class="scrolled ? 'h-6' : 'h-8'"
            :style="{ filter: scrolled ? 'none' : 'invert(1)' }"
          />
        </RouterLink>
        <nav class="hidden items-center gap-6 md:flex">
          <div
            class="relative"
            @mouseenter="openFeatures = true"
            @mouseleave="openFeatures = false"
          >
            <button
              aria-haspopup="true"
              :aria-expanded="openFeatures"
              class="inline-flex items-center gap-1"
              :class="[baseLink, itemColor(route.path.startsWith('/features'))]"
              @click="navigate('/features')"
              @focus="openFeatures = true"
              @blur="openFeatures = false"
            >
              Features
              <ChevronDown class="h-4 w-4" />
            </button>
            <Transition name="fade">
              <div v-if="openFeatures" class="absolute left-0 top-full z-50 w-[56rem] pt-2">
                <div class="rounded-2xl border border-brand-light bg-white p-4 shadow-card">
                  <div role="menu" aria-label="Features" class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <RouterLink
                      v-for="feature in features"
                      :key="feature.href"
                      role="menuitem"
                      :to="feature.href"
                      class="block rounded-xl p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal hover:bg-brand-light/50"
                    >
                      <div class="text-sm font-semibold text-[#3b3f41]">
                        {{ feature.label }}
                      </div>
                      <div class="truncate text-sm text-[#3b3f41]/80">
                        {{ feature.desc }}
                      </div>
                    </RouterLink>
                  </div>
                  <div class="mt-3 border-t border-brand-light/70" />
                  <RouterLink
                    to="/features"
                    class="mt-2 block rounded-xl px-3 py-2 text-sm font-medium text-brand-teal hover:bg-brand-light/50"
                  >
                    View all features &gt;
                  </RouterLink>
                </div>
              </div>
            </Transition>
          </div>

          <div
            class="relative"
            @mouseenter="openPartners = true"
            @mouseleave="openPartners = false"
          >
            <button
              aria-haspopup="true"
              :aria-expanded="openPartners"
              class="inline-flex items-center gap-1"
              :class="[baseLink, itemColor(route.path.startsWith('/partners'))]"
              @click="navigate('/partners')"
              @focus="openPartners = true"
              @blur="openPartners = false"
            >
              Partners
              <ChevronDown class="h-4 w-4" />
            </button>
            <Transition name="fade">
              <div v-if="openPartners" class="absolute left-0 top-full z-50 w-[32rem] pt-2">
                <div class="rounded-2xl border border-brand-light bg-white p-4 shadow-card">
                  <div role="menu" aria-label="Partners" class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <RouterLink
                      v-for="partner in partners"
                      :key="partner.href"
                      role="menuitem"
                      :to="partner.href"
                      class="block rounded-xl p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal hover:bg-brand-light/50"
                    >
                      <div class="text-sm font-semibold text-[#3b3f41]">
                        {{ partner.label }}
                      </div>
                      <div class="truncate text-sm text-[#3b3f41]/80">
                        {{ partner.desc }}
                      </div>
                    </RouterLink>
                  </div>
                  <div class="mt-3 border-t border-brand-light/70" />
                  <RouterLink
                    to="/partners"
                    class="mt-2 block rounded-xl px-3 py-2 text-sm font-medium text-brand-teal hover:bg-brand-light/50"
                  >
                    View partners overview &gt;
                  </RouterLink>
                </div>
              </div>
            </Transition>
          </div>

          <RouterLink
            v-for="item in nav"
            :key="item.href"
            :to="item.href"
            :class="[baseLink, itemColor(route.path === item.href)]"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>

      <div class="flex items-center gap-4 justify-self-end">
        <RouterLink
          to="/contact"
          class="inline-flex items-center rounded-lg bg-brand-green px-4 py-2 text-sm font-medium text-white hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          Book a demo
        </RouterLink>
        <a :href="loginUrl" target="_blank" rel="noreferrer" :class="utilityLink">
          Log in
        </a>
        <a :href="supportUrl" target="_blank" rel="noreferrer" :class="utilityLink">
          Support
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const nav = [
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/faq', label: 'FAQ' }
];

const features = [
  { href: '/features/carrier-selection', label: 'Carrier selection & cost calculator', desc: 'BYO rates + upfront estimate.' },
  { href: '/features/despatch', label: 'Book & Despatch', desc: 'Bookings, manifests and CSV imports.' },
  { href: '/features/track-trace', label: 'Track & trace', desc: 'Unified events and live ETAs.' },
  { href: '/features/basic-bi-dashboard', label: 'BI dashboard', desc: 'Quick KPIs, trends, exceptions.' },
  { href: '/features/rates', label: 'Rate Management', desc: 'Manage your rates, fees, fuel and more.' }
];

const partners = [
  { href: '/partners/carriers', label: 'Carriers', desc: 'Supported carriers & setup.' },
  { href: '/partners/integrations', label: 'Integrations', desc: 'Pre-built connectors and API.' }
];

const openFeatures = ref(false);
const openPartners = ref(false);
const scrolled = ref(false);
const router = useRouter();
const route = useRoute();

const handleScroll = () => {
  scrolled.value = window.scrollY > 48;
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const baseLink = computed(
  () =>
    `text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal transition-opacity ${
      scrolled.value ? 'hover:opacity-90' : 'hover:opacity-80'
    }`
);

const idleColor = computed(() => (scrolled.value ? 'text-white/90' : 'text-[color:var(--brand-slate)]'));

const itemColor = (active: boolean) => (active ? 'text-[color:var(--brand-teal)]' : idleColor.value);

const utilityLink = computed(
  () =>
    `text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal ${
      scrolled.value
        ? 'text-white/90 hover:opacity-90'
        : 'text-[color:var(--brand-slate)] hover:text-[color:var(--brand-slate)]/80'
    }`
);

const logoSrc = computed(
  () => 'https://app.freightmate.com/static/Header_Logo-W0M4WR8-.svg'
);

const loginUrl = 'https://app.freightmate.com/';
const supportUrl = 'https://docs.freightmate.com/';

function navigate(path: string) {
  router.push(path);
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
