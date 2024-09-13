<script setup>
import { ref } from "vue";
import { useMoviesStore } from "@/stores/counter";
import Films from "../components/Films.vue";
import TheLayout from "../components/TheLayout.vue";
import { FILMS } from "@/constants";

const moviesStore = useMoviesStore();
const filmQuery = ref("тачки");
const getFilms = () => {
    moviesStore.getFilms(filmQuery.value);
    console.log(moviesStore.querryError);
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
            :error="moviesStore.querryError"
            @get-movies="getFilms"
            @get-movie-id="filmId"
        />
    </the-layout>
</template>
