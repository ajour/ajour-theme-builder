<script lang="ts">
  import Gui from '$lib/Gui.svelte'
  import Share from '$lib/Share.svelte'
  import { theme } from '$lib/theme'
  import { exportTheme } from '$lib/util'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { shareModalShown } from '$lib/store'

  const onClickExportTheme = () => {
    exportTheme($theme)
  }

  const onClickShareTheme = () => {
    $shareModalShown = true
  }

  onMount(() => {
    const queryTheme = JSON.parse($page.query.get('theme'))

    if (queryTheme) {
      $theme = queryTheme
    }
  })
</script>

<main>
  <Gui />
  <div />
  <!-- test input / reactive css color -->
  <p>Background color: {$theme.palette.base.background}</p>
  <input
    type="color"
    bind:value={$theme.palette.base.background}
    style="height: 50px;"
  />
  <div />
  <!-- test export theme file -->
  <button on:click={onClickExportTheme}>EXPORT</button>
  <!-- test export theme file -->
  <button on:click={onClickShareTheme}>SHARE</button>
  {#if $shareModalShown}
    <Share />
  {/if}
</main>
