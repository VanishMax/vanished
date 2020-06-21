<script>
  const projects = [
    {
      title: 'Industrial-ui',
      link: 'https://github.com/VanishMax/industrial-ui',
      description: 'Production-oriented styleless, pure functional UI components. Built on top of Svelte, but with support for other frameworks, mainly React and Vue.',
      timing: 'Since Feb 2020',
      stars: null,
    },
    {
      title: 'Modern Web App',
      link: 'https://github.com/VanishMax/modern-web-app',
      description: 'React PWA with SSR and Code splitting. Has two articles in both <a href="https://medium.com/front-end-weekly/here-it-is-modern-web-app-651946efaa93" target="_blank">English</a> and <a href="https://habr.com/ru/post/432368/" target="_blank">Russian</a> languages of how to create a website with listed technologies from scratch.',
      timing: 'Sep-Dec 2018',
      stars: '45+'
    }
  ];
</script>

<section>
  {#each projects as project}
    <div>
      <a href={project.link} target="_blank">
        <h3>{project.title}</h3>
        <span>{project.timing}</span>
        {#if project.stars}<span>★ {project.stars}</span>{/if}
      </a>
      <p>{@html project.description}</p>
    </div>
  {/each}
</section>

<style>
  section {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  section > div {
    width: 100%;
    margin-bottom: 25px;
    padding: 10px 25px;
    border-radius: 10px;
    background: linear-gradient(145deg, #dfe1ec, #f8f8f8);
    box-shadow: 7px 7px 14px #c7c8cd, -7px -7px 14px #ffffff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h3 {
    margin-bottom: 0;
  }

  a > span {
    display: inline-block;
    color: #63689c;
    font-size: 0.9rem;
  }

  a > span:not(:nth-child(2)) {
    margin-left: 8px;
  }

  @media screen and (min-width: 1024px) {
    section {
      flex-direction: row;
    }

    section > div {
      width: 48%;
      margin-right: 2%;
    }
  }
</style>
