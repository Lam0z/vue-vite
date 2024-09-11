<script setup>
import { ref } from "vue";
import { FILMS } from "@/constants";

import Film from "../components/Film.vue";
import TheLayout from "../components/TheLayout.vue";
</script>

<template>
    <the-layout>
        <Film />
    </the-layout>
</template>
