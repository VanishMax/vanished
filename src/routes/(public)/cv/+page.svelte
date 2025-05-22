<script>
  import Preferences from '$lib/components/job-preference.svelte';
  import Timeline from '$lib/components/timeline.svelte';
  import Projects from '$lib/components/projects-done.svelte';
</script>

<svelte:head>
  <title>Max Korsunov's CV | vanished</title>
</svelte:head>

<section>
  <h1>Max Korsunov</h1>
  <i>
    Not just a <strong>frontend engineer</strong> – a partner to your web3 startup
  </i>

  <Preferences />
  <Timeline />
  <Projects />
</section>

<style>
  h1 {
    font-size: 32px;
    margin-bottom: 12px;
  }

  i {
    display: inline-block;
    margin-bottom: 16px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  @media (min-width: 1024px) {
    section {
      width: 700px;
    }
  }
</style>
