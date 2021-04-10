<script>
  import { theme } from '../theme'
</script>

<div id="gui" style="background-color: {$theme.palette.base.background}">
  <div id="gui-titlebar" class="flex flex-row">
    <div class="flex-none">
      <img src="images/titlebar-left.png" alt="" />
    </div>
    <div class="flex-grow" />
    <div class="flex-none">
      <img src="images/titlebar-right.png" alt="" />
    </div>
  </div>
  <div id="gui-window" class="">
    <div id="gui-menu" class="flex flex-row items-center">
      <div
        id="gui-menu-flavor"
        class="flex flex-row"
        style="border-color: {$theme.palette.bright.primary}{50}"
      >
        <p
          class="font-semibold text-sm self-center"
          style="color: {$theme.palette.bright.primary}{'FF'}"
        >
          Retail
        </p>

        <div class="flex-grow" />
        <p
          class="font-semibold text-xs self-center"
          style="color: {$theme.palette.bright.primary}{'FF'}"
        >
          ▼
        </p>
      </div>
      <div id="gui-menu-mode1" />
      <div id="gui-menu-mode2" />
      <div class="flex-grow" />
      <div id="gui-menu-version" />
      <div id="gui-menu-about-settings" />
    </div>
    <div id="gui-myadons">
      <div id="gui-myaddons-menu" />
      <div id="gui-table">
        <div id="gui-table-header" />
        <div id="gui-table-body" />
      </div>
    </div>
  </div>
</div>

<style>
  #gui {
    width: 900px;
    height: 650px;
  }

  #gui-titlebar {
    height: 30px;
    background-color: #000000;
  }

  #gui-menu {
    height: 50px;
    background-color: #1c1c1c;
  }

  #gui-menu-flavor {
    width: 94px;
    height: 28px;
    border-radius: 0.125rem;
    border-width: 1px;
    margin-left: 10px;
    padding-left: 4px;
    padding-right: 8px;
  }
</style>
