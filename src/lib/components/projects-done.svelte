<script>
  const projects = [
    {
      title: 'Foton',
      link: 'https://github.com/VanishMax/foton',
      description: 'TypeScript toolkit for interacting with TON wallets and blockchain as a whole. The library wraps existing solutions into one comfortable API',
      timing: 'May 2024',
      stars: '50+',
    },
    {
      title: 'Vanilla JSX',
      link: 'https://github.com/VanishMax/vanilla-jsx',
      description: 'Proof-of-concept for using JSX in vanilla JavaScript apps, with articles explaining the idea',
      timing: 'Apr 2022',
      stars: '15+',
    },
    {
      title: 'Magner',
      link: 'https://github.com/code-pilots/magner',
      description: 'Model-driven universal admin panel magnetic to any backend',
      timing: 'May – August 2021',
      stars: '15+',
    },
  ];
</script>

<h2>Open-Source projects</h2>
<p>These are the projects that I have created and put the biggest effort to make ideas come true.</p>

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

<!--<p>Also, I wrote small web-applications in order to learn new technologies and improve my skills:</p>-->
<!--<ul>-->
<!--  <li>May 2021. <a href="https://github.com/IU-MAP/project-les-frais" target="_blank">"Les Frais" project</a>: a Vue 3 app to keep track of expenses.-->
<!--  <li>Nov 2020. Simple <a href="https://github.com/VanishMax/pizza-shop" target="_blank">"Pizza delivery service"</a>: a React app with authorization provided by serverless Node.js backend.-->
<!--  <li>Sep 2020. <a href="https://gitlab.com/GneyHabub/ds_project2" target="_blank">Distributed File System</a> as a University project. Node.js + TypeScript application for managing a nameserver, file servers and clients with no single point of failure.-->
<!--  <li>June 2019 – Jan 2020. Participated in a University project <a href="https://github.com/Innopoints/frontend" target="_blank">Innopoints</a> with other students. All-university website was created with Sapper, SSR library for Svelte.-->
<!--  <li>May 2020. Created a <a href="https://github.com/VanishMax/games-with-fullstack" target="_blank">small website</a> with Apline.js on the front-end and Express.js + MongoDB on the back-end.-->
<!--  <li>Nov 2019. Created the application for <a href="https://github.com/VanishMax/solving-de" target="_blank">solving differential equations</a> numerically and representing them with Chart.js.-->
<!--  <li>Apr 2019. Created an <a href="https://github.com/VanishMax/serverless-gallery" target="_blank">image gallery</a> with Vanilla JS and serverless file uploading using Amazon S3.-->
<!--</ul>-->

<style>
  section {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
  }

  section > div {
    width: 100%;
    margin-bottom: 25px;
    padding: 10px 25px;
    border-radius: 10px;
    background: linear-gradient(145deg, #dfe1ec, #f8f8f8);
    box-shadow: 7px 7px 14px #c7c8cd, -7px -7px 14px #ffffff;
  }

  section a {
    color: inherit;
    text-decoration: none;
  }

  h3 {
    margin-bottom: 0;
  }

  section a > span {
    display: inline-block;
    color: #63689c;
    font-size: 0.9rem;
  }

  a > span:not(:nth-child(2)) {
    margin-left: 8px;
  }

  p, li {
    line-height: 1.6;
    text-align: justify;
  }

  ul {
    padding-left: 20px;
  }

  ul > li {
    margin-top: 8px;
  }

  @media screen and (min-width: 1024px) {
    section p {
      width: 100%;
    }
  }
</style>
