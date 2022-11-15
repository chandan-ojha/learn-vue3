<template>
  <footer>
     <h4>Quiz Footer</h4>

     <QuizFooterLinks :quiz="quiz"/>
  </footer>
</template>

<script>
 import QuizFooterLinks from "@/components/Quiz/QuizFooterLinks";
 defineProps({
   quiz: Object
 });
</script>
