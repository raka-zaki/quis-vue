<script setup>
import { defineProps } from 'vue';
const {question} = defineProps(['question'])
const emit = defineEmits(['selectOption'])
function emitSelectOption(option){
    emit('selectOption',option)
}
</script>

<template>
    <section id="question-container">
    <div class="title-question">{{ question.text }}</div>
   </section>
   <section id="option-container">
    <div class="option" v-for="option in question.answers" :key="option.id"  @click="emitSelectOption(option)">
        <p class="option-label">{{ option.label }}</p>
        <div class="option-value">{{option.text}}</div>
    </div>
   </section>
</template>

<style scoped>
#question-container{
    margin-top: 20px;
    font-size: 20px;
}
#option-container{
    margin-top: 20px;
    font-size: 15px;
    cursor: pointer;
}
.option{
    display: flex;
    align-items: center;
    
}
.option-label{
    font-weight: bold;
    margin-right: 10px;
    background-color: #c3d4ca;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    }
.option-value{
    display: flex;
    align-items: center;
    background-color: #b3dec5;
    width: 100%;
    height: 50px;
    padding-left: 10px;
    font-weight: bold;
}
</style>