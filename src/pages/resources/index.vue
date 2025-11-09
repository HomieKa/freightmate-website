<template>
  <main class="pb-16">
    <section class="hero-bg pb-10 pt-16">
      <FeatureLayout>
        <FeatureHero
          eyebrow="Resources"
          title="Guides, playbooks and product updates"
          subtitle="Explore how operations, finance and customer teams get value from Freightmate. Search how-tos, walkthroughs and stakeholder explainers."
          :image-src="withBase('images/features/resources.png')"
          image-alt="Resource articles overview"
        />

        <FeatureSection title="Browse the library">
          <div class="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <div class="grid gap-4 md:grid-cols-[2fr_1fr]">
              <input
                v-model="query"
                aria-label="Search resources"
                placeholder="Search by title or keywords"
                class="rounded-2xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
              />
              <div class="flex justify-start gap-2 md:justify-end">
                <button
                  type="button"
                  class="rounded-2xl border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:border-teal-200 hover:text-teal-700"
                  @click="resetFilters"
                >
                  Clear filters
                </button>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <button
                v-for="topic in topics"
                :key="topic.key"
                type="button"
                class="rounded-3xl border p-5 text-left shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                :class="activeTopic === topic.key ? 'border-teal-300 bg-teal-50 text-teal-900' : 'border-slate-200 bg-white text-slate-900 hover:-translate-y-1'"
                @click="activeTopic = topic.key"
              >
                <span class="text-sm uppercase tracking-wide text-slate-500">
                  {{ topic.key === 'All' ? 'Everything' : topic.key }}
                </span>
                <h3 class="mt-2 text-lg font-semibold">{{ topic.title }}</h3>
                <p class="mt-2 text-sm text-slate-600">{{ topic.description }}</p>
              </button>
            </div>
          </div>
        </FeatureSection>

        <FeatureSection title="Latest articles">
          <div v-if="filtered.length === 0" class="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center text-sm text-slate-500">
            No resources match that search yet. Try a different keyword or topic.
          </div>
          <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <RouterLink
              v-for="post in filtered"
              :key="post.slug"
              :to="`/resources/${post.slug}`"
              class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1"
            >
              <div class="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500">
                <span>{{ post.tag }}</span>
                <span>{{ post.mins }} min read · {{ post.topic }}</span>
              </div>
              <h3 class="mt-3 text-lg font-semibold text-slate-900">{{ post.title }}</h3>
              <p class="mt-2 flex-1 text-sm text-slate-600">{{ post.excerpt }}</p>
              <span class="mt-4 inline-flex items-center text-sm font-medium text-teal-700">
                Read article
                <svg
                  aria-hidden="true"
                  class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </RouterLink>
          </div>
        </FeatureSection>
      </FeatureLayout>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import FeatureLayout, { FeatureHero, FeatureSection } from '@/components/feature/FeatureLayout';
import { usePageMeta } from '@/composables/usePageMeta';
import { withBase } from '@/lib/assets';

type TopicKey = 'Setup' | 'Tracking' | 'Analytics';
type Topic = { key: TopicKey | 'All'; title: string; description: string };
type Post = { slug: string; title: string; excerpt: string; tag: string; topic: TopicKey; mins: number };

const topics: Topic[] = [
  { key: 'All', title: 'All resources', description: 'Browse every article, guide and update from the team.' },
  { key: 'Setup', title: 'Getting started', description: 'Load carriers, rates and processes so your teams launch smoothly.' },
  { key: 'Tracking', title: 'Tracking & comms', description: 'Share timelines, manage exceptions and keep customers informed.' },
  { key: 'Analytics', title: 'Analytics & reporting', description: 'Turn exports into KPIs for ops, finance and customer teams.' }
];

const posts: Post[] = [
  {
    slug: 'getting-started-byo-carriers',
    title: 'Why BYO carriers still need an FMS home',
    excerpt:
      'Even with strong carrier relationships, businesses need a shared workspace to enforce routing rules, keep pricing compliant and simplify onboarding across sites.',
    tag: 'Foundations',
    topic: 'Setup',
    mins: 8
  },
  {
    slug: 'unified-timeline-guide',
    title: 'Turning live tracking into customer trust',
    excerpt:
      "See how freight teams use a unified FMS timeline to flag risks early, automate notifications and give sales and service the context they need in moments.",
    tag: 'Customer',
    topic: 'Tracking',
    mins: 7
  },
  {
    slug: 'basic-bi-from-exports',
    title: 'Building the business case with freight analytics',
    excerpt:
      'Learn how operations and finance leaders translate scan events and invoices into margin protection, procurement leverage and executive-ready KPIs.',
    tag: 'Insights',
    topic: 'Analytics',
    mins: 9
  }
];

const query = ref('');
const activeTopic = ref<TopicKey | 'All'>('All');

const filtered = computed(() =>
  posts.filter((post) => {
    const matchesTopic = activeTopic.value === 'All' || post.topic === activeTopic.value;
    const matchesQuery =
      !query.value ||
      post.title.toLowerCase().includes(query.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.value.toLowerCase());
    return matchesTopic && matchesQuery;
  })
);

const resetFilters = () => {
  query.value = '';
  activeTopic.value = 'All';
};

usePageMeta({
  title: 'Resources | Freightmate',
  description: 'Guides, playbooks and product updates from the Freightmate team.'
});
</script>
