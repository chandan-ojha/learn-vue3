<template>
  <div class="card">
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <span class="card_text">
      {{ experience.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    experience: { type: Object, require: true },
  },
};
</script>

<style></style>
