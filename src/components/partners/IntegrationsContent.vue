<template>
  <section class="hero-bg pb-16 pt-16">
    <FeatureLayout>
      <FeatureHero
        eyebrow="Partners"
        title="Integrations"
        subtitle="Connect Freightmate with your ERP, WMS, ecommerce and finance stack. Use native connectors, adapters or APIs to keep data flowing in both directions."
        :image-src="withBase('images/features/integrations.png')"
        image-alt="Integration connectors"
      />

      <FeatureSection title="Bring your tech stack with you">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <FeatureCard title="Prebuilt connectors">
            <p>Native integrations for popular ERPs, ecommerce platforms and accounting suites come configured with opinionated defaults.</p>
            <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
              <li>Two-way order and tracking sync</li>
              <li>Secure OAuth and API key authentication</li>
              <li>Sandbox environments for testing</li>
            </ul>
          </FeatureCard>
          <FeatureCard title="Adapter library">
            <p>Use lightweight adapters when native apps are not available. Map fields, constrain rate limits and get the data you need quickly.</p>
            <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
              <li>Field mapping with validation</li>
              <li>Retry logic and error surfacing</li>
              <li>Shared templates for rapid rollout</li>
            </ul>
          </FeatureCard>
          <FeatureCard title="Open APIs & webhooks">
            <p>Extend Freightmate into bespoke systems. Trigger downstream workflows as soon as shipments change state.</p>
            <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-500">
              <li>REST API with fine-grained scopes</li>
              <li>Event-driven webhook subscriptions</li>
              <li>Developer documentation and samples</li>
            </ul>
          </FeatureCard>
        </div>
      </FeatureSection>

      <FeatureSection title="Explore integrations">
        <div class="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <div class="grid gap-3 md:grid-cols-4">
            <input
              v-model="query"
              type="search"
              aria-label="Search integrations"
              placeholder="Search by name or summary"
              class="rounded-2xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
            <select
              v-model="categoryFilter"
              class="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
            >
              <option value="All">Category: All</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
            <select
              v-model="statusFilter"
              class="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
            >
              <option value="All">Status: All</option>
              <option v-for="status in statuses" :key="status" :value="status">
                {{ status }}
              </option>
            </select>
            <select
              v-model="directionFilter"
              class="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
            >
              <option value="All">Direction: All</option>
              <option v-for="direction in directions" :key="direction" :value="direction">
                {{ direction }}
              </option>
            </select>
          </div>

          <div class="mt-4 flex justify-end">
            <button
              type="button"
              class="rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:border-teal-200 hover:text-teal-700"
              @click="resetFilters"
            >
              Clear filters
            </button>
          </div>

          <div
            v-if="filteredIntegrations.length === 0"
            class="mt-6 rounded-2xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500"
          >
            No integrations match these filters.
          </div>
          <ul
            v-else
            class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <li v-for="integration in filteredIntegrations" :key="integration.slug">
              <button
                type="button"
                class="w-full rounded-3xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
                @click="selected = integration"
              >
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <p class="text-sm uppercase tracking-wide text-teal-700">{{ integration.category }}</p>
                    <p class="mt-1 text-lg font-semibold text-slate-900">{{ integration.name }}</p>
                  </div>
                  <span class="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                    {{ integration.direction.join('/') }}
                  </span>
                </div>
                <p class="mt-3 text-sm text-slate-600">{{ integration.summary }}</p>
                <div class="mt-3 text-xs uppercase tracking-wide text-slate-500">
                  Status: {{ integration.status }}
                </div>
              </button>
            </li>
          </ul>
        </div>
      </FeatureSection>

      <FeatureSection>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-slate-900">Implementation support</h3>
            <p class="mt-3 text-slate-600">
              Solution architects help scope data flows, run pilot syncs and hand over templates so your team can own day two operations.
            </p>
            <ul class="mt-4 space-y-2 text-sm text-slate-500">
              <li>Integration playbooks and field guides</li>
              <li>Cutover planning with rollback paths</li>
              <li>Monitoring dashboards and alerts</li>
            </ul>
          </div>
          <div class="rounded-3xl border border-teal-200 bg-teal-50 p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-teal-900">Customer outcomes</h3>
            <p class="mt-3 text-teal-900">
              Keep orders, freight status and billing data aligned. That means fewer WISMO calls, faster invoicing and better customer conversations.
            </p>
            <div class="mt-4 grid grid-cols-2 gap-3 text-xs uppercase tracking-wide text-teal-800">
              <span>Real-time sync</span>
              <span>Single source</span>
              <span>Automation ready</span>
              <span>Audit trails</span>
            </div>
          </div>
        </div>
      </FeatureSection>
    </FeatureLayout>

    <Transition name="fade">
      <div
        v-if="selected"
        class="fixed inset-0 z-50"
      >
        <div class="absolute inset-0 bg-black/40" @click="closeDrawer" />
        <aside
          role="dialog"
          aria-modal="true"
          class="absolute right-0 top-0 h-full w-full max-w-lg overflow-y-auto bg-white p-6 shadow-2xl focus:outline-none"
        >
          <button class="text-sm text-slate-500 hover:text-slate-700" @click="closeDrawer">
            Close
          </button>
          <p class="mt-3 text-xs uppercase tracking-wide text-teal-600">Integration</p>
          <h2 class="mt-1 text-2xl font-semibold text-brand-slate">{{ selected.name }}</h2>
          <p class="text-sm uppercase tracking-wide text-slate-500">{{ selected.category }} · {{ selected.status }}</p>
          <p class="mt-4 text-slate-600">{{ selected.summary }}</p>

          <dl class="mt-6 space-y-4 text-sm text-slate-600">
            <div>
              <dt class="font-semibold text-slate-800">Direction</dt>
              <dd class="mt-2 flex flex-wrap gap-2">
                <span
                  v-for="dir in selected.direction"
                  :key="`dir-${dir}`"
                  class="rounded-full bg-slate-100 px-2 py-1 text-xs uppercase tracking-wide"
                >
                  {{ dir }}
                </span>
              </dd>
            </div>
            <div>
              <dt class="font-semibold text-slate-800">Data synced</dt>
              <dd class="mt-1">
                <ul class="list-disc space-y-1 pl-4">
                  <li v-for="(item, idx) in selected.synced" :key="`synced-${idx}`">{{ item }}</li>
                </ul>
              </dd>
            </div>
            <div>
              <dt class="font-semibold text-slate-800">Setup steps</dt>
              <dd class="mt-1">
                <ol class="list-decimal space-y-1 pl-4">
                  <li v-for="(step, idx) in selected.setup" :key="`step-${idx}`">{{ step }}</li>
                </ol>
              </dd>
            </div>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div class="rounded-2xl border border-slate-100 bg-white p-3">
                <p class="text-xs uppercase tracking-wide text-slate-500">Support tier</p>
                <p class="mt-1 font-medium text-slate-800">{{ selected.support }}</p>
              </div>
              <div class="rounded-2xl border border-slate-100 bg-white p-3">
                <p class="text-xs uppercase tracking-wide text-slate-500">Rate limit</p>
                <p class="mt-1 font-medium text-slate-800">{{ selected.rateLimit }}</p>
              </div>
            </div>
          </dl>

          <div class="mt-6 rounded-2xl border border-dashed border-teal-300 bg-teal-50 p-4 text-sm text-teal-900">
            <p>
              Ready to scope this integration? Share your use case and we will map the data flow, rate limits and rollout plan.
            </p>
          </div>
        </aside>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import FeatureLayout, { FeatureHero, FeatureSection, FeatureCard } from '@/components/feature/FeatureLayout';
import { withBase } from '@/lib/assets';

type Direction = 'Import' | 'Export' | 'Webhook';
type Category = 'ERP' | 'WMS' | 'CRM' | 'E-commerce' | 'Accounting' | 'Inventory/WMS';
type Status = 'Native' | 'Adapter' | 'Beta';

type Integration = {
  slug: string;
  name: string;
  category: Category;
  status: Status;
  direction: Direction[];
  summary: string;
  synced: string[];
  rateLimit: string;
  setup: string[];
  support: 'Standard' | 'Enhanced' | 'Premium';
};

const integrations: Integration[] = [
  { slug: 'sugarcrm', name: 'SugarCRM', category: 'CRM', status: 'Adapter', direction: ['Export', 'Webhook'], summary: 'Surface delivery status inside SugarCRM and trigger comms updates.', synced: ['Tracking events', 'ETA', 'Exception flags'], rateLimit: 'Fair-use; webhooks push increments', setup: ['Create API key', 'Map account IDs', 'Enable webhook'], support: 'Standard' },
  { slug: 'pronto', name: 'Pronto', category: 'ERP', status: 'Adapter', direction: ['Import', 'Export'], summary: 'Sync orders and tracking between Pronto and Freightmate.', synced: ['Orders (in)', 'Tracking + exceptions (out)'], rateLimit: 'Up to 10 req/s', setup: ['Install connector', 'Map items/SKUs', 'Test in sandbox'], support: 'Enhanced' },
  { slug: 'netsuite', name: 'NetSuite', category: 'ERP', status: 'Native', direction: ['Import', 'Export', 'Webhook'], summary: 'Deep order sync and tracking webhooks.', synced: ['Item lines', 'Order refs', 'Tracking events'], rateLimit: 'Per NetSuite limits', setup: ['Install bundle', 'Connect OAuth', 'Configure webhooks'], support: 'Premium' },
  { slug: 'sap', name: 'SAP', category: 'ERP', status: 'Adapter', direction: ['Import', 'Export'], summary: 'Exchange shipments and events with SAP via adapter.', synced: ['Shipments', 'Events'], rateLimit: 'Depends on SAP gateway', setup: ['API gateway config', 'Map fields', 'Validate data'], support: 'Enhanced' },
  { slug: 'd365', name: 'Dynamics 365', category: 'ERP', status: 'Adapter', direction: ['Export'], summary: 'Expose shipment status to Dynamics records.', synced: ['Tracking status', 'Links'], rateLimit: 'Fair-use', setup: ['Register app', 'Add webhook URL', 'Map entities'], support: 'Standard' },
  { slug: 'woocommerce', name: 'WooCommerce', category: 'E-commerce', status: 'Native', direction: ['Import', 'Export'], summary: 'Import orders; push labels/tracking back.', synced: ['Orders', 'Labels', 'Tracking'], rateLimit: 'API limited by host', setup: ['Connect store', 'Authorize scopes', 'Map fields'], support: 'Standard' },
  { slug: 'shopify', name: 'Shopify', category: 'E-commerce', status: 'Native', direction: ['Import', 'Export', 'Webhook'], summary: 'Sync orders and send webhooks for tracking.', synced: ['Orders', 'Fulfilments', 'Tracking'], rateLimit: 'Follows Shopify limits', setup: ['Install app', 'Connect store', 'Enable webhooks'], support: 'Enhanced' },
  { slug: 'xero', name: 'Xero', category: 'Accounting', status: 'Adapter', direction: ['Export'], summary: 'Export freight invoices and charges.', synced: ['Invoices', 'GL codes'], rateLimit: 'Per Xero API', setup: ['Connect org', 'Map accounts', 'Test export'], support: 'Standard' },
  { slug: 'myob', name: 'MYOB', category: 'Accounting', status: 'Adapter', direction: ['Export'], summary: 'Post freight charges to ledgers.', synced: ['Invoices'], rateLimit: 'Per MYOB API', setup: ['Connect company', 'Map tax codes', 'Run test'], support: 'Standard' },
  { slug: 'cin7', name: 'Cin7', category: 'Inventory/WMS', status: 'Adapter', direction: ['Import', 'Export'], summary: 'Tie stock movements with consignments.', synced: ['Stock moves', 'Consignments'], rateLimit: 'Per Cin7 API', setup: ['Create API user', 'Enter key', 'Map locations'], support: 'Standard' }
];

const categories = ['ERP', 'WMS', 'CRM', 'E-commerce', 'Accounting', 'Inventory/WMS'] as const;
const statuses = ['Native', 'Adapter', 'Beta'] as const;
const directions: Direction[] = ['Import', 'Export', 'Webhook'];

const query = ref('');
const categoryFilter = ref<Category | 'All'>('All');
const statusFilter = ref<Status | 'All'>('All');
const directionFilter = ref<Direction | 'All'>('All');
const selected = ref<Integration | null>(null);

const filteredIntegrations = computed(() =>
  integrations
    .filter((integration) => {
      const matchesQuery =
        !query.value ||
        integration.name.toLowerCase().includes(query.value.toLowerCase()) ||
        integration.summary.toLowerCase().includes(query.value.toLowerCase());
      const matchesCategory = categoryFilter.value === 'All' || integration.category === categoryFilter.value;
      const matchesStatus = statusFilter.value === 'All' || integration.status === statusFilter.value;
      const matchesDirection =
        directionFilter.value === 'All' || integration.direction.includes(directionFilter.value as Direction);
      return matchesQuery && matchesCategory && matchesStatus && matchesDirection;
    })
    .sort((a, b) => a.name.localeCompare(b.name))
);

const resetFilters = () => {
  query.value = '';
  categoryFilter.value = 'All';
  statusFilter.value = 'All';
  directionFilter.value = 'All';
};

const closeDrawer = () => {
  selected.value = null;
};

watch(selected, (value) => {
  if (typeof document === 'undefined') return;
  document.body.style.overflow = value ? 'hidden' : '';
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
