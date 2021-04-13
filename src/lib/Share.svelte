<script lang="ts">
  import { theme } from '$lib/theme'
  import { beforeUpdate, createEventDispatcher } from 'svelte'
  import { buildThemeUrl } from './util'
  import { fade } from 'svelte/transition'

  let inputElem: HTMLInputElement
  const dispatch = createEventDispatcher()

  $: copied = false
  $: url = buildThemeUrl($theme)

  const onClickCopy = async () => {
    inputElem.select()
    document.execCommand('copy')
    copied = true

    dispatch('destroyme')
  }

  beforeUpdate(() => {
    url = buildThemeUrl($theme)
  })
</script>

<div
  class="share-container"
  in:fade={{ delay: 250, duration: 300 }}
  out:fade={{ delay: 1000, duration: 300 }}
>
  <input value={url} bind:this={inputElem} />
  <button on:click={onClickCopy}>Copy</button>
  <div
    class="share-copied-text"
    style="visibility: {copied ? 'visible' : 'hidden'}"
  >
    Copied!
  </div>
</div>

<style lang="scss">
  .share-container {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      padding: 2px 6px;
      border-radius: 0.25rem;
      border: solid #ba84fc;
      border-width: 2px;
      width: 500px;
    }

    .share-copied-text {
      padding: 4px;
    }
  }
</style>
