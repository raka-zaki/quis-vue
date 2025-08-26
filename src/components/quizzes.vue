<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const {quiz}= defineProps(["quiz"])
const router = useRouter();
const gotoQuis =()=>{
  router.push({name:'quis',params:{id:quiz.id}})
}
</script>
<template>
      <div  class="card" @click="gotoQuis">
        <img class="card-img"  :alt="quiz.title" :src="quiz.img">
        <div class="card-body">
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }} Questions</p>
        </div>
      </div>
</template>

<style scoped>
#card-container{
  display: flex;
  flex-wrap: wrap;

}
.card{
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
}
</style>