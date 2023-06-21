<template>

        <div class="my-[1rem] mx-[2rem] px-[2rem] py-[1rem] flex flex-col justify-center rounded-xl  bg-slate-400 w-[500px] h-[100px]">
            <div  class="flex items-center gap-3 ">
             <img class="w-[50px] bg-slate-600 rounded-[50%] h-[50px]" :src='imgPath' alt="">
             <h2 class="text-xl" >{{ name }}</h2>
            </div>
            <p class="mx-[4rem]" >{{comment}}</p>
         </div>
         
 
</template>

<script setup>
import { ref } from 'vue';

const props =  defineProps({
    comment:Array,
})

const character = [
    {
        name:'youu',
        imgPath:'/src/assets/im1.png'
    },
    {
        name:'shinobu',
        imgPath:'/src/assets/im2.png'
    },
    {
        name:'youreshie',
        imgPath:'/src/assets/im3.png'
    },
    {
        name:'onohana',
        imgPath:'/src/assets/im4.png'
    },
    {
        name:'rokya',
        imgPath:'/src/assets/im5.png'
    },
]

const randomCharacter = character[Math.floor(Math.random() * character.length)];
const { name, imgPath } = randomCharacter;




</script>