<script setup>
import { useMoviesStore } from "@/stores/counter";
import pl from "@/assets/img/pl.jpg";
import { ref } from "vue";
const emit = defineEmits(["addWatch"]);
const moviesStore = useMoviesStore();
const props = defineProps({
    film: {
        type: Object,
    },
    filmId: {
        type: Number,
    },
    error: {
        type: String,
    },
});

const addToWatch = (id) => {
    emit("addWatch", id);
};
</script>
<template>
    <section
        class="film"
        :style="[`background-image:url(${film.backdrop.url})`]"
        v-if="!error"
    >
        <div class="container">
            <div class="film__container">
                <div class="film__preview">
                    <img :src="film.poster.url" alt="" v-if="film.poster.url" />
                    <img :src="pl" alt="" v-else />
                    <button
                        class="film__preview-btn"
                        @click="addToWatch(film.id)"
                    >
                        <span> Watch </span>
                    </button>
                </div>
                <div class="film__info">
                    <div class="film__name">
                        {{ film.name }}
                    </div>
                    <div class="film__rating">
                        Рейтинг IMDB: {{ film.rating.imdb }}
                    </div>
                    <div class="film__info-item film__year">
                        <span>Год производства: </span
                        ><span>{{ film.year }}</span>
                    </div>
                    <div class="film__info-item film__countries">
                        <span>Страны: </span>
                        <div>
                            <div
                                v-for="country in film.countries"
                                class="film__countrie"
                            >
                                {{ country.name }}
                            </div>
                        </div>
                    </div>
                    <!-- <div
                        class="film__info-item film__rating"
                        v-if="film.premiere.country"
                    >
                        <span>Премьера:</span>
                        <span v-if="film.premiere.world">{{
                            film.premiere.world.split("T")[0]
                        }}</span>
                        <span v-else="film.premiere.russia">{{
                            film.premiere.russia.split("T")[0]
                        }}</span>
                    </div> -->
                    <div class="film__info-item film__rating">
                        <span>Возрастной рейтинг: </span
                        ><span>{{ film.ageRating }}+</span>
                    </div>
                    <div class="film__description">{{ film.description }}</div>
                </div>
            </div>
        </div>
    </section>
    <div class="container container--error" v-else>
        <div class="message">
            <div>{{ error }}</div>
            <span class="loader"></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.film {
    width: 100%;
    padding: 2rem 0;
    background-size: cover;
    display: flex;
    align-items: center;
    &__container {
        padding: 1rem;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 1rem;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        row-gap: 1rem;
        @media (min-width: 768px) {
            column-gap: 1rem;
            grid-template-columns: 2fr 3fr;
        }
    }

    &__preview {
        display: flex;
        flex-direction: column;
        img {
            height: 100%;
            border-radius: 1rem;
        }
    }
    &__preview-btn {
        margin-top: 1rem;
        display: block;
        width: 100%;
        background: var(--title-color);
        outline: none;
        border: none;
        padding: 1rem;
        color: var(--color);
        text-transform: uppercase;
        font-family: inherit;
        border-radius: 0.5rem;
    }
    &__info {
        display: grid;
        row-gap: 1rem;
        @media (min-width: 768px) {
            font-size: 1.2rem;
            line-height: 1.2rem;
        }
    }
    &__info-item {
        display: flex;
        justify-content: space-between;
        background-color: #eef5ff;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        padding: 1rem;
        &:hover {
            color: var(--color);
            background: var(--title-color);
        }
    }

    &__name {
        line-height: 2rem;
        font-size: 2rem;
        font-weight: bold;
    }

    &__rating {
    }

    &__year {
    }

    &__countries {
    }
    &__countrie {
        margin-bottom: 0.5rem;
        &:last-child {
            margin-bottom: 0;
        }
    }

    &__description {
        line-height: 1.5;
    }
}
</style>
