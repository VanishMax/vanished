<script context="module">
  import articles from '../_articles/all';
  export async function preload(page) {
    const { slug } = page.params;
    const article = articles.find(article => article.slug === slug);
    if (!article) this.redirect(302, '404');
    return { article };
  }
</script>

<script>
  import Head from '../_components/article-head.svelte';
  import LinkToHome from '../_components/link-to-home.svelte';
  import Content from '../_components/article-content.svelte';
  export let article;

  const parsed = article && article.contents ? JSON.parse(article.contents) : null;
  if (!parsed || !parsed.blocks) throw new Error('An article must have a JSON string as its contents!');

  const blocks = parsed.blocks;
</script>

<svelte:head>
  <title>{article.title} | vanished</title>
  <meta name="title" content={article.title + '| vanished'}>
  <meta name="description" content={article.lead + '| vanished'}>
  <meta name="keywords" content={(article.keywords ? article.keywords + ', ' : '') + 'Max Korsunov, vanishmax, developer, programmer, front-end'}>
  <meta name="author" content="Max Korsunov">

  <meta property="og:type" content="article">
  <meta property="og:url" content={'https://vanishmax.com/articles/' + article.slug}>
  <meta property="og:title" content={article.title + '| vanished'}>
  <meta property="og:description" content={article.lead + '| vanished'}>
  <meta property="og:image" content={'https://vanishmax.com/articles-img/' + article.cover}>

  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content={article.title + '| vanished'}>
  <meta name="twitter:description" content={article.lead + '| vanished'}>
  <meta name="twitter:image" content={'https://vanishmax.com/articles-img/' + article.cover}>
</svelte:head>

<LinkToHome />

<Head title={article.title} prev={article.prev} next={article.next} />

<Content {blocks} />
