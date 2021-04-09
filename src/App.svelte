<script>
    import Home from "./pages/Home.svelte";
    import { Router, Route } from "svelte-routing";
</script>

<Router>
    <Route path="*"><Home /></Route>
</Router>

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
