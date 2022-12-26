<script lang="ts">
  import Article from '$lib/components/article-card.svelte';
  import articles from '$lib/articles/all';
</script>

<svelte:head>
  <title>Max Korsunov's personal blog | vanished</title>
</svelte:head>

<nav>
  <h1>Blog posts</h1>
  <a href="/create" class="btn-link">
    Write new article
  </a>
</nav>

{#each articles as article, i (i)}
  <Article {article} />
{/each}

<!-- Live a link to /404 just for Sapper to see it in the build -->
<a href="/404"><span/></a>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 32px;
  }

  .btn-link {
    margin: 0;
  }

  a {
    visibility: hidden;
  }
</style>
