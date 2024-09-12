import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { API_FILMS, API_FILM, API_HEADERS_OPTIONS } from "@/constants";

export const useMoviesStore = defineStore("moviesStore", () => {
    const films = ref([]);
    const film = ref({});
    const filmId = ref(0);

    const getFilmId = (id) => {
        filmId.value = id;
    };
    async function getFilms(query) {
        const res = await fetch(`${API_FILMS}${query}`, API_HEADERS_OPTIONS);
        const data = await res.json();
        films.value = data.docs;
    }
    async function getFilm(id) {
        const res = await fetch(`${API_FILM}${id}`, API_HEADERS_OPTIONS);
        const data = await res.json();
        film.value = data;
    }
    return { films, film, filmId, getFilmId, getFilm, getFilms };
});
