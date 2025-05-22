<script>
import ProfileCard from '$lib/components/profile-card.svelte';
</script>

<svelte:head>
  <title>Max Korsunov | vanished</title>
</svelte:head>

<ProfileCard />

<!-- A link to /404 just for Sapper to see it in the build -->
<a href="/404"><span/></a>

<style>
  a {
    visibility: hidden;
  }
</style>
