<script>
	import Layout from './_components/layout.svelte';
	import Timeline from './_components/timeline.svelte';
</script>

<svelte:head>
	<title>Max Korsunov's CV | vanished</title>
</svelte:head>

<Layout isCV>
	<h1>CV</h1>
	<Timeline />
</Layout>

<style>
	h1 {
		font-size: 32px;
	}
</style>
