<template>
  <div class="flex flex-col justify-center ">
    <h1 class="text-3xl p-[4rem]">Comment Section</h1>
    <div class="px-[2rem]" >
      <input class="text-black border-2	 border-black p-[0.30rem]" type="text" v-model="inputcomment">
      <button class="bg-black text-white p-2" @click="handleSubmit">Post Comment</button>
    </div>
    <div v-for="comment in comments" :key="comments.indexOf(comment)">
        <comments :comment=comment />
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import  Comments from './comments.vue';
const comments = ref([]);
const inputcomment = ref("")
// The minimum prediction confidence.
const threshold = 0.9;



const handleSubmit = async()=>{
  toxicity.load(threshold).then(model => {
  const sentences = inputcomment.value;

  model.classify(sentences).then(predictions => {
    console.log(predictions)
    for(let prediction of predictions){
      console.log(prediction.results[0].match)
    }
  });
});
    comments.value.push(inputcomment.value)
    inputcomment.value = ""
}

  
</script>