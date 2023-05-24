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
    <Card
      v-for="card in store.movies"
      :key="card.id"
      :movieTitle="card.title"
      :movieOriginalTitle="card.original_title"
      :movieLanguage="card.original_language"
      :movieVote="card.vote_average"
    />
  </ul>
</template>

<style lang="scss" scoped></style>
