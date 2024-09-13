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
moviesStore.getFilm(id.value);

const addWatchFilm = (id) => {
    if (moviesStore.favorFilms.find((i) => i.id === id)) return;
    moviesStore.favorFilms.push({ ...moviesStore.film, isWatch: false });
};
</script>

<template>
    <the-layout>
        <Film
            :film="moviesStore.film"
            :error="moviesStore.querryError"
            @add-watch="addWatchFilm"
        />
    </the-layout>
</template>
