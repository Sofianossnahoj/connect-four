<template>
  <main>
    <Navigation />
    <div class="highscore">
      <h1 class="highscore-title">TOPP 10</h1>
      <ul class="top-list">
        <li v-for="(score, index) in highscore" :key="index">
          {{ index + 1 }}.
          {{ score.name }}
          {{ score.moves }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import Navigation from '../components/Navigation.vue'

import { getHighscore } from '../game/highscore.js'

export default {
  components: {
    Navigation
  },
  data() {
    return {
      highscore: [],
      ai: false
    }
  },
  mounted() {
    this.highscore = getHighscore(this.ai);
  }
}
</script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.highscore {
  max-width: 800px;
  margin: 0 5%;
  padding-bottom: 5%;
}

.highscore-title {
  font-family: 'Rajdhani', sans-serif;
  font-size: 70px;
  color: #464545;
  margin-bottom: 0;
}

ul.top-list {
  font-family: 'Rajdhani', sans-serif;
  font-size: 2rem;
  width: 800px;
  margin: 0;
  margin-top: 1rem;
  color: #464545;
  list-style: none;
  padding: 0;
}

li:nth-child(odd) {
  background-color: #DECF98;
}

@media screen and (max-width: 800px) {

  ul.top-list,
  .highscore {
    width: 100vw;
  }

  li {
    padding: 0 1rem;
  }

  .highscore-title {
    margin-left: 1rem;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 36px;
  }
}

</style>