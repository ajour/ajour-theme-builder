<script lang="ts">
  import { theme, allThemes, resetTheme } from '$lib/theme'
  import './Options.scss'
  import { updateThemeUrlParams } from './util'

  $: selectedTheme = null

  const onTemplateChange = () => {
    resetTheme(selectedTheme)
    updateThemeUrlParams($theme)
  }

  const onNameChange = () => {
    updateThemeUrlParams($theme)
  }
</script>

<div class="grid-options-container">
  <div class="theme-template-select">
    <!-- svelte-ignore a11y-no-onchange -->
    <select
      class="theme-select"
      bind:value={selectedTheme}
      on:change={onTemplateChange}
    >
      <option value={null}>-- Select a template --</option>
      {#each allThemes() as theme}
        <option value={theme.name}>
          {theme.name}
        </option>
      {/each}
    </select>
  </div>
  <div class="theme-name-input">
    <input
      class="name-input"
      type="text"
      bind:value={$theme.name}
      on:change={onNameChange}
    />
  </div>
</div>
