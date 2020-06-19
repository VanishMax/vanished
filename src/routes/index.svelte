<script>
	import Layout from './_components/layout.svelte';
	import Article from './_components/article-card.svelte';
	import articles from './_articles/all';
</script>

<svelte:head>
	<title>Max Korsunov's personal blog | vanished</title>
</svelte:head>

<Layout>
	<h1>Blog posts</h1>
	{#each articles as article, i (i)}
		<Article {article} />
	{/each}
</Layout>

<style>
	h1 {
		font-size: 32px;
	}
</style>
