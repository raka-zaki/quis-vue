<script setup>
import { defineProps } from 'vue';
const {questionPage,barProgres}=defineProps(['questionPage','barProgres'])
</script>

<template>
    <header>
    <h4>Questions {{ questionPage }}</h4>
    <div class="bar">
        <div class="bar-progres" :style="{width:barProgres}"></div>
    </div>
   </header>
</template>

<style scoped>
header{
    margin-top:20px;
}
header h4{
    font-size:30px;
}
.bar{
    width: 100%;
    height: 50px;
    border: 3px solid #59f191;
    border-radius: 10px;
}
.bar-progres{
    background-color: #7ed19c;
    height: 100%;
    width: 0%;
}</style>