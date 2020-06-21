<script>
  const timeline = [
    {
      title: 'Stride',
      link: 'https://stride.one',
      timing: 'Since June 2019',
      img: 'stride.svg',
      description: [
        '<b>Mek</b> is a super power of myself',
        'I can also do this: <a href="https://github.com" target="_blank">GitHub link, huh?</a>'
      ],
    },
    {
      title: 'Eratart development',
      link: 'https://eratart.com/',
      timing: 'Dec 2018 — March 2019',
      img: 'eratart.png',
      description: [
        '<b>Mek</b> is a super power of myself',
        'I can also do this: <a href="https://github.com" target="_blank">GitHub link, huh?</a>'
      ],
    },
  ];
</script>

<section>
  {#each timeline as item}
    <div>
      <a href={item.link} target="_blank">
        <img src={'/cv/' + item.img} alt="company logo">
      </a>
      <h2>{item.title}</h2>
      <p class="subtitle">{item.timing}</p>
      {#each item.description as text}
        <p>{@html text}</p>
      {/each}
    </div>
  {/each}
</section>

<style>
  img {
    max-height: 40px;
  }

  h2 {
    margin-bottom: 0;
  }
  .subtitle {
    color: #63689c;
    font-size: 0.9rem;
    margin-top: 0;
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
