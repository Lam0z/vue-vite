<script setup>
import { ref } from "vue";
import { useMoviesStore } from "@/stores/counter";
import Films from "../components/Films.vue";
import TheLayout from "../components/TheLayout.vue";
import { FILMS } from "@/constants";

const moviesStore = useMoviesStore();
const filmQuery = ref("spider");
const getFilms = () => {
    moviesStore.getFilms(filmQuery.value);
};
const filmId = (id) => {
    moviesStore.getFilmId(id);
};
</script>

<template>
    <the-layout>
        <Films
            :films="moviesStore.films"
            v-model="filmQuery"
            @get-movies="getFilms"
            @get-movie-id="filmId"
        />
    </the-layout>
</template>
