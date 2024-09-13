<script setup>
const props = defineProps({
    films: {
        type: Array,
    },
});
// console.log(props.films);
</script>
<template>
    <section class="my-films">
        <div class="container">
            <div class="my-films__list">
                <div
                    v-for="(item, idx) in films"
                    :key="item.id"
                    class="my-films__item"
                >
                    <span class="my-films__counter">{{ ++idx }}</span>
                    <img
                        :src="item.poster.url"
                        alt=""
                        class="my-films__poster"
                    />
                    <div class="my-films__info">
                        <div class="my-films__name">{{ item.name }}</div>
                        <div class="my-films__description">
                            {{ item.description }}
                        </div>
                    </div>
                    <div class="my-films__controls">
                        <button class="my-films__btn my-films__remove">
                            {{ !item.isWatch ? "Watched" : "Watch" }}
                        </button>
                        <button class="my-films__btn my-films__btn--remove">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
}
.my-films {
    padding: 2rem 0;
    &__list {
        display: grid;
        align-items: center;
        // grid-template-columns: repeat(1, 1fr);
    }
    &__item {
        display: grid;
        align-items: center;
        column-gap: 1rem;
        grid-template-columns: 1rem 100px 3fr 100px;
        border: 1px solid var(--text-color);
        padding: 1rem;
        border-radius: 1rem;
        transition: var(--transition);
        &:hover {
            border: 1px solid transparent;
            box-shadow: 0px 0px 1rem var(--text-color);
            .my-films__counter {
                font-weight: bold;
                color: var(--title-color);
            }
            .my-films__name {
                color: var(--title-color);
            }
            .my-films__poster {
                transform: scale(123%);
            }
        }
    }
    &__poster {
        transition: var(--transition);
        max-width: 100px;
        // max-height: 200px;
    }
    &__info {
    }

    &__name {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    &__description {
    }

    &__controls {
        display: flex;
        flex-direction: column;
        // flex-wrap: wrap;
        justify-content: center;
        button {
            // flex-grow: 1;
            justify-self: center;
            margin-bottom: 0.5rem;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    &__remove {
    }
    &__btn {
        // margin-top: 1rem;
        display: block;
        width: 100%;
        background: var(--title-color);
        outline: none;
        border: none;
        padding: 0.5rem;
        color: var(--color);
        text-transform: uppercase;
        font-family: inherit;
        border-radius: 0.5rem;
        transition: var(--transition);
        &--remove {
            background: #f54b4b;
        }
        &:hover {
            opacity: 0.8;
        }
    }
}
</style>
