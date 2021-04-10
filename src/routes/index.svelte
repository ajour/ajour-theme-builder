<script lang="ts">
  import Gui from '$lib/Gui.svelte'
  import { theme, defaultTheme } from '$lib/theme'
  import { exportTheme } from '$lib/util'

  $: inputTheme = defaultTheme

  const onColorInput = () => {
    theme.update((theme) => {
      theme = inputTheme
      return theme
    })
  }

  const onClickExportTheme = () => {
    exportTheme($theme)
  }
</script>

<main>
  <Gui />
  <div />
  <!-- test input / reactive css color -->
  <p>Background color: {inputTheme.palette.base.background}</p>
  <input
    type="color"
    bind:value={inputTheme.palette.base.background}
    style="height: 50px;"
    on:input={onColorInput}
  />
  <div />
  <!-- test export theme file -->
  <button on:click={onClickExportTheme}>EXPORT</button>
</main>
