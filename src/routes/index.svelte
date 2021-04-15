<script lang="ts">
  import Gui from '$lib/Gui.svelte'
  import Colors from '$lib/Colors.svelte'
  import { theme, resetTheme } from '$lib/theme'
  import { buildThemeUrl } from '$lib/util'
  import { onMount } from 'svelte'

  import './index.scss'

  $: unique = 0
  $: copied = false

  const onClickCopyTheme = () => {
    const url = buildThemeUrl($theme)
    document.addEventListener('copy', function (e) {
      e.clipboardData.setData('text/plain', url)
      e.preventDefault()
    })
    document.execCommand('copy')

    copied = true
    setTimeout(() => {
      copied = false
    }, 1200)
  }

  const onClickReset = () => {
    window.history.replaceState('', '', '/')
    resetTheme('Dark')
    unique += 1
  }

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const hasTheme = urlParams.has('theme')

    if (hasTheme) {
      $theme = JSON.parse(urlParams.get('theme'))
    }
  })
</script>

<main>
  <Gui />
  {#key unique}
    <Colors />
  {/key}
  <!-- TODO: We should refactor this into its own component as well.-->
  <div class="grid-buttons-container">
    <div class="copy-button">
      <button on:click={onClickCopyTheme}>Copy</button>
    </div>
    <div class="reset-button">
      <button on:click={onClickReset}>Reset</button>
    </div>
  </div>
  {#if copied}
    <div class="share-container">Copied!</div>
  {/if}
</main>
