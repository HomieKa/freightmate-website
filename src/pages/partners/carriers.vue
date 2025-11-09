<template>
  <main class="pb-16">
    <section class="hero-bg pb-10 pt-16">
      <FeatureLayout>
        <FeatureHero
          eyebrow="Partners"
          title="Carrier network"
          subtitle="Freightmate is carrier agnostic. Load your own accounts and rate cards, standardise rules and labels, and give every team one dispatch and tracking workflow across your network."
          :image-src="withBase('images/features/network.png')"
          image-alt="Carrier logos"
        />

        <FeatureSection title="Trusted by the carriers you already use">
          <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <CarriersStrip :show-heading="false" />
          </div>
        </FeatureSection>

        <FeatureSection title="Why freight teams plug their carriers into Freightmate">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <FeatureCard title="Bring your own contracts">
              <p>Keep contracted services, surcharges and SLAs intact. Freightmate mirrors your existing carrier profiles so there is nothing to renegotiate.</p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Import rate cards in minutes</li>
                <li>Configure preferred/backup logic</li>
                <li>Respect customer-specific rules</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="Consistent execution">
              <p>Every booking, label and manifest follows the same workflow regardless of carrier. Teams do not need to learn multiple portals.</p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Carrier-compliant docs by default</li>
                <li>Exception handling aligned with your SOPs</li>
                <li>Live status sync into operations dashboards</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="Performance ready">
              <p>Benchmark carriers with one set of definitions. Share real metrics in QBRs without stitching together spreadsheets.</p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>DIFOT, dwell and exception rate trends</li>
                <li>Claims, damages and invoice accuracy</li>
                <li>Insights feed procurement and finance</li>
              </ul>
            </FeatureCard>
          </div>
        </FeatureSection>

        <FeatureSection>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-slate-900">How onboarding works</h3>
              <p class="mt-3 text-slate-600">
                Share account IDs, service lists and label samples. We validate documents with your carriers, configure routing logic, then move bookings and tracking into Freightmate.
              </p>
              <ul class="mt-4 space-y-2 text-sm text-slate-500">
                <li>Carrier readiness checklist and go-live plan</li>
                <li>Pilot lane testing with your operations team</li>
                <li>Change management toolkit for the floor</li>
              </ul>
            </div>
            <div class="rounded-3xl border border-teal-200 bg-teal-50 p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-teal-900">Fast value for every stakeholder</h3>
              <p class="mt-3 text-teal-900">Ops keeps freight moving, finance trusts the numbers, and customers get consistent updates regardless of carrier.</p>
              <div class="mt-4 grid grid-cols-2 gap-3 text-xs uppercase tracking-wide text-teal-800">
                <span>Single workflow</span>
                <span>Less training</span>
                <span>Carrier parity</span>
                <span>Customer-ready data</span>
              </div>
            </div>
          </div>
        </FeatureSection>
      </FeatureLayout>
    </section>
  </main>
</template>

<script setup lang="ts">
import CarriersStrip from '@/components/carriers/CarriersStrip.vue';
import FeatureLayout, { FeatureHero, FeatureSection, FeatureCard } from '@/components/feature/FeatureLayout';
import { usePageMeta } from '@/composables/usePageMeta';
import { withBase } from '@/lib/assets';

usePageMeta({
  title: 'Carriers | Freightmate',
  description: 'See a sample of the carriers Freightmate connects with. Bring your own carrier accounts and rate cards for a consistent workflow.'
});
</script>
