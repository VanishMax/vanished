<script>
	import Layout from './_components/layout.svelte';
	import Preferences from './_components/job-preference.svelte';
	import Timeline from './_components/timeline.svelte';
	import Projects from './_components/projects-done.svelte';
	import AboutMe from './_components/about-me.svelte';
</script>

<svelte:head>
	<title>Max Korsunov's CV | vanished</title>
</svelte:head>

<Layout isCV>
	<h1>Curriculum vitae</h1>

	<Preferences />
	<Projects />
	<Timeline />
	<AboutMe />
</Layout>

<style>
	h1 {
		font-size: 32px;
	}
</style>
