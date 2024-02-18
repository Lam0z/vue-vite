<script setup>
import { ref, computed } from "vue";

import TheLayout from "@/components/TheLayout.vue";
import Films from "@/components/Films.vue";

import { FILM, FILMS } from "@/constants/film";
const film = FILM;
const loader = ref(false);
const show = ref(false);
</script>
<template>
    <the-layout>
        <Films :films="FILMS" />
    </the-layout>
</template>

<style lang="scss">
.contant {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.photos-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
.loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #fff;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}
.loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-left: 4px solid #ff3d00;
    border-bottom: 4px solid transparent;
    animation: rotation 0.5s linear infinite reverse;
}
@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
