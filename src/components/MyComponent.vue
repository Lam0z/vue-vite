<script setup>
const emit = defineEmits(["getMovies"]);
const props = defineProps({
    films: {
        type: Object,
    },
});
const getMovie = (e) => {
    emit("getMovies", e.target);
};
</script>
<template>
    <section>
        <button @click="getMovie">Get data</button>
        <div class="films">
            <div
                v-for="(item, key) in films"
                :key="item.id"
                class="films__item"
            >
                <RouterLink :to="`/film/${item.id}`"
                    ><img :src="item.poster.url" :alt="item.id"
                /></RouterLink>
                <!-- <div class="films__name">{{ item.name }}</div>
                <div class="films__description">{{ item.description }}</div> -->
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.films {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    &__item {
    }

    &__name {
    }

    &__description {
    }
}
</style>
