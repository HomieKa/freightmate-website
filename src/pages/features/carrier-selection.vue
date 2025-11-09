<template>
  <main class="pb-16">
    <section class="hero-bg pb-10 pt-16">
      <FeatureLayout>
        <FeatureHero
          eyebrow="Features"
          title="Carrier selection and cost calculator"
          subtitle="Bring your own carriers, rate cards and business rules into one scoring engine. We stack rank every service for price, transit, reliability and your custom preferences so the right option floats to the top every time."
          :image-src="withBase('images/features/carrier_selection_costing.png')"
          image-alt="Carrier comparison view"
        />

        <FeatureSection title="Compare, decide, justify">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <FeatureCard title="Unified rate library">
              <p>
                Load matrix, zone or cubic rates for every carrier, complete with fuel, tolls and accessorial rules. Version control makes it easy to roll back or schedule future pricing.
              </p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Support for multi-leg and multi-currency rates</li>
                <li>Automated tolerance alerts on invoice import</li>
                <li>Sandbox environment to test what-if updates</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="Decision engine">
              <p>Optimise by cost, service level, delivery promise or a weighted blend. Tie-breakers handle those real-world trade-offs your customers expect.</p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Preferred carrier fallback logic</li>
                <li>Cut-off awareness pulls out options that have already closed</li>
                <li>Flag special handling freight instantly</li>
              </ul>
            </FeatureCard>
            <FeatureCard title="Transparent costing">
              <p>Show the full breakdown before you book: base, fuel, surcharges, expected rebates and duties where relevant. Operators and finance see the same numbers.</p>
              <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
                <li>Margin protection triggers when estimates drift</li>
                <li>Save quotes to reuse in customer proposals</li>
                <li>Export costing detail directly to BI and ERP</li>
              </ul>
            </FeatureCard>
          </div>
        </FeatureSection>

        <FeatureSection title="Built for your freight profile">
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-slate-900">Mode agnostic</h3>
              <p class="mt-3 text-slate-600">
                Parcel, pallet, linehaul, airfreight or final mile. Freightmate understands volumetric and dead weight pricing so your ranking works across every shipment type.
              </p>
              <div class="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-500">
                <span class="rounded-xl bg-slate-50 px-3 py-2">Break bulk and consolidation</span>
                <span class="rounded-xl bg-slate-50 px-3 py-2">Customer-paid freight rules</span>
                <span class="rounded-xl bg-slate-50 px-3 py-2">Dangerous goods inclusions</span>
                <span class="rounded-xl bg-slate-50 px-3 py-2">Zone overrides and uplift caps</span>
              </div>
            </div>
            <div class="rounded-3xl border border-teal-200 bg-teal-50 p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-teal-900">Scenario planning</h3>
              <p class="mt-3 text-teal-900">
                Model new routes or carriers before you sign the contract. Keep procurement and operations aligned with side-by-side comparisons and sensitivity charts.
              </p>
              <ul class="mt-4 space-y-2 text-sm text-teal-800">
                <li>Swap in trial pricing without touching production</li>
                <li>Export a playbook for what to do when capacity tightens</li>
                <li>Share read-only views with partners and customers</li>
              </ul>
            </div>
          </div>
        </FeatureSection>

        <FeatureSection title="How bookings flow">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="rounded-3xl border border-dashed border-slate-300 bg-white p-6 shadow-sm">
              <h3 class="text-base font-semibold text-slate-900">Operator experience</h3>
              <ol class="mt-3 space-y-3 text-sm text-slate-600">
                <li>
                  <span class="font-medium text-slate-800">1. Enter freight details:</span>
                  key in or import dimensions, weights and delivery promise.
                </li>
                <li>
                  <span class="font-medium text-slate-800">2. Review ranked options:</span>
                  see price, ETA, carbon estimate and service notes side by side.
                </li>
                <li>
                  <span class="font-medium text-slate-800">3. Confirm and book:</span>
                  the chosen carrier auto-populates in the despatch flow with all costing locked in.
                </li>
              </ol>
            </div>
            <div class="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-slate-100">
              <h3 class="text-base font-semibold">Control tower visibility</h3>
              <p class="mt-3 text-slate-200">
                Supervisors watch live savings versus benchmark, capacity consumption and rule overrides. Each decision is audit logged so you can replay why an option was selected.
              </p>
              <div class="mt-4 grid grid-cols-2 gap-3 text-xs uppercase tracking-wide text-slate-400">
                <span>Savings snapshot</span>
                <span>Override alerts</span>
                <span>Carrier performance loop</span>
                <span>Nightly procurement digest</span>
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
  title: 'Carrier Selection | Freightmate',
  description: 'Compare carriers like-for-like, automatically pick the cheapest within your rules, and estimate cost before booking.'
});
</script>
