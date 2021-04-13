<script lang="ts">
  import { theme } from '$lib/theme'
  import './Gui.scss'

  const addons = [
    {
      title: 'Deadly Boss Mods (DBM)',
      local: '9.0.25',
      remote: '9.0.25',
      gameVersion: '9.0.5',
      source: 'CurseForge',
      latest: '1 week ago',
      status: '',
      isExpanded: false,
    },
    {
      title: 'Venture Plan',
      local: '4.14a',
      remote: '4.14c',
      gameVersion: '9.0.5',
      source: 'TownlongYak',
      latest: '1 day ago',
      status: 'Update',
      isExpanded: false,
    },
    {
      title: 'WeakAuras',
      local: '3.2.3',
      remote: '3.2.3',
      gameVersion: '9.0.5',
      source: 'CurseForge',
      latest: '1 day ago',
      status: 'Update',
      isExpanded: true,
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
  <div>
    <div class="gui-menu">
      <div
        class="gui-menu-flavor"
        style="border-color: {$theme.palette.bright.primary}{32}"
      >
        <p style="color: {$theme.palette.bright.primary}">Retail</p>
        <p style="color: {$theme.palette.bright.primary}">▼</p>
      </div>
      <div
        class="gui-menu-segmented "
        style="border-color: {$theme.palette.bright.primary}{32}"
      >
        <div
          class="gui-menu-segmented-button gui-menu-segmented-button-active"
          style="color: {$theme.palette.bright
            .primary}; background-color: {$theme.palette.bright.primary}{32}"
        >
          <p>My Addons</p>
        </div>
        <div
          class="gui-menu-segmented-button"
          style="color: {$theme.palette.bright.primary}"
        >
          <p>Wago</p>
        </div>
      </div>
      <div
        class="gui-menu-segmented"
        style="border-color: {$theme.palette.bright.primary}{32}"
      >
        <div
          class="gui-menu-segmented-button"
          style="color: {$theme.palette.bright.primary}"
        >
          <p>Catalog</p>
        </div>
        <div
          class="gui-menu-segmented-button"
          style="color: {$theme.palette.bright.primary}"
        >
          <p>Install from URL</p>
        </div>
      </div>
      <div class="gui-menu-grow" />
      <div class="gui-menu-version">
        <p style="color: {$theme.palette.normal.surface}">1.1.0</p>
      </div>
      <div
        class="gui-menu-segmented"
        style="border-color: {$theme.palette.bright.primary}{32}"
      >
        <div
          class="gui-menu-segmented-button"
          style="color: {$theme.palette.bright.primary}"
        >
          <p>About</p>
        </div>
        <div
          class="gui-menu-segmented-button"
          style="color: {$theme.palette.bright.primary}"
        >
          <p>Settings</p>
        </div>
      </div>
    </div>
    <div class="gui-addon-content">
      <div class="gui-addon-menu">
        <div
          class="gui-addon-content-refresh"
          style="color: {$theme.palette.bright.primary}"
        >
          Refresh
        </div>
        <div
          class="gui-addon-content-update-all"
          style="color: {$theme.palette.bright.primary}"
        >
          Update All
        </div>
        <div
          class="gui-addon-content-addons-loaded"
          style="color: {$theme.palette.normal.surface}"
        >
          14 retail addons loaded
        </div>
        <div
          class="gui-addon-content-search-container"
          style="background-color: {$theme.palette.base.foreground}"
        >
          <div
            class="gui-addon-content-search-text"
            style="color: {$theme.palette.normal.surface}"
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
        {#each addons as { title, local, remote, gameVersion, source, latest, status, isExpanded }}
          <tr>
            <td
              style="background-color: {$theme.palette.base
                .foreground}; color: {isExpanded
                ? $theme.palette.bright.primary
                : $theme.palette.bright.surface}; "
            >
              {title}
            </td>
            <td
              style="background-color: {$theme.palette.base
                .foreground}; color: {$theme.palette.normal.surface}; "
              >{local}</td
            >
            <td
              style="background-color: {$theme.palette.base
                .foreground}; color: {$theme.palette.normal.surface}; "
              >{remote}</td
            >
            <td
              style="background-color: {$theme.palette.base
                .foreground}; color: {$theme.palette.normal.surface}; "
              >{gameVersion}</td
            >
            <td
              style="background-color: {$theme.palette.base
                .foreground}; color: {$theme.palette.normal.surface}; "
              >{source}</td
            >
            <td
              style="background-color: {$theme.palette.base
                .foreground}; color: {$theme.palette.normal.surface}; "
              >{latest}</td
            >
            <td
              style="background-color: {$theme.palette.base
                .foreground}; color: {$theme.palette.bright.secondary}; "
              >{status}</td
            >
          </tr>
          <div
            class="table-row-gap"
            style="background-color: {$theme.palette.base.background};"
          />
          {#if isExpanded}
            <tr
              style="background-color: {$theme.palette.base.foreground}{'CC'}"
            >
              <td colspan="7">
                <div class="expanded-row">
                  <div>
                    <p style="color: {$theme.palette.bright.surface}">
                      Author(s)
                    </p>
                    <p style="color: {$theme.palette.normal.surface}">
                      The WeakAuras Team
                    </p>
                  </div>
                  <div>
                    <p style="color: {$theme.palette.bright.surface}">
                      Summary
                    </p>
                    <p style="color: {$theme.palette.normal.surface}">
                      A powerful, comprehensive utility for displaying graphics
                      and information based on buffs, debuffs, and other
                      triggers
                    </p>
                  </div>
                  <div>
                    <p style="color: {$theme.palette.bright.surface}">
                      Release channel
                    </p>
                  </div>
                  <div class="expanded-row-grow" />
                  <div class="expanded-row-buttons">
                    <div>
                      <p style="color: {$theme.palette.bright.primary}">
                        Website
                      </p>
                    </div>
                    <div>
                      <p style="color: {$theme.palette.bright.primary}">
                        Changelog
                      </p>
                    </div>
                    <div>
                      <p style="color: {$theme.palette.bright.primary}">
                        Exclude
                      </p>
                    </div>
                    <div>
                      <p style="color: {$theme.palette.bright.error}">Delete</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          {/if}
        {/each}
      </table>
    </div>
  </div>
</div>
