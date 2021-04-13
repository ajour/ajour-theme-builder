<script lang="ts">
  import { theme } from '$lib/theme'
  import { onMount } from 'svelte'
  import { shareModalShown } from './store'
  import { shareThemeUrl } from './util'

  $: url = null

  const onClickClose = () => {
    $shareModalShown = false
  }

  onMount(() => {
    url = shareThemeUrl($theme)
  })
</script>

<div class="overlay">
  <div class="modal">
    <button class="modal-close" on:click={onClickClose}>X</button>
    <p>{url}</p>
  </div>
</div>

<style lang="scss">
  .overlay {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 5;

    display: flex;
    justify-content: center;
    align-items: center;

    .modal {
      background-color: white;
      overflow: hidden;
      width: 300px;
      height: 200px;
      border-radius: 0.25rem;
    }
  }
</style>
