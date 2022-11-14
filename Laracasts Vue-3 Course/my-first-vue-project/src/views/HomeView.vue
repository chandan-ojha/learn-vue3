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

//import { ref, watch} from "vue";
import {useStorage} from "@/composables/useStorage";

let food = useStorage('food', 'tacos');
let age = useStorage('age');

useStorage('obj',{one: 'one'});

/*let food = ref(localStorage.getItem('food'));
let age = ref(localStorage.getItem('age'));

watch(food,(val) => {
  write('food',val)
});

watch(age,(val) => {
  write('age',val)
});

function write(key,value){
  localStorage.setItem(key,value)
}

setTimeout(()=> {
   food.value = 'changed'
},3000)*/

</script>

<template>
  <main>
    <p>
      <button @click="flash('Test','It Works!','info')">Click Me</button>
    </p>
    <p>
      What is your favourite food? <input type="text" v-model="food">
    </p>
    <p>
      How old are you? <input type="text" v-model="age">
    </p>
  </main>
</template>
