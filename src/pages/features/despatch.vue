<template>
  <main class="pb-16">
    <section class="hero-bg pb-10 pt-16">
      <FeatureLayout>
        <FeatureHero
          eyebrow="Features"
          title="Book & despatch"
          subtitle="Guide every booking from order import to truck departure with one consistent flow. Bring your own rules, documents and carrier requirements, then let teams rinse and repeat without slowing the dock down."
          :image-src="withBase('images/features/despatch.png')"
          image-alt="Consignment creation and label printing"
        />

        <FeatureSection title="Everything your floor crew needs">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <FeatureCard title="Fast order capture">
              <p>
                Auto-populate senders, receivers and dangerous goods info from templates or ERP integrations. Required fields validate in real time so mistakes get fixed before freight hits the dock.
              </p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Address lookups with suburb and postcode hints</li>
                <li>Weights, dims and pallet counts remembered per SKU</li>
                <li>Save partial consignments to finish later</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="Labels and documents on tap">
              <p>Print compliant labels, manifests and dangerous goods declarations for every carrier without jumping between portals.</p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Batch printing by cage, run or route</li>
                <li>Automatic manifest email to carriers and 3PLs</li>
                <li>Supports thermal, laser and mobile printers</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="One workflow, many carriers">
              <p>Apply your own routing logic, service preferences and packing rules so teams do not need to re-learn each provider.</p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Carrier-specific prompts and cut-off reminders</li>
                <li>Exception handling when services are at capacity</li>
                <li>Instant feedback loop into analytics and invoices</li>
              </ul>
            </FeatureCard>
          </div>
        </FeatureSection>

        <FeatureSection title="Tailored for complex freight">
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-slate-900">Pack any modality</h3>
              <p class="mt-3 text-slate-600">
                Cartons, pallets, satchels or loose items can be mixed in one job. Hazardous, temperature control and POD instructions automatically carry through to the carrier integration.
              </p>
              <div class="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-500">
                <span class="rounded-xl bg-slate-50 px-3 py-2">Domestic and cross-border</span>
                <span class="rounded-xl bg-slate-50 px-3 py-2">Manual or EDI bookings</span>
                <span class="rounded-xl bg-slate-50 px-3 py-2">Configurable pallet builder</span>
                <span class="rounded-xl bg-slate-50 px-3 py-2">Carrier API health checks</span>
              </div>
            </div>
            <div class="rounded-3xl border border-teal-200 bg-teal-50 p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-teal-900">Built-in guardrails</h3>
              <p class="mt-3 text-teal-900">
                Never miss dangerous goods paperwork or mandatory references again. Rules fire instantly, telling operators what to fix without needing a supervisor.
              </p>
              <ul class="mt-4 space-y-2 text-sm text-teal-800">
                <li>Auto-checks for missing UN numbers and packaging</li>
                <li>Freight dimension sanity checks and tolerance alerts</li>
                <li>Hold and release workflow for compliance sign-off</li>
              </ul>
            </div>
          </div>
        </FeatureSection>

        <FeatureSection title="How teams run a shift">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="rounded-3xl border border-dashed border-slate-300 bg-white p-6 shadow-sm">
              <h3 class="text-base font-semibold text-slate-900">Standard operating rhythm</h3>
              <ol class="mt-3 space-y-3 text-sm text-slate-600">
                <li><span class="font-medium text-slate-800">1. Import orders:</span> pull from ERP, WMS or quick templates.</li>
                <li><span class="font-medium text-slate-800">2. Validate consignments:</span> built-in rules prompt corrections instantly.</li>
                <li><span class="font-medium text-slate-800">3. Print, stage, scan:</span> batch printing keeps the dock moving while Freightmate logs every action.</li>
                <li><span class="font-medium text-slate-800">4. Manifest and despatch:</span> carriers receive manifests automatically with POD instructions attached.</li>
              </ol>
            </div>
            <div class="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-slate-100">
              <h3 class="text-base font-semibold">Operational visibility</h3>
              <p class="mt-3 text-slate-200">
                Supervisors track work-in-progress, trailer utilisation and missed scans in real time. Exceptions sync straight into analytics, so continuous improvement starts before the shift finishes.
              </p>
              <div class="mt-4 grid grid-cols-2 gap-3 text-xs uppercase tracking-wide text-slate-400">
                <span>Dock snapshots</span>
                <span>Live SLA timers</span>
                <span>Shift handover notes</span>
                <span>Audit-ready logbooks</span>
              </div>
            </div>
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
  title: 'Book & Despatch | Freightmate',
  description: 'Create consignments quickly, print labels and documents, and keep carriers aligned without rekeying.'
});
</script>
