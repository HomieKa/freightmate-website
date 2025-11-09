<template>
  <main class="pb-16">
    <section class="hero-bg pb-10 pt-24">
      <article v-if="post" class="mx-auto max-w-3xl px-4 py-10">
        <h1 class="text-3xl font-bold">{{ post.title }}</h1>
        <img :src="withBase('images/hero-illustration.svg')" alt="article header" class="mt-4 h-48 w-full rounded-2xl object-cover" />
        <div class="prose mt-6 max-w-none">
          <section v-for="section in post.sections" :key="section.heading">
            <component :is="section.level === 'h2' ? 'h2' : 'h3'" class="font-semibold" :class="section.level === 'h2' ? 'text-xl' : ''">
              {{ section.heading }}
            </component>
            <p>{{ section.text }}</p>
          </section>
        </div>
      </article>
      <div v-else class="mx-auto max-w-3xl px-4 py-10">
        <h1 class="text-2xl font-bold">Article not found</h1>
        <p>Try another post from the resources page.</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { usePageMeta } from '@/composables/usePageMeta';
import { withBase } from '@/lib/assets';

type ArticleSection = { heading: string; text: string; level: 'h2' | 'h3' };
type Article = { title: string; sections: ArticleSection[] };

const content: Record<string, Article> = {
  'getting-started-byo-carriers': {
    title: 'Getting started with BYO carriers',
    sections: [
      { heading: 'Add carriers and rates', text: 'Connect your carrier accounts with credentials and upload your contracted rate cards. Map services and surcharges so Freightmate can compare like-for-like.', level: 'h2' },
      { heading: 'Test and validate', text: 'Use the onboarding wizard to make a few test bookings and confirm ETAs, rules and labels look right before you go live.', level: 'h3' }
    ]
  },
  'unified-timeline-guide': {
    title: 'How to read your unified timeline',
    sections: [
      { heading: 'Events at a glance', text: 'Track driver scans, milestones, ETAs and exceptions in one consolidated view. Use filters to focus by account, carrier or service.', level: 'h2' },
      { heading: 'Share and act', text: 'Share live links with customers and trigger follow-ups when something slips, so teams resolve issues proactively.', level: 'h3' }
    ]
  },
  'basic-bi-from-exports': {
    title: 'Building a basic BI view from exported reports',
    sections: [
      { heading: 'Start with exports', text: 'Export shipment and cost reports (CSV/XLS) and load into your BI tool or spreadsheet. Track volumes, on-time % and top exceptions.', level: 'h2' },
      { heading: 'Iterate quickly', text: 'Use breakdowns by carrier, lane and service to spot trends. When ready, wire up webhooks or APIs to automate updates.', level: 'h3' }
    ]
  }
};

const route = useRoute();
const slug = computed(() => route.params.slug as string);
const post = computed(() => content[slug.value]);

const pageTitle = computed(() => (post.value ? post.value.title : 'Resource not found'));

usePageMeta({
  title: pageTitle,
  description: 'Freightmate resources and guides.'
});
</script>
