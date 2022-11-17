<template>
  <footer class="mt-12 bg-gray-100 py-4 text-center">
    <h5 class="font-semibold text-lg">{{ team.name }} - {{ team.spots }} Member Team</h5>
  </footer>
</template>

<script setup>
  import {useTeamStore} from "@/stores/TeamStore";
  let team = useTeamStore();
</script>