<template>
  <main class="pb-16">
    <section class="hero-bg pb-10 pt-24">
      <div class="mx-auto grid max-w-screen-2xl items-start gap-8 px-6 pb-16 pt-24 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 class="text-3xl font-bold text-brand-slate">Contact Us</h1>
          <p class="mt-2 max-w-prose text-slate-600">
            We're here to help. Ask us about the product, integrations, pricing or anything else.
          </p>

          <div class="mt-6 grid gap-6">
            <div class="surface p-6">
              <h2 class="font-semibold">Company</h2>
              <div class="mt-2 grid gap-1 text-slate-700">
                <a href="mailto:support@freightmate.com.au" class="text-brand-teal">support@freightmate.com.au</a>
                <a href="tel:1300853074" class="text-brand-teal">1300 853 074</a>
                <div class="opacity-80">
                  Level 5/700 Springvale Rd, Mulgrave, VIC 3170
                </div>
              </div>
              <div class="mt-4 flex gap-3">
                <a href="https://docs.freightmate.com/" target="_blank" rel="noreferrer" class="btn-secondary">Support docs</a>
                <a href="https://app.freightmate.com/" target="_blank" rel="noreferrer" class="btn-primary">Log in</a>
              </div>
            </div>
          </div>
        </div>

        <div class="surface p-6">
          <div v-if="step === 'success'" class="rounded-xl bg-[color:var(--brand-light)] p-4" role="status">
            Thanks – we'll be in touch shortly.
          </div>
          <form
            v-else-if="step === 'intent'"
            class="grid gap-3"
            aria-label="Select intent"
            @submit.prevent="nextStep"
          >
            <fieldset>
              <legend class="font-semibold">What would you like to do?</legend>
              <div class="mt-2 grid gap-2">
                <label
                  v-for="option in intents"
                  :key="option"
                  class="flex items-center gap-2 rounded-xl border px-3 py-2"
                  :class="intent === option ? 'ring-2 ring-brand-teal' : ''"
                >
                  <input type="radio" name="intent" :value="option" :checked="intent === option" @change="intent = option" />
                  {{ option }}
                </label>
              </div>
            </fieldset>
            <button class="btn-primary mt-2 w-max disabled:opacity-50" type="submit" :disabled="!intent">
              Next
            </button>
          </form>
          <form
            v-else
            class="grid gap-3"
            aria-label="Enter details"
            @submit.prevent="handleSubmit"
          >
            <div class="text-sm text-slate-600">
              Intent:
              <span class="font-medium">{{ intent }}</span>
              <button type="button" class="ml-2 text-brand-teal underline" @click="step = 'intent'">change</button>
            </div>
            <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div class="grid gap-1">
                <label for="first">First name</label>
                <input id="first" v-model="form.first" class="rounded-xl border border-[color:var(--brand-light)] px-3 py-2" required />
              </div>
              <div class="grid gap-1">
                <label for="last">Last name</label>
                <input id="last" v-model="form.last" class="rounded-xl border border-[color:var(--brand-light)] px-3 py-2" required />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div class="grid gap-1">
                <label for="email">Work email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="rounded-xl border border-[color:var(--brand-light)] px-3 py-2"
                  :aria-invalid="!emailValid && form.email !== ''"
                  required
                />
              </div>
              <div class="grid gap-1">
                <label for="company">Company</label>
                <input id="company" v-model="form.company" class="rounded-xl border border-[color:var(--brand-light)] px-3 py-2" />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div class="grid gap-1">
                <label for="phone">Phone</label>
                <input id="phone" v-model="form.phone" class="rounded-xl border border-[color:var(--brand-light)] px-3 py-2" />
              </div>
              <div class="grid gap-1">
                <label for="topic">Topic</label>
                <input id="topic" :value="intent" readonly class="rounded-xl border border-[color:var(--brand-light)] px-3 py-2" />
              </div>
            </div>
            <div class="grid gap-1">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="rounded-xl border border-[color:var(--brand-light)] px-3 py-2"
              />
            </div>
            <label class="mt-1 inline-flex items-center gap-2 text-sm">
              <input type="checkbox" v-model="form.consent" />
              I consent to Freightmate storing my details to contact me.
            </label>
            <button class="btn-primary mt-2 w-max disabled:opacity-50" type="submit" :disabled="!canSubmit">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta';

type Intent = 'Book a demo' | 'Pricing' | 'Integrations' | 'Support' | 'General';
type Step = 'intent' | 'details' | 'success';

const intents: Intent[] = ['Book a demo', 'Pricing', 'Integrations', 'Support', 'General'];
const step = ref<Step>('intent');
const intent = ref<Intent | ''>('');

const form = reactive({
  first: '',
  last: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  consent: false
});

const emailValid = computed(() => /.+@.+\..+/.test(form.email));
const canSubmit = computed(() => form.first && form.last && emailValid.value && form.consent);

const nextStep = () => {
  if (intent.value) {
    step.value = 'details';
  }
};

const handleSubmit = () => {
  if (!canSubmit.value) return;
  step.value = 'success';
};

usePageMeta({
  title: 'Contact Freightmate',
  description: 'Talk to the Freightmate team about demos, pricing, integrations or support.'
});
</script>
