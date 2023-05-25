<script>
import store from "../store";
import Card from "./Card.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    Card,
  },
};
</script>

<template>
  <ul>
    <li v-if="store.movies.length != 0"><h2>Movies</h2></li>
    <Card v-for="card in store.movies" :key="card.id" :cardObj="card" />
  </ul>
  <ul>
    <li v-if="store.series.length != 0"><h2>Series</h2></li>
    <Card v-for="card in store.series" :key="card.id" :cardObj="card" />
  </ul>
</template>

<style lang="scss" scoped></style>
