<script lang="ts">
  export let isCV = false;
</script>

<header>
  <figure class="flex-center">
    <img src="/me.jpg" alt="me">
  </figure>

  <h3>Max Korsunov</h3>
  <span>Bali, Indonesia</span>
  <p>The lover of the new. Front-end engineer with creative mind.</p>

  {#if isCV}
    <a href="/" class="btn-link">See blog</a>
  {:else}
    <a href="/cv" class="btn-link">See the CV</a>
  {/if}

  <nav class="flex-center">
    <a class="flex-center" href="mailto:max@vanishmax.com" target="_blank" rel="noreferrer nofollow">
      <img src="/mail.png" alt="Email icon">
    </a>
    <a class="flex-center" href="https://github.com/VanishMax" target="_blank" rel="noreferrer nofollow">
      <img src="/github.png" alt="GitHub icon">
    </a>
    <a class="flex-center" href="https://t.me/vanishmax" target="_blank" rel="noreferrer nofollow">
      <img src="/telegram.png" alt="Telegram icon">
    </a>
    <a class="flex-center" href="https://twitter.com/vanish_max" target="_blank" rel="noreferrer nofollow">
      <img src="/twitter.png" alt="Twitter icon">
    </a>
  </nav>
</header>

<style>
  header {
    position: relative;
    margin-top: 75px;
    border-radius: 30px;
    width: 350px;
    padding: 100px 50px 40px;
    background: linear-gradient(145deg, #dfe1ec, #f8f8f8);
    box-shadow: 7px 7px 14px #c7c8cd, -7px -7px 14px #ffffff;
  }

  figure {
    position: absolute;
    top: 0;
    left: 50px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    transform: translateY(-50%);
    background: linear-gradient(145deg, #d9d9d9, #fafafa);
    box-shadow: inset 2px 2px 5px #c7c8cd, inset -3px -3px 6px #ffffff;
  }

  figure img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }

  h3 {
    font-size: 25px;
    margin-bottom: 0;
  }

  span {
    display: inline-block;
    color: #63689c;
    font-size: 0.9rem;
  }

  p {
    line-height: 20px;
  }

  nav {
    justify-content: space-between;
  }

  nav a {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: linear-gradient(145deg, #d9d9d9, #fafafa);
    box-shadow: inset 2px 2px 5px #c7c8cd, inset -3px -3px 6px #ffffff;
  }

  nav a:hover {
    box-shadow: 2px 2px 5px #c7c8cd, -3px -3px 6px #fff;
  }

  nav img {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 1023px) {
    header {
      margin: auto;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    header {
      min-width: 350px;
      margin-left: 20px;
    }

    figure {
      left: 30px;
    }
  }

  @media screen and (min-width: 1440px) {
    header {
      min-width: 350px;
      margin-left: 50px;
      width: 350px;
    }
  }
</style>
