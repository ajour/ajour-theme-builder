<script lang="ts">
  import { theme } from '$lib/theme'

  const addons = [
    {
      title: 'Deadly Boss Mods (DBM)',
      local: '9.0.25',
      remote: '9.0.25',
      gameVersion: '9.0.5',
      source: 'CurseForge',
      latest: '1 week ago',
      status: '',
    },
    {
      title: 'Venture Plan',
      local: '4.14a',
      remote: '4.14c',
      gameVersion: '9.0.5',
      source: 'TownlongYak',
      latest: '1 day ago',
      status: 'Update',
    },
  ]
</script>

<div
  class="gui"
  style="background-color: {$theme.palette.base.background}"
  unselectable={true}
>
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
      <table>
        <tr>
          <th style="color: {$theme.palette.bright.surface}"> Addon </th>
          <th style="color: {$theme.palette.bright.surface}">
            Local version
          </th>
          <th style="color: {$theme.palette.bright.surface}">
            Latest version
          </th>
          <th style="color: {$theme.palette.bright.surface}"> Game Version </th>
          <th style="color: {$theme.palette.bright.surface}"> Source </th>
          <th style="color: {$theme.palette.bright.surface}">
            Latest Release
          </th>
          <th style="color: {$theme.palette.bright.primary}"> Status ▼ </th>
        </tr>
        {#each addons as { title, local, remote, gameVersion, source, latest, status }}
          <tr>
            <td
              style="background-color: {$theme.palette.base
                .foreground}{'FF'}; color: {$theme.palette.bright
                .surface}{'FF'}; "
            >
              {title}
            </td>
            <td
              style="background-color: {$theme.palette.base
                .foreground}{'FF'}; color: {$theme.palette.normal
                .surface}{'FF'}; ">{local}</td
            >
            <td
              style="background-color: {$theme.palette.base
                .foreground}{'FF'}; color: {$theme.palette.normal
                .surface}{'FF'}; ">{remote}</td
            >
            <td
              style="background-color: {$theme.palette.base
                .foreground}{'FF'}; color: {$theme.palette.normal
                .surface}{'FF'}; ">{gameVersion}</td
            >
            <td
              style="background-color: {$theme.palette.base
                .foreground}{'FF'}; color: {$theme.palette.normal
                .surface}{'FF'}; ">{source}</td
            >
            <td
              style="background-color: {$theme.palette.base
                .foreground}{'FF'}; color: {$theme.palette.normal
                .surface}{'FF'}; ">{latest}</td
            >
            <td
              style="background-color: {$theme.palette.base
                .foreground}{'FF'}; color: {$theme.palette.bright
                .secondary}{'FF'}; ">{status}</td
            >
          </tr>
          <div
            class="table-row-gap"
            style="background-color: {$theme.palette.base.background}{'FF'};"
          />
        {/each}
      </table>
    </div>
  </div>
</div>

<style lang="scss">
  * {
    font-weight: 600;
  }

  .gui {
    width: 900px;
    height: 650px;

    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
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
    width: 250px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    text-align: left;
    height: 30px;
  }

  td {
    height: 26px;
  }

  .table-row-gap {
    height: 1px;
  }
</style>
