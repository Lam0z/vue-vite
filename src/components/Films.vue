<script setup>
const emit = defineEmits(["getMovies", "getMovieId"]);
const film = defineModel();
import pl from "@/assets/img/pl.jpg";
const props = defineProps({
    films: {
        type: Object,
    },
    error: {
        type: String,
    },
});
const getMovie = (e) => {
    emit("getMovies");
};
const getId = (id) => {
    emit("getMovieId", id);
};
</script>
<template>
    <section class="films">
        <div class="films__search">
            <input type="text" class="films__search-input" v-model="film" />
            <button class="films__search-btn" @click="getMovie">Search</button>
        </div>

        <div class="container films__container" v-if="!error">
            <RouterLink
                :to="`/film/${item.id}`"
                v-for="(item, key) in films"
                :key="item.id"
                class="films__item"
                :style="[
                    item.poster.url
                        ? `background-image:url(${item.poster.url})`
                        : `background-image:url(${pl})`,
                ]"
                @click="getId(item.id)"
            >
                <div
                    v-if="item.rating.imdb != 0"
                    class="films__rating"
                    :class="{
                        'films__rating--success': item.rating.imdb > 7,
                    }"
                >
                    IMDB: {{ item.rating.imdb }}
                </div>
                <div class="films__info">
                    <div class="films__name">{{ item.name }}</div>
                </div>
            </RouterLink>
        </div>

        <div class="container container--error" v-else>
            <div class="message">
                <div>{{ error }}</div>
                <span class="loader"></span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.films {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &__container {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 200px;
        gap: 0.5rem;

        @media (min-width: 576px) {
            grid-auto-rows: 25rem;
        }
        @media (min-width: 768px) {
            grid-auto-rows: 31.25rem;
        }
        @media (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 37.5rem;
        }
    }
    &__search {
        width: 100%;
        max-width: 31.25rem;
        margin: 2rem auto;
        position: relative;
    }
    &__search-input {
        width: 100%;
        padding: 0.5rem;
        display: block;
        border-radius: 1rem;
        font-size: 1rem;
        color: var(--text-color);
        border: 1px solid var(--text-color);
        padding-right: 5rem;
        &:hover,
        &:active,
        &:focus-visible,
        &:focus {
            border: 1px solid var(--text-color);
        }
    }
    &__search-btn {
        position: absolute;
        top: 50%;
        right: 0;
        padding: 0.5rem;
        border-radius: 1rem;
        font-size: 1rem;
        background: var(--title-color);
        color: var(--color);
        font-family: inherit;
        border: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        transform: translateY(-50%);
        transition: var(--transition);
        &:hover {
            opacity: 0.9;
        }
    }
    &__item {
        // min-height: 600px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: relative;
        transition: var(--transition);
        &:hover {
            // background-size: 105% 105%;
        }
        &:hover .films__info {
            display: flex;
            top: 0;
        }
        &:hover .films__rating {
            display: none;
        }
    }
    &__info {
        display: none;
        top: 80%;
        width: 100%;
        height: 100%;
        position: absolute;
        flex-direction: column;
        justify-content: space-between;
        transition: var(--transition);
        &:hover {
            background: transparentize(#336cfb, 0.5);
            color: var(--color);
            // backdrop-filter: brightness(150%);
        }
    }
    &__rating {
        display: inline-block;
        background: var(--text-color);
        color: var(--color);
        padding: 0.5rem;
        // background:
        align-self: start;
        margin: 1rem;
        &--success {
            background: var(--color-success);
        }
    }
    &__name {
        margin-top: auto;
        padding: 1rem;
        background: var(--title-color);
    }

    &__description {
    }
}
</style>
