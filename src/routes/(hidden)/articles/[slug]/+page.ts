import { error } from '@sveltejs/kit';
import articles from '$lib/articles/all';

export function load({ params }: { params: { slug: string }}) {
  const { slug } = params;
  const article = articles.find(article => article.slug === slug);

  if (!article) {
    throw error(404, 'Not found');
  }

  return { article };
}
