<script setup>
import quizheader from '@/components/quizheader.vue';
import quizcontent from '@/components/quizcontent.vue';
import quisresult from '@/components/quisresult.vue';
import { useRoute } from 'vue-router';
import quizzes from '../data/quizes.json';
import { ref, computed } from 'vue';
const router = useRoute();
const quisId = parseInt(router.params.id);
const quis = quizzes.find((q)=>q.id === quisId);
const currentindex=ref(0);
const correctAnswers = ref(0);
const showResult = ref(false);
const questionPage = computed(()=>{
    return `${currentindex.value+1}/${quis.questions.length}`
});
const barProgres = computed(()=>{
    return `${((currentindex.value+1)/quis.questions.length)*100}%`
    })
function onSelectOption(option){
      console.log("Option selected:", option);
    console.log("Is correct?", option.correct);
    if (option.correct){
        correctAnswers.value++;
        console.log("Correct answers:", correctAnswers.value);
    }
    if (currentindex.value === quis.questions.length-1){
         console.log("Quiz finished. Total correct:", correctAnswers.value);
        showResult.value=true;
        return;
    }
    currentindex.value++
}
</script>
<template>
    <quizheader :questionPage="questionPage" :barProgres="barProgres"/>
    <quizcontent 
     v-if="!showResult"
     :question="quis.questions[currentindex]" @selectOption="onSelectOption"/>
    <quisresult v-else :quisQuestionsLength="quis.questions.length" :correctAnswer="correctAnswers"/>
</template>


<style scoped>


</style>