<script setup>
const props = defineProps({
    film: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <div class="film">
        <div class="film__constrols">
            <a href="#" class="film__controls-link">Back</a>
        </div>
    </div>
</template>

<style lang="scss"></style>
