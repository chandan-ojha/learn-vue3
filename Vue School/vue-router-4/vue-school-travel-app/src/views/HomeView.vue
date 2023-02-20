<template>
  <div class="home">
    <h1>All Destinations</h1>
    <button @click="addDynamicRoute">Add Dynamic Route</button>
    <router-link to="/dynamic">Visit Dynamic Route</router-link>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" alt="destination.name" />
      </router-link>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import { isNavigationFailure, NavigationFailureType } from "vue-router";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
  methods: {
    // async triggerRouterError() {
    //   const navaigationFailure = await this.$router.push("/");
    //   if (
    //     isNavigationFailure(
    //       navaigationFailure,
    //       NavigationFailureType.duplicated
    //     )
    //   ) {
    //     console.log(navaigationFailure.to);
    //     console.log(navaigationFailure.from.fullPath);
    //   } else {
    //   }
    // },
    addDynamicRoute() {
      this.$router.addRoute({
        name: "dynamic",
        path: "/dynamic",
        component: () => import("./Login.vue"),
      });

      this.$router.removeRoute("dynamic");
    },
  },
};
</script>
