<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import { useStore } from "@/stores";
const store = useStore();
</script>

<template>
    <nav
        class="position-fixed bottom-0 w-100 bg-white d-flex justify-content-center"
    >
        <RouterLink to="/" class="px-1">Home</RouterLink>
        <RouterLink to="/about" class="px-1">About</RouterLink>
    </nav>
    <RouterView />

    <div class="store">{{ store.hello }}</div>
</template>

<style scoped></style>
