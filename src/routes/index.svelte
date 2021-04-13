<script lang="ts">
  import Gui from '$lib/Gui.svelte'
  import Share from '$lib/Share.svelte'
  import { theme } from '$lib/theme'
  import { exportTheme } from '$lib/util'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { shareModalShown } from '$lib/store'

  import './index.scss'

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
  <div class="grid-container">
    <div class="base-theme-colors">Base</div>
    <div class="normal-theme-colors">Normal</div>
    <div class="bright-theme-colors">Bright</div>
    <div class="base-foreground">
      <input type="color" bind:value={$theme.palette.base.foreground} />
    </div>
    <div class="base-background">
      <input type="color" bind:value={$theme.palette.base.background} />
    </div>
    <div class="normal-primary">
      <input type="color" bind:value={$theme.palette.normal.primary} />
    </div>
    <div class="normal-secondary">
      <input type="color" bind:value={$theme.palette.normal.secondary} />
    </div>
    <div class="normal-surface">
      <input type="color" bind:value={$theme.palette.normal.surface} />
    </div>
    <div class="normal-error">
      <input type="color" bind:value={$theme.palette.normal.error} />
    </div>
    <div class="bright-primary">
      <input type="color" bind:value={$theme.palette.bright.primary} />
    </div>
    <div class="bright-secondary">
      <input type="color" bind:value={$theme.palette.bright.secondary} />
    </div>
    <div class="bright-surface">
      <input type="color" bind:value={$theme.palette.bright.surface} />
    </div>
    <div class="bright-error">
      <input type="color" bind:value={$theme.palette.bright.error} />
    </div>
  </div>

  <div class="grid-buttons-container">
    <div class="export-button">
      <button on:click={onClickExportTheme}>Export</button>
    </div>
    <div class="share-button">
      <button on:click={onClickShareTheme}>Share</button>
      {#if $shareModalShown}
        <Share />
      {/if}
    </div>
    <div class="reset-button">
      <button on:click={() => {}}>Reset</button>
    </div>
  </div>
</main>
