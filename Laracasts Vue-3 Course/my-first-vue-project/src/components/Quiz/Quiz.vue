<template>
  <QuizHeader />

  <QuizQuestion />

  <QuizFooter :quiz="quiz" />

</template>

<script>
  import QuizHeader from "@/components/Quiz/QuizHeader.vue";
  import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
  import QuizFooter from "@/components/Quiz/QuizFooter.vue";
  import {provide,ref} from 'vue';

  defineProps({ quiz: Object });

  let name = ref('Chandan Ojha')

  provide('name', name);

</script>
