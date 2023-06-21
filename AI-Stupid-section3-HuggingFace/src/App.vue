<template>
  <div>
    <p v-if="text !== ''">{{ text }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { HfInference } from '@huggingface/inference';

const HF_ACCESS_TOKEN = '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';
const hf = new HfInference(HF_ACCESS_TOKEN);

let text = ref('');

const fetchData = async () => {
  const result = await hf.summarization({
    model: 'facebook/bart-large-cnn',
    inputs:
      'Algorithm analysis is based upon two factors 1- CPU time (time complexity ) Dr. Farah Tawfiq Abdul Hussein Complexity Computation 2nd class – Software branch 2- Main memory space (Space complexity ) for a problem we can have more than one algorithm (solution) and we want to decide the best one (TC) Time Complexity: Amount of time taken by an algorithm to run till its Completion (SC) Space Complexity: Amount of space or, memory takes by an alg. to run till its completionTime Complexity of an alg. Can be Calculated by 2 Methods:1) Posterior Analysis: Here we determine time complexity of an algorithm by just analyzing the statements inside it rather than running it on any particular system 2) priori Analysis : Postriori Analysis: Here we determine time complexity of an algorithm after running it on a specific system ',
    parameters: {
      max_length: 1000,
    },
  });
  text.value = result.summary_text;
  console.log(text.value);
};

fetchData();
</script>
