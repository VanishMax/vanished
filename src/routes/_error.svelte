<script>
  import {onMount} from 'svelte';
  import { goto } from '@sapper/app';

  export let status;

  onMount(() => {
    if (status === 404) {
      goto('/404');
    }
  });
</script>
