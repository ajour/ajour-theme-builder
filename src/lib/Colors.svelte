<script lang="ts">
  import { theme } from '$lib/theme'
  import './Colors.scss'
  import { updateThemeUrlParams } from './util'

  const onColorChange = () => {
    updateThemeUrlParams($theme)
  }
</script>

<div class="grid-theme-container">
  <div class="base-theme-colors">Base</div>
  <div class="normal-theme-colors">Normal</div>
  <div class="bright-theme-colors">Bright</div>
  <div class="base-foreground">
    <input
      type="color"
      bind:value={$theme.palette.base.foreground}
      on:change={onColorChange}
    />
  </div>
  <div class="base-background">
    <input
      type="color"
      bind:value={$theme.palette.base.background}
      on:change={onColorChange}
    />
  </div>
  <div class="normal-primary">
    <input
      type="color"
      bind:value={$theme.palette.normal.primary}
      on:change={onColorChange}
    />
  </div>
  <div class="normal-secondary">
    <input
      type="color"
      bind:value={$theme.palette.normal.secondary}
      on:change={onColorChange}
    />
  </div>
  <div class="normal-surface">
    <input
      type="color"
      bind:value={$theme.palette.normal.surface}
      on:change={onColorChange}
    />
  </div>
  <div class="normal-error">
    <input
      type="color"
      bind:value={$theme.palette.normal.error}
      on:change={onColorChange}
    />
  </div>
  <div class="bright-primary">
    <input
      type="color"
      bind:value={$theme.palette.bright.primary}
      on:change={onColorChange}
    />
  </div>
  <div class="bright-secondary">
    <input
      type="color"
      bind:value={$theme.palette.bright.secondary}
      on:change={onColorChange}
    />
  </div>
  <div class="bright-surface">
    <input
      type="color"
      bind:value={$theme.palette.bright.surface}
      on:change={onColorChange}
    />
  </div>
  <div class="bright-error">
    <input
      type="color"
      bind:value={$theme.palette.bright.error}
      on:change={onColorChange}
    />
  </div>
</div>
