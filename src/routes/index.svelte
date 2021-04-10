<script lang="ts">
  import Gui from '$lib/Gui.svelte'
  import { theme, defaultTheme } from '$lib/theme'

  $: inputTheme = defaultTheme

  const onColorInput = () => {
    theme.update((theme) => {
      theme = inputTheme
      return theme
    })
  }

  const exportTheme = () => {
    const jsonTheme = JSON.stringify($theme, null, 2)

    const elem = document.createElement('a')
    elem.setAttribute(
      'href',
      'data:application/json;charset=utf-8,' + encodeURIComponent(jsonTheme)
    )
    elem.setAttribute('download', 'ajour-custom-theme.json')
    elem.style.display = 'none'

    document.body.appendChild(elem)

    elem.click()

    document.body.removeChild(elem)
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
  <button on:click={exportTheme}>EXPORT</button>
</main>
