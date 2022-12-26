<script>
  import Head from '$lib/components/article-head.svelte';
  import LinkToHome from '$lib/components/link-to-home.svelte';

  import { onMount } from 'svelte';
  let loading = true;
  let editor = null;
  onMount(async () => {
    const EditorJS = (await import ('@editorjs/editorjs')).default;
    const Header = (await import ('@editorjs/header')).default;
    const Checklist = (await import ('@editorjs/checklist')).default;
    const SimpleImage = (await import ('@editorjs/simple-image')).default;
    const Delimiter = (await import ('@editorjs/delimiter')).default;
    const Code = (await import ('@editorjs/code')).default;
    const List = (await import ('@editorjs/list')).default;
    const Quote = (await import ('@editorjs/quote')).default;
    editor = new EditorJS({
      holder: 'editor',
      data: {},
      autofocus: true,
      placeholder: 'The story begins here!',
      tools: {
        header: Header,
        list: List,
        code: Code,
        quote: Quote,
        checklist: Checklist,
        delimiter: Delimiter,
        image: {
          class: SimpleImage,
          inlineToolbar: true,
          config: {
            placeholder: 'Paste image URL'
          }
        },
      },
      onReady: () => {
        loading = false;
      },
    });
    window.addEventListener('paste', (event) => {
      const textFromPaste = event.clipboardData.getData('text/plain');
      try {
        // Means the editor.js content was passed
        const data = JSON.parse(textFromPaste);
        if (data && data.blocks && data.version && data.time) editor.render(data);
      } catch (_) {
        console.warn('Paste unsuccessful with content:', textFromPaste.substring(0, 64) + '...');
      }
    });
  });
  let saved = null;
  const save = () => {
    editor.save().then((data) => {
      if (navigator.clipboard) navigator.clipboard.writeText(JSON.stringify(data));
      saved = setTimeout(() => saved = null, 3000);
    });
  };
</script>

<svelte:head>
  <title>Article editor | vanished</title>
</svelte:head>

<LinkToHome />

<Head title="Some article name" />

{#if loading}
  <p>
    The Editor is loading. Please, wait...
  </p>
{/if}

<article id="editor"></article>

<button type="button" class="btn-link" class:saved on:click={save}>
  {saved ? 'Copied' : 'Copy'}
</button>

<style>
  article {
    width: 90%;
    margin: auto;
  }
  p {
    text-align: center;
  }
  button {
    position: fixed;
    bottom: 15px;
    right: 15px;
    border-radius: 50%;
    height: 65px;
    width: 65px;
    margin: 0;
    padding: 0;
    z-index: 1;
    text-transform: uppercase;
    transition: background-color 200ms;
  }
  button:focus {
    outline: none;
  }
  button.saved {
    background-color: #e0e0eb;
    transition: background-color 200ms;
  }
  @media screen and (min-width: 1024px) {
    article {
      width: 60%;
    }
  }
</style>
