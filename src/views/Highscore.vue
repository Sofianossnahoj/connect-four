<template>
  <main>
    <Navigation />
    <div class="highscore">
      <section class="display-text">
        <h1 class="highscore-title">TOPP 10</h1>
        <p>{{ displayText }}</p>
      </section>
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
import Navigation from "../components/Navigation.vue";

import { getHighscore } from "../game/highscore.js";

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      highscore: [],
      ai: false,
    };
  },
  methods: {
    toggleHighscore() {
      this.ai = !this.ai;
      this.getHighscores();
    },
    getHighscores() {
      this.highscore = getHighscore(this.ai);
    },
  },
  mounted() {
    this.getHighscores();
  },
  computed: {
    toggleText() {
      if (this.ai) {
        return "Visa spel mot en vän";
      } else {
        return "Visa spel mot datorn";
      }
    },
    displayText() {
      if (this.ai) {
        return "- Mot datorn";
      } else {
        return "- Mot vänner";
      }
    },
  },
};
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
  background-color: #464545;
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
  font-family: "Rajdhani", sans-serif;
  font-size: 70px;
  color: #464545;
  margin: 0;
}

section.display-text {
  display: flex;
  align-items: center;
  margin-top: 58.1px;
}

p {
  font-family: "Rajdhani", sans-serif;
  font-size: 20pt;
  font-weight: bold;
  color: #464545;
  padding-left: 1rem;
}

ul.top-list {
  font-family: "Rajdhani", sans-serif;
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
  background-color: #decf98;
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
  .highscore-title {
    font-size: 36px;
  }
}
</style>