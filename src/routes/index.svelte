<script lang="ts">
  import Gui from '$lib/Gui.svelte'
  import Colors from '$lib/Colors.svelte'
  import Share from '$lib/Share.svelte'
  import { theme, defaultTheme } from '$lib/theme'
  import { exportTheme } from '$lib/util'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { shareUrlShown } from '$lib/store'

  import './index.scss'

  const onClickExportTheme = () => {
    exportTheme($theme)
  }

  const onClickShareTheme = () => {
    $shareUrlShown = true
  }

  const onClickReset = () => {
    window.history.replaceState('', '', '/')
    $theme = defaultTheme
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
  <Colors />
  <!-- TODO: We should refactor this into its own component as well.-->
  <div class="grid-buttons-container">
    <div class="export-button">
      <button on:click={onClickExportTheme}>Export</button>
    </div>
    <div class="share-button">
      <button on:click={onClickShareTheme}>Share</button>
    </div>
    <div class="reset-button">
      <button on:click={onClickReset}>Reset</button>
    </div>
  </div>
  {#if $shareUrlShown}
    <Share />
  {/if}
</main>
