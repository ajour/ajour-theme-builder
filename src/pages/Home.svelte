<script>
    import { onMount } from "svelte";
    import Gui from "../components/Gui.svelte";
    import { theme, defaultTheme } from "../theme";

    $: inputTheme = defaultTheme;

    const onColorInput = () => {
        theme.update((theme) => {
            theme = inputTheme;
            return theme;
        });
    };

    const exportTheme = () => {
        const jsonTheme = JSON.stringify($theme, null, 2);

        const elem = document.createElement("a");
        elem.setAttribute(
            "href",
            "data:application/json;charset=utf-8," +
                encodeURIComponent(jsonTheme)
        );
        elem.setAttribute("download", "ajour-custom-theme.json");
        elem.style.display = "none";

        document.body.appendChild(elem);

        elem.click();

        document.body.removeChild(elem);
    };

    onMount(async () => {
        history.replaceState({}, "", "/");
    });
</script>

<main class="h-screen flex flex-col items-center">
    <Gui />
    <div class="my-4" />
    <!-- test input / reactive css color -->
    <p>Background color: {inputTheme.palette.base.background}</p>
    <input
        type="color"
        bind:value={inputTheme.palette.base.background}
        style="height: 50px;"
        on:input={onColorInput}
    />
    <div class="my-4" />
    <!-- test export theme file -->
    <button on:click={exportTheme}>EXPORT</button>
</main>
