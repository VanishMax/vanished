<script>
  const timeline = [
    {
      title: 'Penumbra Labs',
      link: 'https://penumbra.zone/',
      timing: 'June 2024 – Present',
      img: 'penumbra.svg',
      description: [
        'Created the TypeScript library for communicating with crypto wallet browser extension from dApps',
        'Maintained and added new features to the <a href="https://praxwallet.com/" target="_blank" rel="noreferrer nofollow">Prax browser extension</>',
        'Learned Rust and contributed to the core Penumbra blockchain using this knowledge',
        'Delivered the first MVP of a <a href="https://veil.penumbra.zone/" target="_blank" rel="noreferrer nofollow">fully-private DEX</a> for Penumbra blockchain',
      ],
    },
    {
      title: 'Inita',
      link: 'https://inita.com/',
      timing: 'Oct 2022 – May 2024',
      img: 'inita.svg',
      description: [
        'Moved the large code base to monorepo structure enhancing developer experience and reducing build time by 37%',
        'Streamlined the processes, reducing feature delivery time by 2 days through enhanced code review, documentation and structured communication',
        'Saved at least 4 hours per week per team member by replacing manual work with AI scripts',
        'Pioneered with 2 new features that enhanced user engagement and retention and drew new users to the app',
      ],
    },
    {
      title: 'Spin',
      link: 'https://spin.fi/',
      timing: 'May 2022 – Oct 2022',
      img: 'spin.svg',
      description: [
        'Designed the architecture for the spot trading platform with high frequency in mind',
        'Created a multi-wallet support while refactoring the code base from the ground up',
        'Established the company-wide practices of calculating DeFi fees',
      ],
    },
    {
      title: 'Code Pilots',
      link: 'https://code-pilots.com/',
      timing: 'Nov 2020 – May 2022',
      img: 'codepilots.svg',
      description: [
        'Created a TypeScript library for bootstrapping admin panels creation 3 times faster than before',
        'Mentored and managed a team of software engineers working on 5+ products simultaneously',
        'Contributed to key open-source projects influencing company software',
      ],
    },
    {
      title: 'Fixtender',
      link: 'https://fixtender.com',
      timing: 'Nov 2018 – Nov 2020',
      img: 'fixtender.svg',
      description: [
        'Led the product development from the initial idea till acceptance to the Alchemist start-up accelerator',
        'Mentored new interns and performed code-review',
        'Wrote technical documentation for the web application',
      ],
    },
  ];
</script>

<h2 class="experience">Job experience <small>over 6 years</small></h2>

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
    width: 100%;
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
</style>
