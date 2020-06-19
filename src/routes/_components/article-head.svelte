<script>
  export let title;
  export let prev = {slug: '', title: ''};
  export let next = {slug: '', title: ''};
</script>

<header>
  {#if prev.slug}
    <div class="prev">Prev</div>
  {/if}

  <h1>{title}</h1>

  {#if next.slug}
    <div class="next">Next</div>
  {/if}
</header>

<style>
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
  }

  h1 {
    max-width: 60%;
  }
</style>
