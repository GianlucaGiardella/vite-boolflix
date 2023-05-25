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
    {{ cardObj.title || cardObj.name }}
    {{ cardObj.original_title || cardObj.original_name }}
    <lang-flag :iso="cardObj.original_language" :squared="false" />
    <font-awesome-icon v-for="star in starsNumber" :icon="['fas', 'star']" />
    <font-awesome-icon
      v-for="star in stars - starsNumber"
      :icon="['far', 'star']"
    />
  </li>
</template>

<style lang="scss" scoped>
.flag-icon-undefined {
  background-image: url("../assets/img/no-flag.svg.png");
  background-size: cover;
  background-position: center;
}
</style>
