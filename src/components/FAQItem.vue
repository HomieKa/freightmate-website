<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
    <button
      class="flex w-full items-center justify-between text-left text-base font-medium text-slate-900"
      :aria-expanded="visible"
      @click="toggle"
    >
      <span>{{ q }}</span>
      <span class="text-sm text-slate-500">{{ visible ? '-' : '+' }}</span>
    </button>
    <p v-if="visible" class="mt-3 text-sm leading-relaxed text-slate-600">
      {{ a }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    q: string;
    a: string;
    defaultOpen?: boolean;
    open?: boolean;
  }>(),
  {
    defaultOpen: false,
    open: undefined
  }
);

const emit = defineEmits<{
  'update:open': [boolean];
}>();

const internal = ref(props.defaultOpen);

watch(
  () => props.open,
  (value) => {
    if (value === undefined) return;
    internal.value = value;
  }
);

const visible = computed(() => (props.open === undefined ? internal.value : props.open));

const toggle = () => {
  if (props.open === undefined) {
    internal.value = !internal.value;
  } else {
    emit('update:open', !props.open);
  }
};
</script>
