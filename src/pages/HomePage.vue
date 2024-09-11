<script setup>
import { ref } from "vue";
import { FILMS } from "@/constants";

import MyComponent from "../components/MyComponent.vue";
import TheLayout from "../components/TheLayout.vue";

// const films = ref({});

// async function getData(target) {
//     const response = await fetch(api, options);
//     const data = await response.json();
//     films.value = data.docs;
//     console.log(data);
// }
</script>

<template>
    <the-layout>
        <MyComponent :films="FILMS" />
    </the-layout>
</template>
