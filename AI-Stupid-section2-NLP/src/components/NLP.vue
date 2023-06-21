<template>
    <div class="bg-black text-white w-[100%] h-[100%] py-[1rem] px-[4rem] flex justify-between items-center">
    <header>
      <ul class="flex gap-6 ">
        <li>HOME</li>
        <li>ARTICLE</li>
        <li>CONTACT</li>
      </ul>
    </header>
      <div class="flex gap-4">
         <input class="rounded text-black" type="text" v-model="question">
         <button class="border p-2 rounded" @click="checking">Search</button>
      </div>
    </div>
    <article class=" px-[5rem] flex flex-col justify-center items-center">
      <h1 class="text-3xl font-bold p-[2rem]">Naruto Life</h1>
      <p class="text-[1.5rem]" ref="passage">Japanese artist Masashi Kishimoto created, wrote, and illustrated the Naruto manga series. He wrote each of the 700 chapters, or episodes, in Japanese. Reviewers praised his work for the strong story lines, well-developed characters, and detailed artwork. After the initial success of the story, the works were translated into other languages. For example, the series appeared in English in the manga magazine Weekly Jump—the English equivalent of Weekly Shonen Jump—from 2003 to 2015. After the serialized release in magazines, the chapters were collected and published as books. By the early 2020s more than 250 million print copies of Naruto existed in more than 40 countries. In addition, both Kishimoto and other authors created original novels chronicling the adventures of some of the characters from the series.
  
        Kishimoto split the series into two parts. The first part explores the life of 12-year-old Naruto, who was orphaned as a child. The people in the village where Naruto was born fear and ridicule him. He eventually finds out that he has a demon, the Nine-Tailed Fox, inside him. His father, who at the time was Hokage, imprisoned the demon inside Naruto to save the village. Meanwhile, in order to obtain the respect of the villagers, Naruto goes to a special academy to train as a ninja. Along the way he learns to work as a team with fellow ninjas Sasuke and Sakura, who become major characters in the series.
        
        The second part of the series occurs a few years later, after the young ninjas have completed their training. During this time Naruto releases the demon fox from inside him and defeats it. He also navigates sinister events and fights against evil beasts, former ninjas, and the misguided Sasuke, who has become consumed with revenge.
        
        Kishimoto created a sequel manga series called Boruto: Naruto Next Generations in 2016. It tracks the ninja adventures of Boruto, Naruto’s son. Ukyo Kodachi wrote the first 13 volumes, and then Kishimoto took on that responsibility. Mikio Ikemoto illustrated the entire series.
        
        ANIME</p>
    </article>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import {model} from '../helpers'

  let question =ref()
  let passage = ref()
  

   const checking = async ()=>{
   try{
      const answer = await model.findAnswers(question.value, passage.value.innerText)
      new Swal("the answer to your question is",answer[0].text,"Success")
       }catch(error){
       new Swal("Error","No Result Found","error")
       }
   }
  </script>
  <style scoped>
  
  </style>
  