<script>
  import { theme } from '../theme'
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
    </div>
  </div>
</div>

<style>
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
    height: 50px;
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
</style>
