import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import { API_FILMS, API_FILM, API_HEADERS_OPTIONS } from "@/constants";

export const useMoviesStore = defineStore("moviesStore", () => {
    const querryError = ref("");
    const films = ref([]);
    const film = ref({});
    const filmId = ref(0);
    const loader = ref(false);
    const favorFilms = ref(
        JSON.parse(localStorage.getItem("favorFilms")) || []
    );

    const getFilmId = (id) => {
        filmId.value = id;
    };
    async function getFilms(query) {
        try {
            const res = await fetch(
                `${API_FILMS}${query}`,
                API_HEADERS_OPTIONS
            );
            const data = await res.json();
            if (data.statusCode != 200) {
                querryError.value = data.message;
            } else {
                films.value = data.docs;
            }
        } catch (err) {
            console.log(err);
        }
    }
    async function getFilm(id) {
        try {
            loader.value = true;
            const res = await fetch(`${API_FILM}${id}`, API_HEADERS_OPTIONS);
            const data = await res.json();

            if (data.statusCode != 200) {
                querryError.value = data.message;
            } else {
                film.value = data;
                loader.value = false;
            }
        } catch (err) {
            console.log(err);
        }
    }
    watch(
        () => favorFilms,
        (state) => {
            localStorage.setItem("favorFilms", JSON.stringify(state));
        }
    );

    return {
        films,
        favorFilms,
        loader,
        film,
        filmId,
        querryError,
        getFilmId,
        getFilm,
        getFilms,
    };
});
