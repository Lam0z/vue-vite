<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
    <nav
        class="position-fixed bottom-0 w-100 bg-white d-flex justify-content-center"
    >
        <RouterLink to="/" class="px-1">Home</RouterLink>
        <RouterLink to="/about" class="px-1">About</RouterLink>
    </nav>
    <RouterView />
</template>

<style scoped></style>
