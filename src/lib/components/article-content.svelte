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

  h2 {
    font-size: 1.7rem;
  }

  p {
    text-align: justify;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  figure {
    margin: 0;
  }

  figcaption {
    text-align: center;
    font-style: italic;
    margin-top: 5px;
    font-size: 0.9rem;
  }

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    object-position: 50% 50%s;
    border-radius: 8px;
  }

  ul li, ol li {
    line-height: 1.5rem;
  }

  :global(article code.inline-code) {
    font-size: 0.95rem;
    color: #b44437;
    padding: 3px 4px;
    border-radius: 5px;
    letter-spacing: .4px;
    background: rgba(250, 239, 240, 0.78);
  }

  code pre {
    width: 100%;
    overflow-x: auto;
    background: white;
    padding: 8px;
    border-radius: 9px;
  }

  hr {
    border: 0;
    text-align: center;
    display: block;
    content: '***';
    font-size: 30px;
    line-height: 65px;
    height: 50px;
    letter-spacing: 0.2em;
  }

  hr:before {
    display: inline-block;
    content: '***';
    font-size: 30px;
    line-height: 65px;
    height: 30px;
    letter-spacing: 0.2em;
  }

  @media screen and (min-width: 1024px) {
    article {
      width: 60%;
    }

    figure {
      margin: 0 -50px;
    }
  }
</style>
