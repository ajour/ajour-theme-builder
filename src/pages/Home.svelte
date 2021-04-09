<script>
    import Gui from "../components/Gui.svelte";
    import { theme, defaultTheme } from "../theme";

    $: inputTheme = defaultTheme;

    const onColorInput = () => {
        theme.update((theme) => {
            theme = inputTheme;
            return theme;
        });
    };
</script>

<main class="h-screen flex flex-col items-center">
    <Gui />
    <div class="my-4" />
    <!-- test input / reactive css color -->
    <p>Background color: {inputTheme.background}</p>
    <input
        type="color"
        bind:value={inputTheme.background}
        style="height: 50px;"
        on:input={onColorInput}
    />
</main>
