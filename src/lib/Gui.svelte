<script lang="ts">
  import { theme } from '$lib/theme'

  const addons = [{ title: 'bigwigs' }, { title: 'hekili' }, { title: 'DBM' }]
</script>

<div class="gui" style="background-color: {$theme.palette.base.background}">
  <div class="gui-titlebar-container">
    <img src="images/titlebar-left.png" alt="" />
    <img src="images/titlebar-right.png" alt="" />
  </div>
  <div class="gui-window">
    <div class="gui-menu">
      <div
        class="gui-menu-flavor"
        style="border-color: {$theme.palette.bright.primary}{50}"
      >
        <p style="color: {$theme.palette.bright.primary}{'FF'}">Retail</p>

        <div class="flex-grow" />
        <p style="color: {$theme.palette.bright.primary}{'FF'}">▼</p>
      </div>
    </div>
    <div class="gui-addon-content">
      <div class="gui-addon-menu">
        <div
          class="gui-addon-content-refresh"
          style="color: {$theme.palette.bright.primary}{'FF'}"
        >
          Refresh
        </div>
        <div
          class="gui-addon-content-update-all"
          style="color: {$theme.palette.bright.primary}{'FF'}"
        >
          Update All
        </div>
        <div
          class="gui-addon-content-addons-loaded"
          style="color: {$theme.palette.normal.surface}{'FF'}"
        >
          14 retail addons loaded
        </div>
        <div
          class="gui-addon-content-search-container"
          style="background-color: {$theme.palette.base.foreground}{'FF'}"
        >
          <div
            class="gui-addon-content-search-text"
            style="color: {$theme.palette.normal.surface}{'FF'}"
          >
            Search for an addon...
          </div>
        </div>
      </div>
      <div class="gui-addons">
        <div class="gui-addons-title-row">
          <div
            class="gui-addons-title-cell"
            style="color: {$theme.palette.bright.surface}"
          >
            Addon
          </div>
          <div
            class="gui-addons-title-cell"
            style="color: {$theme.palette.bright.surface}"
          >
            Local version
          </div>
          <div
            class="gui-addons-title-cell"
            style="color: {$theme.palette.bright.surface}"
          >
            Latest version
          </div>
          <div
            class="gui-addons-title-cell"
            style="color: {$theme.palette.bright.surface}"
          >
            Game Version
          </div>
          <div
            class="gui-addons-title-cell"
            style="color: {$theme.palette.bright.surface}"
          >
            Source
          </div>
          <div
            class="gui-addons-title-cell"
            style="color: {$theme.palette.bright.surface}"
          >
            Latest Release
          </div>
          <div
            class="gui-addons-title-cell"
            style="color: {$theme.palette.bright.primary}"
          >
            Status ▼
          </div>
        </div>
        {#each addons as { title }}
          <div
            class="gui-addon"
            style="color: {$theme.palette.bright
              .surface}{'FF'}; background-color: {$theme.palette.base
              .foreground}{'FF'}"
          >
            {title}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .gui {
    width: 900px;
    height: 650px;
  }

  .gui-titlebar-container {
    display: flex;
    justify-content: space-between;
    height: 30px;
    background-color: #000000;
  }

  .gui-menu {
    display: flex;
    align-items: center;
    height: 60px;
    background-color: #1c1c1c;
  }

  .gui-menu-flavor {
    display: flex;
    flex-direction: row;
    width: 94px;
    height: 28px;
    border-radius: 0.125rem;
    border-width: 1px;
    margin-left: 10px;
    padding-left: 4px;
    padding-right: 8px;
  }

  .gui-addon-content {
    display: flex;
    flex-direction: column;
    margin: 0px 12px 12px 12px;
  }

  .gui-addon-menu {
    height: 60px;
    display: flex;
    align-items: center;
  }

  .gui-addon-menu > * + * {
    margin-left: 10px;
  }

  .gui-addon-menu > *:last-child {
    margin-left: auto;
  }

  .gui-addon-content-search-container {
    border-radius: 0.25rem;
    padding: 4px;
    height: 50%;
  }

  .gui-addons {
    display: flex;
    flex-direction: column;
  }

  .gui-addons > * + * {
    margin-top: 1px;
  }

  .gui-addons-title-row {
    height: 30px;
    display: flex;
  }

  .gui-addons-title-cell:first-child {
    flex-grow: 1;
  }

  .gui-addon {
    height: 26px;
  }
</style>
