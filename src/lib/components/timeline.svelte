<script>
  const timeline = [
    {
      title: 'Inita',
      link: 'https://inita.com/',
      timing: 'Since October 2022. Luxembourg',
      img: 'inita.svg',
      description: [
        'Developing high-quality product and moving the startup forward',
      ],
    },
    {
      title: 'Code Pilots',
      link: 'https://code-pilots.com/',
      timing: 'Nov 2020 – Oct 2020. Almaty, Kazakhstan',
      img: 'codepilots.svg',
      description: [
        'Developed several high-load projects',
        'Created a tool to optimize admin dashboard creation',
        'Developed the starter code template for all future projects',
        'Acted as an interviewer and mentor for newcomers',
      ],
    },
    {
      title: 'Fixtender',
      link: 'https://fixtender.com',
      timing: 'Jun 2019 – Nov 2020. Riga, Latvia',
      img: 'fixtender.svg',
      description: [
        'Finished several projects for <strong>industrial customers</strong> from scratch',
        'Applied modern technologies on every project such as <strong>SSR</strong> for public websites or <strong>TypeScript</strong> for difficult applications',
        'Contributed to <strong>Open-Source</strong> in order to solve the job\'s tasks',
        'Performed <strong>unit</strong> and <strong>end-to-end tests</strong> to ensure reliability',
        'Was a mentor for new interns and performed <strong>code-review</strong>',
        'Wrote technical documentation for all web applications',
        'Communicated with project team up to customers to ensure the understanding of business requirements',
      ],
    },
    {
      title: 'Eratart development',
      link: 'https://eratart.com/',
      timing: 'Dec 2018 — March 2019',
      img: 'eratart.png',
      description: [
        'Built <strong>REST API with Node.js</strong>',
        'Integrated Google services into the project',
        'Created an interface of the admin\'s dashboard of the project with <strong>React</strong>'
      ],
    },
  ];
</script>

<h2 class="experience">Job experience <small>over 4 years</small></h2>

<section>
  {#each timeline as item, i}
    <div>
      <a href={item.link} target="_blank" aria-labelledby={item.title}>
        <img src={'/cv/' + item.img} alt="company logo">
      </a>
      <h2>{item.title}</h2>
      <p class="subtitle">{item.timing}</p>
      <p><u>Achievements</u></p>
      <ul>
        {#each item.description as text}
          <li>{@html text}</li>
        {/each}
      </ul>
    </div>
  {/each}
</section>

<style>
  img {
    max-height: 40px;
  }

  .experience {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .experience > small {
    font-size: 1rem;
  }

  section h2 {
    margin-bottom: 0;
  }

  .subtitle {
    color: #63689c;
    font-size: 0.9rem;
    margin-top: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    margin-top: 10px;
  }

  div {
    position: relative;
    padding-bottom: 2.75rem;
    padding-left: 2.75rem;
    text-align: left;
  }

  div:before, div:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #e6e7ee;
    border: .0625rem solid #c7c8cd;
    box-shadow: inset 1px 2px 1px #d2d2d2, inset -3px -3px 7px #eff0f5;
  }
  div:before {
    transform: rotate(45deg);
    display: block;
    margin: 0 0 0 -5px;
    width: 10px;
    height: 10px;
  }

  div:after {
    content: "";
    bottom: 18px;
    width: 6px;
    height: auto;
    margin-left: -3px;
    margin-top: 1.875rem;
    border-radius: .55rem;
  }

  @media screen and (min-width: 1024px) {
    .experience {
      width: 70%;
    }

    div {
      width: 50%;
      margin-left: 50%;
    }

    div:nth-child(2n+1) {
      margin-left: 0;
      padding-right: 2.75rem;
      padding-left: 0;
      text-align: right;
      direction: rtl;
    }

    div:nth-child(2n+1):before {
      margin-right: -7px;
    }

    div:nth-child(2n+1):after {
      margin-right: -5px;
    }

    div:nth-child(2n+1):before, div:nth-child(2n+1):after {
      right: 0;
      left: auto;
    }
  }

  @media screen and (min-width: 1220px) {
    section {
      width: 700px;
    }
  }
</style>
