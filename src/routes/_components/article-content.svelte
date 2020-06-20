<script>
  export let blocks;
</script>

<article>
  {#each blocks as block}
    {#if block.type === 'header'}
      <h2>{block.data.text}</h2>
    {:else if block.type === 'paragraph'}
      <p>{@html block.data.text}</p>
    {:else if block.type === 'delimiter'}
      <hr>
    {:else if block.type === 'list'}
      {#if block.data.style === 'ordered'}
        <ol>
          {#each block.data.items as li}
            <li>{@html li}</li>
          {/each}
        </ol>
      {:else}
        <ul>
          {#each block.data.items as li}
            <li>{@html li}</li>
          {/each}
        </ul>
      {/if}
    {:else if block.type === 'image'}
      <figure>
        <img src={block.data.file.url} alt={block.data.caption}>
        <figcaption>{@html block.data.caption}</figcaption>
      </figure>
    {:else if block.type === 'code'}
      <code>
        <pre>{@html block.data.code}</pre>
      </code>
    {/if}
  {/each}
</article>

<style>
  article {
    width: 90%;
    margin: auto;
  }

  p {
    text-align: justify;
  }

  figure {
    margin: 0;
  }

  figcaption {
    text-align: center;
    font-style: italic;
  }

  img {
    width: 100%;
  }

  code pre {
    width: 100%;
    overflow-x: auto;
  }

  @media screen and (min-width: 1024px) {
    article {
      width: 60%;
    }
  }
</style>
