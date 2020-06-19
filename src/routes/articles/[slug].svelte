<script context="module">
  import articles from '../_articles/all';
  export async function preload(page) {
    const { slug } = page.params;
    const article = articles.find(article => article.slug === slug);
    if (!article) this.error(404, 'Not found');
    return { article };
  }
</script>

<script>
  import Head from '../_components/article-head.svelte';
  export let article;
</script>

<a href="/">
  <img src="/vanished.png" alt="vanished">
</a>

<Head title={article.title} prev={article.prev} next={article.next} />

<style>
  a {
    margin: 15px auto;
  }

  a, img {
    display: block;
    width: 96px;
  }
</style>
