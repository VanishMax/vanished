<script>
  export let article;
</script>

<article>
  <div>
    <h2>{article.title}</h2>
    <time>{article.date}</time>
    <p>{article.lead}</p>
  </div>
  <img src="{'/articles-img/' + article.cover}" alt="article cover">
  <a href="{'/articles/' + article.slug}"><span/></a>
</article>

<style>
  article {
    position: relative;
    width: 100%;
    margin-bottom: 18px;
    padding: 20px 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column-reverse;
    background: linear-gradient(145deg, #dfe1ec, #f8f8f8);
    box-shadow: 7px 7px 14px #c7c8cd, -7px -7px 14px #ffffff;
  }

  article a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  img {
    border-radius: 10px;
    object-fit: cover;
    object-position: 50% 50%;
    max-height: 200px;
  }

  h2 {
    margin-bottom: 0;
  }

  time {
    font-size: 14px;
    color: #63689c;
  }

  @media screen and (min-width: 1024px) {
    article {
      flex-direction: row;
      justify-content: space-between;
    }

    img {
      height: auto;
      width: auto;
      max-width: 25%;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    img {
      max-width: 40%;
    }
  }
</style>
