<script setup>
import { FILMS } from "@/constants";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const idFilm = route.path.split("/").pop();

const film = ref(FILMS.filter((i) => i.id == idFilm)[0]);
console.log(film.value);
</script>
<template>
    <div v-if="film">
        <div><img :src="film.poster.url" alt="" /></div>
    </div>
</template>

<style lang="scss" scoped></style>
