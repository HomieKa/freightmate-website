<template>
  <main class="pb-16">
    <section class="hero-bg pt-20 pb-10">
      <section class="mx-auto max-w-7xl px-6 py-12 text-center">
        <h2 class="text-4xl font-bold tracking-tight text-brand-slate sm:text-5xl">
          The team behind Freightmate
        </h2>
        <p class="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
          Product, engineering and customer teams work side by side with operators to refine workflows and deliver lasting improvements.
        </p>
        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="member in team"
            :key="member.name"
            class="rounded-2xl border border-[#E5E7EB] bg-white p-6 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1"
          >
            <img :src="member.img" :alt="`${member.name} headshot`" class="mx-auto h-28 w-28 rounded-full object-cover" />
            <h3 class="mt-3 text-lg font-semibold text-brand-slate">
              {{ member.name }}
            </h3>
            <p class="text-sm opacity-80">{{ member.role }}</p>
            <p class="mt-2 text-sm text-slate-700">{{ member.bio }}</p>
            <div class="mt-3 flex justify-center">
              <a
                :href="member.linkedin"
                target="_blank"
                rel="noreferrer"
                :aria-label="`${member.name} on LinkedIn`"
                class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] text-brand-teal transition hover:bg-[#E5E7EB]/60"
              >
                <Linkedin class="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section
        v-for="(section, index) in sections"
        :key="section.id"
        class="mx-auto max-w-7xl px-6 py-12"
      >
        <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <Reveal :class="index % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-2'">
            <div class="group rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-sm transition-transform duration-200 hover:-translate-y-1">
              <div class="relative h-64 w-full md:h-72 lg:h-80">
                <img
                  :src="section.img"
                  :alt="section.alt"
                  class="h-full w-full rounded-xl object-contain"
                />
              </div>
            </div>
          </Reveal>

          <Reveal :class="index % 2 === 0 ? 'order-1 md:order-2' : 'order-1 md:order-1'">
            <div>
              <h2 class="text-2xl font-semibold text-slate-900">{{ section.title }}</h2>
              <p class="mt-2 text-slate-600">{{ section.intro }}</p>
              <ul class="mt-4 list-disc space-y-1 pl-5 text-slate-600">
                <li v-for="(point, idx) in section.points" :key="`${section.id}-${idx}`">
                  {{ point }}
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-6 py-12">
        <div class="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-10 text-center shadow-sm">
          <h2 class="text-2xl font-semibold text-brand-slate">Ready to streamline your freight operations?</h2>
          <p class="mt-2 text-slate-600">Share your carriers, integrations and goals; we will map a rollout path that fits your team.</p>
          <RouterLink
            to="/contact"
            class="mt-6 inline-flex items-center rounded-lg bg-brand-green px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Book a demo
          </RouterLink>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Linkedin } from 'lucide-vue-next';
import Reveal from '@/components/features/Reveal.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { withBase } from '@/lib/assets';

type Section = {
  id: string;
  title: string;
  intro: string;
  points: string[];
  img: string;
  alt: string;
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  img: string;
  linkedin: string;
};

const sections: Section[] = [
  {
    id: 'story',
    title: 'Our story',
    intro:
      'Freightmate began as a response to the juggling act between carrier portals, spreadsheets and siloed teams. Today we help Australian operators orchestrate bookings, pricing, consignments and tracking in one coordinated platform.',
    points: [
      'Independent and product-led from day one.',
      'Built alongside operators who live the freight workflow every day.',
      'Relentless focus on removing manual re-entry and duplicated effort.'
    ],
    img: withBase('images/features/despatch.png'),
    alt: 'Freight team collaborating over digital tools'
  },
  {
    id: 'mission',
    title: 'Our mission',
    intro: 'We make freight management simpler, smarter and more connected so teams can focus on growth, service and relationships.',
    points: [
      'Unify carrier rules, pricing and fulfilment in one workflow.',
      'Surface the right option automatically, based on your policies.',
      'Feed clean data to finance, customer success and leadership.'
    ],
    img: withBase('images/features/carrier_selection_costing.png'),
    alt: 'Dashboard showing freight performance metrics'
  },
  {
    id: 'approach',
    title: 'How we work',
    intro:
      'Freightmate evolves with every customer rollout. We partner closely through onboarding, training and optimisation so your team realises value quickly and keeps momentum.',
    points: [
      'Guided implementation tailored to your carriers and lanes.',
      'Hands-on training for operations, finance and support teams.',
      'Continuous improvement backed by product and engineering.'
    ],
    img: withBase('images/features/analytics.png'),
    alt: 'Team reviewing logistics analytics together'
  }
];

const team: TeamMember[] = [
  {
    name: 'Michelle Hall',
    role: 'Co-founder & Director',
    bio: '20+ years in freight sales and logistics, partnering with shippers to streamline "ugly freight" with dependable tech and service.',
    img: withBase('images/people/Michelle.jpg'),
    linkedin: 'https://www.linkedin.com/in/michelle-hall-52b0718b/'
  },
  {
    name: 'Mladen Kustura',
    role: 'Co-founder & Director',
    bio: 'Led express freight operations at TUCO, focused on removing admin friction and keeping teams on-plan when volumes spike.',
    img: withBase('images/people/Mladen.jpg'),
    linkedin: 'https://www.linkedin.com/in/mladenkustura/'
  },
  {
    name: 'Terry Sposato',
    role: 'Engineering Lead',
    bio: 'Seasoned technology leader across Telstra, Accenture and Freightmate Systems, dedicated to reliable integrations and operator UX.',
    img: withBase('images/people/Terry.jpg'),
    linkedin: 'https://www.linkedin.com/in/terry-sposato-9174042/'
  }
];

usePageMeta({
  title: 'About Freightmate',
  description: 'Meet the Freightmate team and see how we partner with operators to remove manual freight work.'
});
</script>
