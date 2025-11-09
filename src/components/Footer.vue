<template>
  <footer class="border-t border-[color:var(--brand-light)] bg-[#0B0F1A] text-white">
    <div class="mx-auto grid max-w-screen-2xl gap-10 px-6 py-14">
      <div class="grid gap-8 text-sm md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr_1fr]">
        <div class="grid gap-3">
          <img src="https://app.freightmate.com/static/Header_Logo-W0M4WR8-.svg" alt="Freightmate" width="160" height="30" />
          <p class="max-w-xs opacity-80">
            Automate your freight — book, price, consign and track.
          </p>
          <div class="text-xs opacity-70">
            {{ year }} FREIGHTMATE SYSTEMS PTY LTD<br />
            ABN 92 619 184 440<br />
            Level 5/700 Springvale Rd, Mulgrave, VIC 3170
          </div>
        </div>

        <div class="grid gap-2">
          <div class="mb-1 font-semibold">Company</div>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/resources">Resources</RouterLink>
          <RouterLink to="/faq">FAQ</RouterLink>
        </div>

        <div class="grid gap-2">
          <div class="mb-1 font-semibold">Product</div>
          <RouterLink to="/features">All features</RouterLink>
          <RouterLink to="/features/carrier-selection">Carrier selection</RouterLink>
          <RouterLink to="/features/despatch">Book &amp; Despatch</RouterLink>
          <RouterLink to="/features/track-trace">Track &amp; Trace</RouterLink>
          <RouterLink to="/features/basic-bi-dashboard">BI dashboard</RouterLink>
          <RouterLink to="/features/rates">Rate Management</RouterLink>
        </div>

        <div class="grid gap-2">
          <div class="mb-1 font-semibold">Partners</div>
          <RouterLink to="/partners">Partners overview</RouterLink>
          <RouterLink to="/partners/carriers">Carriers</RouterLink>
          <RouterLink to="/partners/integrations">Integrations</RouterLink>
        </div>

        <div class="grid gap-2">
          <div class="mb-1 font-semibold">Legal</div>
          <RouterLink to="/privacy">Privacy Policy</RouterLink>
          <RouterLink to="/terms">Terms of Service</RouterLink>
        </div>

        <div class="grid gap-2">
          <div class="mb-1 font-semibold">Support</div>
          <a href="https://docs.freightmate.com/" target="_blank" rel="noreferrer">Help Center</a>
          <a href="https://app.freightmate.com/" target="_blank" rel="noreferrer">Log in</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
