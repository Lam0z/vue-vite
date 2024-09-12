<script setup>
import { ref } from "vue";
import { FILMS } from "@/constants";
import { useRoute } from "vue-router";
import Film from "../components/Film.vue";
import TheLayout from "../components/TheLayout.vue";

import { useMoviesStore } from "@/stores/counter";
const moviesStore = useMoviesStore();
const route = useRoute();

const id = ref(route.path.split("/").pop());
// console.log();
moviesStore.getFilm(id.value);
</script>

<template>
    <the-layout>
        <Film :film="moviesStore.film" />
    </the-layout>
</template>
