<script>
  export let title;
  export let isCreate = false;
  export let prev = {slug: '', title: ''};
  export let next = {slug: '', title: ''};
</script>

<header>
  {#if prev.slug && !isCreate}
    <a href={'/articles/' + prev.slug} class="prev" title={prev.title}>
      Prev:<br>{prev.title}
    </a>
  {/if}

  <h1>{title}</h1>

  {#if next.slug && !isCreate}
    <a href={'/articles/' + next.slug} class="next" title={next.title}>
      Next:<br>{next.title}
    </a>
  {/if}
</header>

<style>
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
  }

  .prev, .next {
    display: none;
    text-align: center;
    font-size: 0.8rem;
    font-style: italic;
    max-width: 150px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    text-decoration: none;
    color: #63689c;
  }

  @media screen and (min-width: 1024px) {
    .prev, .next {
      display: inline-block;
    }
  }
</style>
