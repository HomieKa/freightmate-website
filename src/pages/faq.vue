<template>
  <main class="pb-16">
    <section class="hero-bg pb-10 pt-16">
      <FeatureLayout>
        <FeatureHero
          eyebrow="Support"
          title="Frequently asked questions"
          subtitle="Quick answers about carriers, integrations, pricing and tracking. Need something more specific? Reach out and our team will help."
          :image-src="withBase('images/features/faq.png')"
          image-alt="Questions and answers"
        />

        <FeatureSection title="Browse by topic">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <button
              v-for="topic in topics"
              :key="topic.key"
              type="button"
              class="rounded-3xl border p-5 text-left shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              :class="isActive(topic.key) ? 'border-teal-300 bg-teal-50 text-teal-900' : 'border-slate-200 bg-white text-slate-900 hover:-translate-y-1'"
              @click="activeTopic = topic.key"
            >
              <span class="text-sm uppercase tracking-wide text-slate-500">
                {{ topic.key === 'All' ? 'Everything' : topic.title.split(' ')[0] }}
              </span>
              <h3 class="mt-2 text-lg font-semibold">{{ topic.title }}</h3>
              <p class="mt-2 text-sm text-slate-600">{{ topic.description }}</p>
            </button>
          </div>
        </FeatureSection>

        <FeatureSection title="Common questions">
          <div class="mx-auto max-w-4xl">
            <div
              v-if="filteredItems.length === 0"
              class="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center text-sm text-slate-500"
            >
              No questions in this topic yet. Check back soon or contact support.
            </div>
            <div v-else class="grid gap-3">
              <FAQItem
                v-for="item in filteredItems"
                :key="item.q"
                :q="item.q"
                :a="item.a"
                :open="openQuestion === item.q"
                @update:open="(nextOpen) => (openQuestion = nextOpen ? item.q : null)"
              />
            </div>
          </div>
        </FeatureSection>
      </FeatureLayout>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useHead } from '@vueuse/head';
import FAQItem from '@/components/FAQItem.vue';
import FeatureLayout, { FeatureHero, FeatureSection } from '@/components/feature/FeatureLayout';
import { usePageMeta } from '@/composables/usePageMeta';
import { withBase } from '@/lib/assets';

type TopicKey = 'carriers' | 'integrations' | 'tracking';
type Topic = { key: TopicKey | 'All'; title: string; description: string };
type FAQ = { q: string; a: string; topic: TopicKey };

const topics: Topic[] = [
  { key: 'All', title: 'All topics', description: 'Browse every question about Freightmate in one place.' },
  { key: 'carriers', title: 'Carriers & pricing', description: 'Bring your own contracts, set routing rules and manage costs.' },
  { key: 'integrations', title: 'Integrations', description: 'Connect Freightmate with ERP, WMS, ecommerce and finance stacks.' },
  { key: 'tracking', title: 'Tracking & visibility', description: 'Share timelines, manage exceptions and keep customers updated.' }
];

const items: FAQ[] = [
  { q: 'Can I bring my own carrier accounts and rates?', a: 'Yes. Add carriers with your credentials and load your rate cards.', topic: 'carriers' },
  { q: 'Can I choose carriers by rules (price, ETA, preferred)?', a: 'Yes. Set default rules; users can override with a reason.', topic: 'carriers' },
  { q: 'What integrations do you support?', a: 'Pre-built connectors where available, plus an open API and webhooks for custom flows.', topic: 'integrations' },
  { q: 'Do you support child accounts for branches/customers?', a: 'Yes; create accounts with scoped access and branding.', topic: 'carriers' },
  { q: 'How does tracking work?', a: 'We unify carrier events and ETAs into one timeline with filters and shareable links.', topic: 'tracking' },
  { q: 'Can I estimate shipment cost before booking?', a: 'Yes. Use your contracts and surcharge templates to see a quick estimate.', topic: 'carriers' }
];

const activeTopic = ref<TopicKey | 'All'>('All');
const openQuestion = ref<string | null>(items[0]?.q ?? null);

const filteredItems = computed(() =>
  activeTopic.value === 'All' ? items : items.filter((item) => item.topic === activeTopic.value)
);

watch(filteredItems, (list) => {
  openQuestion.value = list[0]?.q ?? null;
});

const isActive = (key: TopicKey | 'All') => activeTopic.value === key;

usePageMeta({
  title: 'Freightmate FAQ',
  description: 'Answers about Freightmate carriers, integrations, pricing and tracking.'
});

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        }))
      })
    }
  ]
});
</script>
