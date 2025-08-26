<script setup>
import Quizzes from "../components/quizzes.vue";
import quizzes from "../data/quizes.json";
import {ref ,watch} from "vue";
const quis  = ref(quizzes);
const search = ref('');
watch(search ,()=>{
  quis.value = quizzes.filter((quiz) =>{
    return quiz.title.toLowerCase().includes(search.value.toLowerCase()); 
  })
})
</script>
<template>
  
    <header>
      <h1 id="judul">Quiz Vue</h1>
      <input v-model=search id="search-form" type="text" placeholder="Search...">
    </header>
    <section id="card-container">
      <Quizzes v-for="quiz in quis" :key="quiz.id" :quiz="quiz"></Quizzes>
    </section>
  
</template>

<style scoped>

#judul{
  font-weight: bold;
  font-family: system-ui, apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
header{
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
#search-form{
 margin-left: 10px;
 background-color: rgba(237, 220, 220, 0.842);
 border: none;
 border-radius: 5px;
 padding: 7px;
  font-size: 16px;
}
#card-container{
  display: flex;
  flex-wrap: wrap;

}
/* .card{
  width: 270px;
  margin-right: 30px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.card-img{
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 0;
}
.card-body{
  padding: 0 15px;
} */
</style>