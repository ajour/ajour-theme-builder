<script lang="ts">
  import { theme } from '$lib/theme'
  import './Colors.scss'
</script>

<div class="grid-theme-container">
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
