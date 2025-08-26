<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
const {quisQuestionsLength,correctAnswer} = defineProps([
    'quisQuestionsLength','correctAnswer',
])
</script>

<template>
    <section class="result">
        <p>scores</p>
        <h1>{{ correctAnswer}} / {{ quisQuestionsLength }}</h1>
        <router-link to="/">Go back</router-link>
    </section>
</template>

<style scoped>
.result{
    text-align: center;
    padding: 100px 0;
}
h1{
    font-size: 50px;
}
</style>