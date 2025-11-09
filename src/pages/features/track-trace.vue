<template>
  <main class="pb-16">
    <section class="hero-bg pb-10 pt-16">
      <FeatureLayout>
        <FeatureHero
          eyebrow="Features"
          title="Track & trace"
          subtitle="Monitor every shipment across carriers with one shared timeline. Surface live events, dynamic ETAs and clear exception workflows so operations and customers stay aligned."
          :image-src="withBase('images/features/track-trace.png')"
          image-alt="Tracking timeline"
        />

        <FeatureSection title="What teams see every day">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <FeatureCard title="Unified timeline">
              <p>Combine carrier events, PODs and custom scan data into a single, readable journey. No more hopping between portals to understand where freight is.</p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Carrier-native event descriptions normalised for clarity</li>
                <li>Live ETA recalculation with confidence bands</li>
                <li>Attach photos, notes and documents to each milestone</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="Exception centre">
              <p>Highlight at-risk consignments before the customer calls. Triage by severity, promised delivery window or customer priority.</p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Smart queues for delays, damages and missing scans</li>
                <li>Bulk actions to assign follow-ups and messages</li>
                <li>Audit log of every touchpoint for coaching</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="Customer experience">
              <p>Share branded tracking pages and live alerts via email or SMS. Keep the narrative consistent even when multiple carriers are involved.</p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Custom SLA thresholds and language per customer</li>
                <li>Self-service POD download links</li>
                <li>Opt-in subscription for proactive updates</li>
              </ul>
            </FeatureCard>
          </div>
        </FeatureSection>

        <FeatureSection title="Walkthrough">
          <div class="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div class="rounded-2xl border border-slate-100 bg-white p-4">
              <TrackTraceDemo />
            </div>
          </div>
        </FeatureSection>

        <FeatureSection>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-slate-900">Shared context for every team</h3>
              <p class="mt-3 text-slate-600">
                Ops, customer service and account managers collaborate on the same data. Notes, status changes and manual updates sync instantly across the platform.
              </p>
              <div class="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-500">
                <span class="rounded-xl bg-slate-50 px-3 py-2">Internal comment threads</span>
                <span class="rounded-xl bg-slate-50 px-3 py-2">Role-based visibility</span>
                <span class="rounded-xl bg-slate-50 px-3 py-2">Snapshot exports</span>
                <span class="rounded-xl bg-slate-50 px-3 py-2">API webhooks</span>
              </div>
            </div>
            <div class="rounded-3xl border border-teal-200 bg-teal-50 p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-teal-900">Outcome driven metrics</h3>
              <p class="mt-3 text-teal-900">Feed track and trace data into BI dashboards, customer scorecards and carrier reviews without manual effort.</p>
              <ul class="mt-4 space-y-2 text-sm text-teal-800">
                <li>On-time delivery trend and variance alerts</li>
                <li>Exception closure SLAs with escalation paths</li>
                <li>Customer satisfaction signals tied to updates</li>
              </ul>
            </div>
          </div>
        </FeatureSection>

        <FeatureSection title="How it helps">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="rounded-3xl border border-dashed border-slate-300 bg-white p-6 shadow-sm">
              <h3 class="text-base font-semibold text-slate-900">Ops playbook</h3>
              <ol class="mt-3 space-y-3 text-sm text-slate-600">
                <li><span class="font-medium text-slate-800">1. See risk immediately:</span> dashboard tiles show at-risk consignments by promise date.</li>
                <li><span class="font-medium text-slate-800">2. Action owners:</span> assign follow-ups, capture actions and timestamp everything.</li>
                <li><span class="font-medium text-slate-800">3. Close the loop:</span> send branded updates and mark consignments resolved.</li>
              </ol>
            </div>
            <div class="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-slate-100">
              <h3 class="text-base font-semibold">Customer heartbeat</h3>
              <p class="mt-3 text-slate-200">Give customers a self-serve experience that mirrors your ops reality. Less back-and-forth, more proactive trust building.</p>
              <div class="mt-4 grid grid-cols-2 gap-3 text-xs uppercase tracking-wide text-slate-400">
                <span>24/7 live view</span>
                <span>Proactive alerts</span>
                <span>Consistent branding</span>
                <span>POD provenance</span>
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
import TrackTraceDemo from '@/components/tracking/TrackTraceDemo.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { withBase } from '@/lib/assets';

usePageMeta({
  title: 'Track & Trace | Freightmate',
  description: 'A single timeline across carriers, with live events, dynamic ETA, and proactive notifications.'
});
</script>
