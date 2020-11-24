<script>
  const TECHNOLOGIES = [
    'TypeScript',
    'Vue.js',
    'React.js',
    'Svelte',
    'Node.js',
    'Unit tests',
  ];
</script>

<p class="danger">Currently not interested in job opportunities</p>

<p>Looking for a remote job as a <strong>Front-end engineer</strong> without relocation</p>

<p>Technologies I am good at:</p>
<ul>
  {#each TECHNOLOGIES as item}
    <li>{item}</li>
  {/each}
</ul>

<style>
  .danger {
    display: inline;
    color: #b44437;
    font-size: 1.05rem;
    padding: 5px 7px;
    border-radius: 5px;
    letter-spacing: .4px;
    background: rgba(250, 239, 240, 0.78);
  }

  p {
    line-height: 1.6;
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    font-size: 1.05rem;
    padding: 5px 7px;
    margin-top: 1rem;
    border-radius: 5px;
    letter-spacing: .4px;
    background: #eaebf1;
    box-shadow: 2px 2px 5px #c7c8cd, -3px -3px 6px #fff;
  }
  li:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
