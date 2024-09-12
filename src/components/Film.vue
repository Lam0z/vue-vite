<script setup>
import { useMoviesStore } from "@/stores/counter";
const moviesStore = useMoviesStore();
const props = defineProps({
    film: {
        type: Object,
    },
    filmId: {
        type: Number,
    },
});
import { FILM } from "@/constants";
import { useRoute } from "vue-router";
import { ref } from "vue";
</script>
<template>
    <section
        class="film"
        :style="`background-image:url(${film.backdrop?.url})`"
    >
        <div class="container">
            <div class="film__container">
                <div class="film__preview">
                    <img :src="film.poster.url" alt="" />
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
                        <div v-for="country in film.countries">
                            {{ country.name }}
                        </div>
                    </div>
                    <div class="film__info-item film__rating">
                        <span>Премьера:</span>
                        <span>{{ film.premiere.world.split("T")[0] }}</span>
                    </div>
                    <div class="film__info-item film__rating">
                        <span>Возрастной рейтинг: </span
                        ><span>{{ film.ageRating }}+</span>
                    </div>
                    <div class="film__description">{{ film.description }}</div>
                </div>
            </div>
        </div>
    </section>
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
        img {
            border-radius: 1rem;
        }
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

    &__description {
        line-height: 1.5;
    }
}
</style>
