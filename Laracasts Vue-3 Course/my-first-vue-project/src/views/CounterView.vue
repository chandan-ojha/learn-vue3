<script setup>
  import {useCounterStore} from "@/stores/CounterStore.js";

  let counter = useCounterStore();
</script>

<template>
  <div>
    <h1>{{ counter.count }}</h1>

    <button @click="counter.increment()">Increment ({{ counter.remaining }} Remaining)</button>
  </div>
</template>