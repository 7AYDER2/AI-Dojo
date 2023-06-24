<template>
  <div class="mx-auto w-fit mt-10">
    <div class="relative overflow-hidden w-[500px] h-[350px] mb-6">
<video @loadeddata="predictCam"  width="600" height="800" ref="video" class=" w-[500px] h-[350px]  bg-black">
</video>
<Box v-for="Box in Objects" :box="Box"></Box>
</div>
<button @click="openCam" class="mr-3 bg-black text-white px-3 py-2 rounded-lg">Open Cam</button>
<button @click="stopCam" class="bg-black text-white px-3 py-2 rounded-lg">Close Cam</button>
</div>
</template>

<script setup>
import { ref } from 'vue';
import {model} from './ai';
import Box from './Box.vue'
let video = ref();
const Objects = ref([])
let mediaStream;

const openCam = ()=>{
  navigator.mediaDevices.getUserMedia({video:true,audio:false})
  .then(stream=>{
    mediaStream = stream;
    video.value.srcObject = stream;
    video.value.play();
  })
}

const stopCam = () =>{
  if(mediaStream){
    const tracks = mediaStream.getTracks();
    tracks.forEach(track => {
      track.stop()
    })
    mediaStream = null;
  }
}

const predictCam  = async () =>{
  model.detect(video.value).then((result)=>{
    Objects.value =result;
    console.log(result);
   if(mediaStream !== null){
    Objects.value =[]
        window.requestAnimationFrame(result);
   }
 })
}
</script>
<style scoped>

</style>
