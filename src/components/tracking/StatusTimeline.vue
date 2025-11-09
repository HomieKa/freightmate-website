<template>
  <div class="rounded-2xl border border-[color:var(--brand-light)] bg-white p-4 md:p-6">
    <div class="flex flex-wrap items-center gap-3">
        <label class="inline-flex items-center gap-2 text-sm">
          <input v-model="showExceptions" type="checkbox" />
          Show exceptions
        </label>
        <label class="inline-flex items-center gap-2 text-sm">
          <input v-model="showEtas" type="checkbox" />
          Show ETAs
        </label>
    </div>
    <ol class="mt-4 space-y-3" aria-label="Tracking timeline">
      <li
        v-for="(event, idx) in filteredEvents"
        :key="`${event.ts}-${idx}`"
        class="grid grid-cols-[auto_1fr_auto] items-start gap-3"
      >
        <div
          class="mt-1 h-2 w-2 rounded-full"
          :class="event.exception || event.code === 'EXCEPTION' || event.code === 'DELAYED' ? 'bg-red-500' : 'bg-emerald-600'"
          aria-hidden="true"
        />
        <div>
          <div class="text-sm font-medium text-brand-slate">{{ labels[event.code] ?? event.code }}</div>
          <div v-if="event.desc" class="text-xs text-slate-700">
            {{ event.desc }}
          </div>
        </div>
        <div class="text-right text-xs text-slate-600">
          <div>{{ formatDate(event.ts) }}</div>
          <div v-if="showEtas && event.eta" class="text-[11px]">ETA {{ formatDate(event.eta) }}</div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

type Event = { ts: string; code: string; desc?: string; eta?: string; exception?: boolean };

const props = defineProps<{ events: Event[] }>();
const showExceptions = ref(true);
const showEtas = ref(true);

const labels: Record<string, string> = {
  CREATED: 'Created',
  MANIFESTED: 'Manifested',
  PICKED_UP: 'Picked up',
  IN_TRANSIT: 'In transit',
  OUT_FOR_DELIVERY: 'Out for delivery',
  DELIVERED: 'Delivered',
  DELAYED: 'Delayed',
  EXCEPTION: 'Exception'
};

const sorted = computed(() => [...props.events].sort((a, b) => new Date(a.ts).getTime() - new Date(b.ts).getTime()));

const filteredEvents = computed(() =>
  sorted.value.filter((event) => {
    const isException = !!event.exception || event.code === 'EXCEPTION' || event.code === 'DELAYED';
    return showExceptions.value || !isException;
  })
);

const formatDate = (value: string) => new Date(value).toLocaleString();
</script>
