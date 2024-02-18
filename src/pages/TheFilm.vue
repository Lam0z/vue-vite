<script setup>
import TheLayout from "../components/TheLayout.vue";
import Film from "../components/Film.vue";

import { FILM } from "@/constants/film";
</script>
<template>
    <the-layout> <Film :film="FILM" /> </the-layout>
</template>

<style lang="scss"></style>
