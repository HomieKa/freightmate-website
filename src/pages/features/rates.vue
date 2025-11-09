<template>
  <main class="pb-16">
    <section class="hero-bg pb-10 pt-16">
      <FeatureLayout>
        <FeatureHero
          eyebrow="Features"
          title="Rate management"
          subtitle="Bring your own rate cards and keep buy, sell, markups, fuel and fees perfectly in sync. Preview the margin impact before you publish so every quote lands where finance expects."
          :image-src="withBase('images/features/pricing.png')"
          image-alt="Rates and margin preview"
        />

        <FeatureSection title="Everything in one pricing workspace">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <FeatureCard title="Unified library">
              <p>Matrix, zone, cubic or bespoke rates all sit side by side. Store buy and sell versions together so analysts and operators work from a single source of truth.</p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Version control with draft, review and publish states</li>
                <li>Carrier, customer and lane level visibility</li>
                <li>Bulk upload and targeted overrides</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="Margin controls">
              <p>Apply fixed or percentage markups, or back-solve rates to hit a target margin. Lock rules per account so pricing stays on strategy.</p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Guardrails for minimum sell and floor margins</li>
                <li>What-if calculators for new services</li>
                <li>Approval workflows for exceptions</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="Fuel and fees">
              <p>Schedule fuel levies, surcharges and accessorial templates once, and let them flow automatically into every quote and invoice check.</p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Set effective dates and index formulas</li>
                <li>Apply by carrier, zone or customer tier</li>
                <li>Automatic change log for audit readiness</li>
              </ul>
            </FeatureCard>
          </div>
        </FeatureSection>

        <FeatureSection>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-slate-900">Reusable zone intelligence</h3>
              <p class="mt-3 text-slate-600">
                Build postcode, suburb or region groups once and reuse them across carriers and customers. No more cutting and pasting spreadsheets when procurement tweaks a boundary.
              </p>
              <div class="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-500">
                <span class="rounded-xl bg-slate-50 px-3 py-2">Metro/regional splits</span>
                <span class="rounded-xl bg-slate-50 px-3 py-2">Distance-based rules</span>
                <span class="rounded-xl bg-slate-50 px-3 py-2">Customer-specific zones</span>
                <span class="rounded-xl bg-slate-50 px-3 py-2">Cross-border groupings</span>
              </div>
            </div>
            <div class="rounded-3xl border border-teal-200 bg-teal-50 p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-teal-900">Audit and export ready</h3>
              <p class="mt-3 text-teal-900">Every change is logged with who, what and when. Push clean CSVs or use the API to sync rate updates with ERP, TMS or analytics stacks.</p>
              <ul class="mt-4 space-y-2 text-sm text-teal-800">
                <li>Roll back in one click if a trial goes sideways</li>
                <li>Automated discrepancy alerts on invoice import</li>
                <li>Partner access with read-only or review roles</li>
              </ul>
            </div>
          </div>
        </FeatureSection>

        <FeatureSection title="Preview profit before you publish">
          <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div class="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div class="rounded-2xl border border-slate-100 bg-white p-4">
                <DiffPanel />
              </div>
            </div>
            <div class="text-slate-600">
              <p>
                See exactly how a quote is composed from buy rate, fuel, fees, markup and final sell price. Tweak assumptions, lock the margin, and publish once you are happy with the outcome.
              </p>
              <ul class="mt-4 space-y-2 text-sm text-slate-500">
                <li>Live margin %, landed cost and markup breakdown</li>
                <li>Scenario history so you can compare before/after</li>
                <li>Push approved pricing straight into quoting and invoices</li>
              </ul>
            </div>
          </div>
        </FeatureSection>
      </FeatureLayout>
    </section>
  </main>
</template>

<script setup lang="ts">
import FeatureLayout, { FeatureHero, FeatureSection, FeatureCard } from '@/components/feature/FeatureLayout';
import DiffPanel from '@/components/rates/DiffPanel.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { withBase } from '@/lib/assets';

usePageMeta({
  title: 'Rate Management | Freightmate',
  description: 'Bring your own rate cards, control buy and sell, and publish margin-ready pricing with confidence.'
});
</script>
