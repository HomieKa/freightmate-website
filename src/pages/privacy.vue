<template>
  <main class="mx-auto max-w-3xl px-6 pb-16 pt-24 space-y-6">
    <h1 class="text-4xl font-bold tracking-tight text-brand-slate">Privacy Policy</h1>
    <p class="text-slate-600">We respect your privacy. This page outlines what data we collect, how we use it, and your rights.</p>
    <section v-for="section in sections" :key="section.title">
      <h2 class="text-xl font-semibold">{{ section.title }}</h2>
      <p class="text-slate-600">{{ section.body }}</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';

const sections = [
  { title: 'Data we collect', body: 'Account details (name, email, phone), company details, usage events (feature adoption), and technical logs for reliability.' },
  { title: 'How we use data', body: 'To provide the service, support you, improve product quality, and meet legal obligations. We do not sell personal data.' },
  { title: 'Sharing', body: 'We may share with sub-processors (hosting, analytics) under contract and only as necessary. We require appropriate safeguards.' },
  { title: 'Security', body: 'We apply industry best practices including encryption in transit, access controls and monitoring.' },
  { title: 'Your rights', body: 'You may request access, correction, deletion or restriction. Contact support@freightmate.com.au to exercise your rights.' },
  { title: 'Contact', body: 'For questions, contact us at support@freightmate.com.au.' }
];

usePageMeta({
  title: 'Privacy Policy | Freightmate',
  description: 'How Freightmate handles your data and privacy.'
});
</script>
