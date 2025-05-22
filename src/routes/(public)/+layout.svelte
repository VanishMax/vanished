<script lang="ts">
  import '@fontsource/montserrat/latin-400.css';
  import '@fontsource/montserrat/latin-400-italic.css';
  import '@fontsource/montserrat/latin-500.css';
  import '../styles.css';
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

<main>
  <a href="/">
    <img src="/vanished.png" alt="vanished">
  </a>

  <slot />
</main>


<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin: 32px 20px 0;
  }

  a {
    display: block;
    margin: auto;
    width: 96px;
  }

  img {
    width: 96px;
  }
</style>
