<!--
<script setup>
import TheWelcome from "../components/TheWelcome.vue";
/*import {onMounted, ref} from "vue";*/

//let message = ref("Hello World!");
let message = $ref("Hello World!");

setTimeout(() => {
  message = 'I have been changed';
},5000);


/*export default {

  //compositions api
  setup(){
    /!*onMounted(()=>{
      alert('Hi there')
    });*!/

    let message = ref("Hello World!");

    setTimeout(() => {
       message.value = 'I have been changed';
    },2000)

    return {
      message,
    }
  }*/

  //options api
  /*data(){
    return {
      message: "Hello World",
    };
  },
  mounted() {
    alert("I have been mounted");
  },*/
//};
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{message}}</p>
    <p>
      <input type="text" v-model="message">
    </p>
  </main>
</template>
-->

<!--Form Mixins to Composables-->

<script setup>

import {useFlash} from "@/composables/useFlash";
let {flash} = useFlash();

</script>

<template>
  <main>
    <p>
      <button @click="flash('Test','It Works!','info')">Click Me</button>
    </p>
  </main>
</template>
