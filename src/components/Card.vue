<script>
export default {
  props: {
    movieTitle: String,
    movieOriginalTitle: String,
    movieLanguage: String,
    movieVote: Number,
  },
};
</script>

<template>
  <li>
    {{ movieTitle }}
    {{ movieOriginalTitle }}
    <lang-flag :iso="movieLanguage" :squared="false" />
    {{ movieVote }}
  </li>
</template>

<style lang="scss" scoped>
.flag-icon-undefined {
  background-image: url("../assets/img/no-flag.svg.png");
  background-size: cover;
  background-position: center;
}
</style>
