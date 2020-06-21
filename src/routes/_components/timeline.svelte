<script>
  const timeline = [
    {
      title: 'Stride',
      link: 'https://stride.one',
      timing: 'Since June 2019. Kazan, Russia',
      img: 'stride.svg',
      description: [
        'Finished several projects for <b>industrial customers</b> from scratch',
        'Applied modern technologies on every project such as <b>SSR</b> for public websites or <b>TypeScript</b> for difficult applications',
        'Contributed to <b>Open-Source</b> in order to solve job\'s tasks',
        'Performed <b>unit</b> and <b>end-to-end test</b> to insure reliability',
        'Was a mentor for new interns and performed <b>code-review</b>',
        'Wrote technical documentation for all web applications',
        'Communicated with project team up to customers to ensure the understanding of business requirements',
      ],
    },
    {
      title: 'Eratart development',
      link: 'https://eratart.com/',
      timing: 'Dec 2018 — March 2019. Russia',
      img: 'eratart.png',
      description: [
        'Built <b>REST API with Node.js</b>',
        'Integrated Google services into the project',
        'Created an interface of the admin\'s panel of the project with <b>React</b>'
      ],
    },
  ];
</script>

<h2>Job experience</h2>

<section>
  {#each timeline as item, i}
    <div>
      <a href={item.link} target="_blank">
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

  @media screen and (min-width: 1220px) {
    section {
      width: 700px;
    }
  }
</style>
