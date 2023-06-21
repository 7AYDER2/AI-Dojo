<template>
  <div>
    <div class="relative w-[640px] h-[480px]">
      <video @loadeddata="predicCam" ref="video" src=""  class=" w-[100%] h-[100%] border border-gray-600 rounded
        m-2"></video>
        <div v-if="detecions" class="absolute  top-[2rem] left-[2rem] bg-green-400/50   w-[70%] h-[90%]">
          <p class="bg-orange-400 px-2 ">{{ detecions }}-width <span v-if="persentage">{{persentage}}% Confidence</span> </p>
        </div>
    </div>
    <button @click="openCam"  class="bg-black text-white rounded p-2 m-2">open cam</button>
  </div>
  <button @click="stopCam"  class="bg-black text-white rounded p-2 m-2">Stop cam</button>
</template>

<script setup>
import { ref } from 'vue';
import {model} from './ai';
let video = ref()
let mediaStream;
let detecions = ref();
let persentage = ref()

const openCam =()=>{

  navigator.mediaDevices.getUserMedia({video:true,audio:false}).then
  (stream=>{
      mediaStream = stream;
      video.value.srcObject = stream;
      video.value.play()
    }
  )
}

const stopCam = () =>{

   if(mediaStream){
    const tracks = mediaStream.getTracks()
    tracks.forEach(track => {
      track.stop() 
    });
    mediaStream=null;
   }
}

const predicCam = () =>{
  model.detect(video.value).then(predictions =>{
      console.log("predictions",predictions)
      predictions.map((ele)=>{
        detecions.value = ele.class
        persentage.value = Math.trunc(ele.score*100)
      })
      if(mediaStream !== null){
        setTimeout(()=>{
          window.requestAnimationFrame(predicCam)
        },2000)
      }
    })
 
}
/*
  the output
  bbox: [x, y, width, height],
  class: "person",
  score: 0.8380282521247864
*/
</script>
<style scoped>

</style>
