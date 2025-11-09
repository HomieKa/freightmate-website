<template>
  <main class="mx-auto max-w-3xl px-6 pb-16 pt-24 space-y-6">
    <h1 class="text-4xl font-bold tracking-tight text-brand-slate">Terms of Service</h1>
    <section v-for="section in sections" :key="section.title">
      <h2 class="text-xl font-semibold">{{ section.title }}</h2>
      <p class="text-slate-600">{{ section.body }}</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';

const sections = [
  { title: '1. Acceptance', body: 'By using Freightmate, you agree to these terms and our Privacy Policy.' },
  { title: '2. Accounts & Access', body: 'You are responsible for the security of your account and ensuring authorised use only.' },
  { title: '3. Data', body: 'You retain ownership of your data. You grant us a licence to process it to provide the service.' },
  { title: '4. Acceptable Use', body: 'Do not misuse the platform, disrupt other users or violate laws.' },
  { title: '5. Warranties & Liability', body: 'The service is provided as-is. To the extent permitted by law, our liability is limited.' },
  { title: '6. Termination', body: 'We may suspend or terminate for breach. You may export data at any time.' },
  { title: '7. Changes', body: 'We may update these terms; material changes will be notified in advance.' },
  { title: '8. Contact', body: 'Questions? Contact support@freightmate.com.au.' }
];

usePageMeta({
  title: 'Terms of Service | Freightmate',
  description: 'Freightmate terms of service and acceptable use.'
});
</script>
