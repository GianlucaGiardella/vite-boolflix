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
    <li v-if="store.movies.length != 0"><h2>movies</h2></li>
    <Card v-for="card in store.movies" :key="card.id" :cardObj="card" />
  </ul>
  <ul>
    <li v-if="store.series.length != 0"><h2>series</h2></li>
    <Card v-for="card in store.series" :key="card.id" :cardObj="card" />
  </ul>
</template>

<style lang="scss" scoped>
ul {
  padding-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
}

ul {
  li:first-child {
    flex: 0 0 100%;
  }
  li {
    h2 {
      padding-bottom: 1rem;
      font-size: 1.8rem;
      color: white;
      text-transform: uppercase;
    }
  }
}
</style>
