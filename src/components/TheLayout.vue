<script setup>
import Theheader from "./Theheader.vue";
</script>
<template>
    <Theheader />
    <main class="main">
        <div class="container">
            <slot></slot>
        </div>
    </main>
</template>

<style lang="scss">
// @import "@/assets/styles/main.css";
.main {
    padding: 20px 0;
    min-height: 100vh;
    &__wrapper {
        display: flex;
    }
    &__aside {
        width: 100%;
        max-width: 250px;
        background: var(--accent);
        display: none;
        @media (min-width: 992px) {
            display: block;
        }
    }
    &__content {
        width: 100%;
    }
}
</style>
