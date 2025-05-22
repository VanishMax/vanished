<script>
  const TECHNOLOGIES = [
    'TypeScript',
    'React.js',
    'Web3',
    'Vue.js',
    'Svelte',
    'Node.js',
    'Rust',
  ];
</script>

<p>
  I create best-in-class frontends for Web3 startups: performant, accessible, working as intended.
  But I don't stop at the UI – I make backends, build browser extensions, design in Figma, maintain
  open source libraries, and actively engage with the dev community. I gather product requirements,
  shape features, and turn ideas into polished products – quickly and at the highest quality.
</p>
<p>
  Proficient in Web3, I bring more than just technical execution. I can model DeFi tokenomics,
  architect order books, write smart contracts in Solidity or Rust, connect them seamlessly with TypeScript,
  or even build a high-frequency trading engine for decentralized exchanges.
</p>
<p>
  You could call me a full-stack engineer – but really, I'm someone who helps Web3 startups
  move faster, build smarter, and ship better products.
</p>

<p>Technologies I am good at:</p>
<ul>
  {#each TECHNOLOGIES as item}
    <li>{item}</li>
  {/each}
</ul>

<style>
  /*.danger {*/
  /*  display: inline;*/
  /*  color: #b44437;*/
  /*  font-size: 1.05rem;*/
  /*  padding: 5px 7px;*/
  /*  border-radius: 5px;*/
  /*  letter-spacing: .4px;*/
  /*  background: rgba(250, 239, 240, 0.78);*/
  /*}*/

  p {
    line-height: 1.6;
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    margin: 0 0 50px;
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
