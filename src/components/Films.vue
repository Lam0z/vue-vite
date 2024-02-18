<script setup>
const props = defineProps({
    films: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <div class="films">
        <div class="films__list">
            <a v-for="item in films.docs" :key="item.id" class="films__item">
                <div class="films__poster">
                    <img
                        :src="item.poster.url"
                        :alt="item.name"
                        class="films__item-img"
                    />
                    <div class="films__description">
                        <p class="films__rating">{{ item.rating.imdb }}</p>
                        <p class="films__info">
                            {{ item.countries[0].name }},

                            <span
                                v-for="(genre, idx) in item.genres"
                                :key="idx"
                            >
                                {{ genre.name
                                }}<template v-if="idx != item.genres.length - 1"
                                    >,
                                </template>
                            </span>
                        </p>
                        <p class="films__duration">144 мин.</p>
                    </div>
                </div>
                <div class="films__descr">
                    <p class="films__name">{{ item.name }}</p>
                    <p class="films__type">{{ item.type }}</p>
                </div>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/main";
.films {
    &__list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        @media (min-width: 576px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 768px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media (min-width: 992px) {
            grid-template-columns: repeat(5, 1fr);
        }
        @media (min-width: 1200px) {
            grid-template-columns: repeat(6, 1fr);
        }
        @media (min-width: 1400px) {
            grid-template-columns: repeat(7, 1fr);
        }
    }

    &__item {
        &:hover {
            cursor: pointer;
            .films__description {
                background: transparentize($bg-main, 0.5);
                opacity: 1;
            }
            .films__poster {
                transform: scale(1.05);
            }
        }
    }

    &__poster {
        position: relative;
        transition: all 0.3s ease;
    }

    &__item-img {
        border-radius: 1.5rem;
    }
    &__description {
        font-size: 0.7rem;
        position: absolute;
        height: 100%;
        inset: 0;
        display: flex;
        padding: 10px;
        flex-direction: column;
        justify-content: end;
        opacity: 0;
        border-radius: 1.5rem;
    }
    &__rating {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.7rem;
    }
    &__info {
        // max-height: 2rem;
        // overflow: hidden;
        // text-overflow: ellipsis;
        margin-bottom: 0.5rem;
    }
    &__descr {
        margin-top: 0.5rem;
    }

    &__name {
        font-size: 0.8rem;
        font-weight: bold;
    }

    &__type {
        font-size: 0.7rem;
    }
}
</style>
