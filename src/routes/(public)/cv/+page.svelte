<script>
  import Preferences from '$lib/components/job-preference.svelte';
  import Timeline from '$lib/components/timeline.svelte';
  import Projects from '$lib/components/projects-done.svelte';
  import AboutMe from '$lib/components/about-me.svelte';
</script>

<svelte:head>
  <title>Max Korsunov's CV | vanished</title>
</svelte:head>

<h1>Curriculum vitae</h1>

<Preferences />
<Projects />
<Timeline />
<AboutMe />

<style>
  h1 {
    font-size: 32px;
  }
</style>
