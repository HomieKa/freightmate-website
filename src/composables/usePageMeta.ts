import { useHead } from '@vueuse/head';
import { MaybeRefOrGetter, toValue } from 'vue';
import { withBase } from '@/lib/assets';

type PageMetaOptions = {
  title: MaybeRefOrGetter<string>;
  description?: string;
  image?: string;
  url?: string;
};

const defaultImage = withBase('images/features/hero_page_pic.png');

export function usePageMeta({ title, description = '', image = defaultImage, url }: PageMetaOptions) {
  useHead(() => {
    const resolvedTitle = toValue(title);
    const resolvedUrl = url ?? (typeof window !== 'undefined' ? window.location.href : '');
    return {
      title: resolvedTitle,
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: resolvedTitle },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: resolvedUrl },
        { property: 'og:image', content: image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: resolvedTitle },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image }
      ]
    };
  });
}
