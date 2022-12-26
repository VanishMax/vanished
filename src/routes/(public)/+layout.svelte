<script lang="ts">
  import { page } from '$app/stores';
  import ProfileCard from '$lib/components/profile-card.svelte';

  import '@fontsource/montserrat/latin-400.css';
  import '@fontsource/montserrat/latin-400-italic.css';
  import '@fontsource/montserrat/latin-500.css';
  import '../styles.css';

  $: isCV = $page.route.id === '/cv';
</script>

<svelte:head>
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
  <div>
    <ProfileCard {isCV} />
  </div>
  <main>
    <a href="/static">
      <img src="/vanished.png" alt="vanished">
    </a>
    <slot />
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

  a {
    display: none;
    margin: auto;
    width: 96px;
  }

  img {
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

    a {
      display: block;
    }
  }
</style>
