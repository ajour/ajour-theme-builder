<script>
    import { theme } from "../theme";
</script>

<div id="gui" style="--theme-background: {$theme.palette.base.background}">
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
        <div id="gui-menu" class="" />
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
        background-color: var(--theme-background);
    }

    #gui-titlebar {
        height: 30px;
        background-color: #000000;
    }

    #gui-menu {
        height: 50px;
        background-color: #1c1c1c;
    }
</style>
