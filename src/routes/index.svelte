<script>
	import ProfileCard from './_components/profile-card.svelte';
	import Article from './_components/article-card.svelte';
	import articles from './_articles/all';
</script>

<svelte:head>
	<title>Max Korsunov's personal blog | vanished</title>
	<meta name="title" content="Max Korsunov's personal blog">
	<meta name="description" content="The lover of the new. Here are my articles on front-end development topics.">
	<meta name="keywords" content="Max Korsunov, vanishmax, developer, programmer, front-end, javascript, js, svelte, framework, blog, articles">
	<meta name="author" content="Max Korsunov">

	<meta property="og:type" content="website">
	<meta property="og:url" content="https://vanishmax.com/">
	<meta property="og:title" content="Max Korsunov's personal blog">
	<meta property="og:description" content="The lover of the new. Here are my articles on front-end development topics.">
	<meta property="og:image" content="https://vanishmax.com/me.jpeg">

	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="Max Korsunov's personal blog">
	<meta name="twitter:description" content="The lover of the new. Here are my articles on front-end development topics.">
	<meta name="twitter:image" content="https://vanishmax.com/me.jpeg">
</svelte:head>


<section>
	<ProfileCard />
	<main>
		<img src="/vanished.png" alt="vanished">
		<h1>Blog posts</h1>
		{#each articles as article, i (i)}
			<Article {article} />
		{/each}
	</main>
</section>


<style>
	section {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		margin-top: 75px;
	}

	main {
		margin: 15px 20px 0;
		width: auto;
	}

	img {
		display: none;
		margin: auto;
		width: 96px;
	}

	@media screen and (min-width: 1024px) {
		section {
			flex-direction: row;
			margin-top: 0;
		}

		main {
			margin: 15px 50px 0;
			width: 100%;
		}

		img {
			display: block;
		}
	}

	h1 {
		font-size: 32px;
	}
</style>
