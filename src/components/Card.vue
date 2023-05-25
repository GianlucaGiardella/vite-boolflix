<script>
export default {
  props: {
    cardObj: Object,
  },
};
</script>

<template>
  <li>
    {{ cardObj.title || cardObj.name }}
    {{ cardObj.original_title || cardObj.original_name }}
    <lang-flag :iso="cardObj.original_language" :squared="false" />
    {{ cardObj.vote_average }}
  </li>
</template>

<style lang="scss" scoped>
.flag-icon-undefined {
  background-image: url("../assets/img/no-flag.svg.png");
  background-size: cover;
  background-position: center;
}
</style>
