import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    { path: '/', component: () => import('@/pages/index.vue') },
    { path: '/about', component: () => import('@/pages/about.vue') },
    { path: '/contact', component: () => import('@/pages/contact.vue') },
    { path: '/faq', component: () => import('@/pages/faq.vue') },
    { path: '/features', component: () => import('@/pages/features/index.vue') },
    { path: '/features/carrier-selection', component: () => import('@/pages/features/carrier-selection.vue') },
    { path: '/features/despatch', component: () => import('@/pages/features/despatch.vue') },
    { path: '/features/track-trace', component: () => import('@/pages/features/track-trace.vue') },
    { path: '/features/basic-bi-dashboard', component: () => import('@/pages/features/basic-bi-dashboard.vue') },
    { path: '/features/rates', component: () => import('@/pages/features/rates.vue') },
    { path: '/partners', component: () => import('@/pages/partners/index.vue') },
    { path: '/partners/carriers', component: () => import('@/pages/partners/carriers.vue') },
    { path: '/partners/integrations', component: () => import('@/pages/partners/integrations.vue') },
    { path: '/resources', component: () => import('@/pages/resources/index.vue') },
    { path: '/resources/:slug', component: () => import('@/pages/resources/[slug].vue') },
    { path: '/privacy', component: () => import('@/pages/privacy.vue') },
    { path: '/terms', component: () => import('@/pages/terms.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('@/pages/NotFound.vue') }
  ]
});

export default router;
