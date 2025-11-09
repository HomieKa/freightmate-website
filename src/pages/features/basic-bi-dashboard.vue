<template>
  <main class="pb-16">
    <section class="hero-bg pb-10 pt-16">
      <FeatureLayout>
        <FeatureHero
          eyebrow="Features"
          title="Basic BI dashboard"
          subtitle="Prebuilt reports for operations, finance and customer service uncover the trend behind every SLA miss, cost spike and carrier shift. Drill straight into the lanes, customers or products behind the numbers and take action before escalations land."
          :image-src="withBase('images/features/analytics.png')"
          image-alt="Operations performance dashboard"
        />

        <FeatureSection title="What you see on day one">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <FeatureCard title="Delivery performance">
              <p>Monitor DIFOT, dwell times, exception reasons and promised versus actual performance without building a single query.</p>
              <div class="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-500">
                <p class="font-medium text-slate-700">Breakdowns include:</p>
                <ul class="mt-2 list-disc space-y-1 pl-4">
                  <li>Route, carrier and service comparisons</li>
                  <li>Root cause tagging for late orders</li>
                  <li>Heat maps to spot repeat problem lanes</li>
                </ul>
              </div>
            </FeatureCard>
            <FeatureCard title="Spend and recovery">
              <p>Track total spend, surcharges and average cost per consignment across carriers, customers and product types.</p>
              <div class="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-500">
                <p class="font-medium text-slate-700">See at a glance:</p>
                <ul class="mt-2 list-disc space-y-1 pl-4">
                  <li>Budget versus actual variance</li>
                  <li>Fuel and accessorial leakage</li>
                  <li>Margin impact by account or lane</li>
                </ul>
              </div>
            </FeatureCard>
            <FeatureCard title="Carrier scorecards">
              <p>Surface performance conversations with carriers backed by data. Share a branded PDF or export raw tables in seconds.</p>
              <div class="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-500">
                <p class="font-medium text-slate-700">Ready-made outputs:</p>
                <ul class="mt-2 list-disc space-y-1 pl-4">
                  <li>Service level agreements versus actual</li>
                  <li>Claims rate, damage rate and invoice accuracy</li>
                  <li>Trend charts over the last 13 weeks</li>
                </ul>
              </div>
            </FeatureCard>
          </div>
        </FeatureSection>

        <FeatureSection title="Dashboards your team will actually use">
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div class="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h3 class="text-lg font-semibold text-slate-900">Ops control tower</h3>
              <p class="mt-3 text-slate-600">Start every huddle with the overnight view: unresolved exceptions, aging freight and the customers waiting on updates.</p>
              <ul class="mt-4 space-y-2 text-sm text-slate-500">
                <li>Queue by carrier with SLA countdowns</li>
                <li>Exception reason drilldowns to assign owners</li>
                <li>One-click exports for stand-up decks</li>
              </ul>
            </div>
            <div class="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h3 class="text-lg font-semibold text-slate-900">Finance cockpit</h3>
              <p class="mt-3 text-slate-600">Reconcile weekly spend and flag invoices that drift from contracted rates before finance signs them off.</p>
              <ul class="mt-4 space-y-2 text-sm text-slate-500">
                <li>Variance alerts by service and zone</li>
                <li>Prebuilt CSVs for GL and accrual uploads</li>
                <li>Land-and-expand view for margin protection</li>
              </ul>
            </div>
            <div class="rounded-3xl border border-slate-200 bg-teal-50 p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-teal-900">Customer-ready stories</h3>
              <p class="mt-3 text-teal-900">Download branded decks that explain wins and gaps for each customer in language they understand.</p>
              <ul class="mt-4 space-y-2 text-sm text-teal-800">
                <li>Highlight reels for QBRs and renewals</li>
                <li>Proof points for premium service proposals</li>
                <li>Usage analytics to see who engages</li>
              </ul>
            </div>
          </div>
        </FeatureSection>

        <FeatureSection title="Why it matters">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="rounded-3xl border border-dashed border-teal-300 bg-white/70 p-6 shadow-sm">
              <h3 class="text-base font-semibold text-slate-900">Decisions you can defend</h3>
              <p class="mt-3 text-slate-600">
                Answer overnight with confidence when leadership asks about delayed freight or rising costs. With audit trails on every metric, there is no more scrambling for spreadsheets.
              </p>
            </div>
            <div class="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-slate-100">
              <h3 class="text-base font-semibold">Adoption without training wheels</h3>
              <p class="mt-3 text-slate-200">
                Each dashboard uses the same definitions and filters as your operational screens, so teams recognise the numbers instantly. Less time explaining reports means more time fixing the bottleneck.
              </p>
            </div>
          </div>
          <div class="mt-8 rounded-3xl bg-slate-50 p-6 text-slate-600">
            <p class="text-sm uppercase tracking-wide text-teal-700">Implementation highlight</p>
            <p class="mt-2 max-w-3xl text-slate-700">
              Connect your data warehouse or use Freightmate as the source. Either way, historical data is backfilled so trends make sense from day one, and automated refresh keeps the view current hour by hour.
            </p>
          </div>
        </FeatureSection>
      </FeatureLayout>
    </section>
  </main>
</template>

<script setup lang="ts">
import FeatureLayout, { FeatureHero, FeatureSection, FeatureCard } from '@/components/feature/FeatureLayout';
import { usePageMeta } from '@/composables/usePageMeta';
import { withBase } from '@/lib/assets';

usePageMeta({
  title: 'Basic BI Dashboard | Freightmate',
  description: 'Out-of-the-box dashboards for delivery, cost and carrier performance, with CSV export.'
});
</script>
