<script lang="ts">
  import '@fontsource/montserrat/latin-400.css';
  import '@fontsource/montserrat/latin-400-italic.css';
  import '@fontsource/montserrat/latin-500.css';
  import '../styles.css';
</script>

<svelte:head>
  <meta name="title" content="Max Korsunov | vanished">
  <meta name="description" content="Lover of the new. Front-end engineer with creative mind.">
  <meta name="keywords" content="Max Korsunov, vanishmax, web3, crypto, startup, developer, engineer, programmer, front-end, frontend, javascript, typescript, js, reactjs, nextjs, html, css">
  <meta name="author" content="Max Korsunov">

  <meta property="og:type" content="website">
  <meta property="og:url" content="https://vanishmax.com/">
  <meta property="og:title" content="Max Korsunov | vanished">
  <meta property="og:description" content="Lover of the new. Front-end engineer with creative mind.">
  <meta property="og:image" content="https://vanishmax.com/me1.jpg">

  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Max Korsunov | vanished">
  <meta name="twitter:description" content="Lover of the new. Front-end engineer with creative mind.">
  <meta name="twitter:image" content="https://vanishmax.com/me1.jpg">
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
