<script>
	import Layout from './_components/layout.svelte';
	import Timeline from './_components/timeline.svelte';
	import Projects from './_components/projects-done.svelte';
</script>

<svelte:head>
	<title>Max Korsunov's CV | vanished</title>
</svelte:head>

<Layout isCV>
	<h1>Curriculum vitae</h1>

	<h2>Open-Source projects</h2>
	<p>These are the projects that I have wrote by myself and put the biggest effort to realize ideas.</p>
	<Projects />
	<p>Also, I wrote small web-applications in order to learn new technologies and improve my skills:</p>
	<ul>
		<li>Participated in a University project <a href="https://github.com/Innopoints/frontend" target="_blank">Innopoints</a> from June 2019 till Jan 2020 with other students. All-university website was created with Sapper, SSR library for Svelte
		<li>Created <a href="https://github.com/VanishMax/games-with-fullstack" target="_blank">small website</a> with Apline.js on the front-end and Python + SQLAlchemy on the back-end
		<li>Created an <a href="https://github.com/VanishMax/serverless-gallery" target="_blank">image gallery</a> with Vanilla JS and serverless file uploading using Amazon S3
		<li>Created the application for <a href="https://github.com/VanishMax/solving-de" target="_blank">solving differential equations</a> numerically and representing them with Chart.js
	</ul>

	<h2>Job experience</h2>
	<Timeline />
</Layout>

<style>
	h1 {
		font-size: 32px;
	}
</style>
