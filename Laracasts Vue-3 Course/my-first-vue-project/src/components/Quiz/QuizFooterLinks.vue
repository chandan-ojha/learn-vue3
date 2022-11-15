<template>
  <div>
    <h5>{{ name }}</h5>

    <ul>
      <li><a href="#">Get a Job</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</template>

<script>
 import {inject} from "vue";

 defineProps({quiz: Objetc});

 let name = inject(name);

</script>
