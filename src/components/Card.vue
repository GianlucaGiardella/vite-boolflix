<script>
import LangFlag from "vue-lang-code-flags/LangFlag.vue";
export default {
  data() {
    return {
      imgSrc: "https://image.tmdb.org/t/p/w342",
      stars: 5,
      starsNumber: Math.round(this.cardObj.vote_average / 2),
    };
  },
  components: {
    LangFlag,
  },
  props: {
    cardObj: Object,
  },
};
</script>

<template>
  <li class="card">
    <div class="card-side front">
      <img
        v-if="cardObj.poster_path === null"
        src="../assets/img/no-img.svg.png"
        :alt="cardObj.title || cardObj.name"
        class="no-img"
      />
      <img
        v-else
        :src="imgSrc + cardObj.poster_path"
        :alt="cardObj.title || cardObj.name"
      />
    </div>
    <div class="card-side back">
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
          <LangFlag :iso="cardObj.original_language" :squared="false"
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
    </div>
  </li>
</template>

<style lang="scss" scoped>
.card {
  flex: 0 0 calc((100% - 1rem) / 6);
  height: 400px;
  position: relative;
  border-radius: 0.3rem;
  overflow: hidden;
  perspective: 150rem;
}

.card-side {
  position: absolute;
  inset: 0;
  transition: all 0.5s ease;
  backface-visibility: hidden;
}

.card:hover .card-side.front {
  transform: rotateY(180deg);
}

.card:hover .card-side.back {
  transform: rotateY(0deg);
}

.card-side.front {
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.card-side.back {
  transform: rotateY(-180deg);
  padding: 1rem;
  display: grid;
  grid-template-rows: repeat(7, minmax(0, 3rem));
  gap: 1rem;
  color: white;
  background-color: #141414;
  overflow-y: scroll;
}

.card-side.back {
  span {
    font-size: 0.8rem;
    color: whitesmoke;
    opacity: 0.8;
  }

  .description {
    grid-row: 5 / 8;
  }

  .flag-icon-undefined {
    background-image: url("../assets/img/no-flag.svg.png");
    background-position: center;
  }
}
</style>
