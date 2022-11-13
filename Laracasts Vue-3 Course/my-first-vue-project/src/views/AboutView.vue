<script>
  import flash from "@/mixins/flash";
  export default {
    mixins: [flash]
  }
</script>

<template>
  <main>
    <p>
      <button @click="flash('It Works on The About Page!')">Click Me</button>
    </p>
  </main>
</template>