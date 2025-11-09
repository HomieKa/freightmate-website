<template>
  <div>
    <div class="mb-3 flex items-center justify-between text-sm text-slate-600">
      <div>Reference: ABC123 - Carrier: DemoCarrier - Service: Road</div>
      <button
        class="rounded-lg border px-3 py-2 text-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-teal"
        @click="shareOpen = true"
      >
        Share tracking link
      </button>
    </div>
    <StatusTimeline :events="events" />

    <Transition name="fade">
      <div v-if="shareOpen" class="fixed inset-0 z-50" role="dialog" aria-modal="true">
        <div class="absolute inset-0 bg-black/40" @click="shareOpen = false" />
        <div class="absolute left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5 shadow-xl">
          <h2 class="text-lg font-semibold text-brand-slate">Share tracking link</h2>
          <p class="mt-1 text-sm text-slate-700">Copy the link below to share the live status with customers.</p>
          <div class="mt-3 grid grid-cols-[1fr_auto] gap-2">
            <input
              :value="shareUrl"
              readonly
              class="rounded-lg border px-3 py-2 text-sm"
              aria-label="Shareable URL"
            />
            <button
              class="rounded-lg bg-[color:var(--brand-teal)] px-3 py-2 text-sm text-white hover:brightness-110"
              @click="copyLink"
            >
              Copy
            </button>
          </div>
          <div class="mt-4 flex justify-end">
            <button class="rounded-md border px-3 py-1.5 text-sm hover:bg-slate-50" @click="shareOpen = false">
              Close
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useClipboard } from '@vueuse/core';
import StatusTimeline from '@/components/tracking/StatusTimeline.vue';

const shareUrl = 'https://share.freightmate.example/track/ABC123';
const shareOpen = ref(false);

const { copy } = useClipboard();
const copyLink = () => copy(shareUrl);

const events = [
  { ts: '2025-03-01T09:00:00Z', code: 'CREATED', desc: 'Consignment created' },
  { ts: '2025-03-01T12:30:00Z', code: 'MANIFESTED', desc: 'Manifest generated' },
  { ts: '2025-03-01T15:10:00Z', code: 'PICKED_UP', desc: 'Picked up by driver', eta: '2025-03-03T10:00:00Z' },
  { ts: '2025-03-02T08:25:00Z', code: 'IN_TRANSIT', desc: 'Arrived at sort facility' },
  { ts: '2025-03-02T18:05:00Z', code: 'DELAYED', desc: 'Weather delay - road closure', exception: true, eta: '2025-03-03T14:00:00Z' },
  { ts: '2025-03-03T07:55:00Z', code: 'OUT_FOR_DELIVERY', desc: 'Out for delivery', eta: '2025-03-03T15:00:00Z' },
  { ts: '2025-03-03T13:22:00Z', code: 'DELIVERED', desc: 'Delivered - Signed by R.Oliver' }
];
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
