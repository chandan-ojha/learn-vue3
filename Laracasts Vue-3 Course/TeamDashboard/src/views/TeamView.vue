<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import { useTeamStore } from "@/stores/TeamStore";
let team = useTeamStore();
team.fill();
// Example of calling a store action.
setTimeout(() => {
  team.grow(25);
}, 2000);
</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>