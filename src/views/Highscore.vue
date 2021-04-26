<template>
  <main>
    <Navigation />
    <div class="highscore">
      <h1 class="highscore-title">TOPP 10</h1>
      <button @click="toggleHighscore">{{ toggleText }}</button>
      <ul class="top-list">
        <li v-if="highscore.length === 0">
          De tio bästa spelen kommer visas här!
        </li>
        <li v-for="(score, index) in highscore" :key="index">
          <div>
            {{ index + 1 }}.
            {{ score.name }}
          </div>
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
  methods: {
    toggleHighscore() {
      this.ai = !this.ai;
      this.getHighscores(); 
    },
    getHighscores() {
      this.highscore = getHighscore(this.ai);
    }
  },
  mounted() {
    this.getHighscores(); 
  },
  computed: {
    toggleText() {
      if (this.ai) {
        return 'Visa spel mot en vän';
      } else {
        return 'Visa spel mot datorn';
      }
    }
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

button {
  display: flex;
  height: 50px;
  background-color: #407378;
  border-radius: 4px;
  color: #b6d4c6;
  font-family: "Rajdhani", sans-serif;
  font-size: 25px;
  justify-content: center;
  align-items: center;
  border-style: none;
  cursor: pointer;
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
  font-weight: bold;
  width: 800px;
  margin: 0;
  margin-top: 1rem;
  color: #464545;
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
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

  .highscore-title,
  button {
    margin-left: 1rem;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 36px;
  }
}

</style>