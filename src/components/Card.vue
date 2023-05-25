<script>
export default {
  data() {
    return {
      stars: 5,
      starsNumber: Math.round(this.cardObj.vote_average / 2),
    };
  },
  props: {
    cardObj: Object,
  },
  methods: {},
};
</script>

<template>
  <li>
    <h3>
      Titolo: <span>{{ cardObj.title || cardObj.name }}</span>
    </h3>
    <h3>
      Titolo originale:
      <span>{{ cardObj.original_title || cardObj.original_name }}</span>
    </h3>
    <p>
      Lingua:
      <span>
        <lang-flag :iso="cardObj.original_language" :squared="false"
      /></span>
    </p>
    <p>
      Voto:
      <span
        ><font-awesome-icon
          v-for="star in starsNumber"
          :icon="['fas', 'star']"
          style="color: gold" />
        <font-awesome-icon
          v-for="star in stars - starsNumber"
          :icon="['far', 'star']"
      /></span>
    </p>
    <p class="description">
      Overview: <span>{{ cardObj.overview }}</span>
    </p>
  </li>
</template>

<style lang="scss" scoped>
.flag-icon-undefined {
  background-image: url("../assets/img/no-flag.svg.png");
  background-position: center;
}

li {
  flex: 0 0 calc((100% - 1rem) / 6);
  height: 400px;
  padding: 1rem;
  display: grid;
  grid-template-rows: repeat(7, minmax(0, 3rem));
  gap: 1rem;
  border-radius: 0.3rem;
  color: white;
  background-color: #141414;
  overflow-y: scroll;
}

li {
  span {
    font-size: 0.8rem;
    color: whitesmoke;
    opacity: 0.8;
  }

  .description {
    grid-row: 5 / 8;
  }
}
</style>
