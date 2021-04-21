<template>
  <main>
    <Navigation />
    <span class="current">{{ currentPlayerText }}</span>
    <div class="game" @click="getRow">
      <div class="circle" data-col="0" data-row="0"></div>
      <div class="circle" data-col="0" data-row="1"></div>
      <div class="circle" data-col="0" data-row="2"></div>
      <div class="circle" data-col="0" data-row="3"></div>
      <div class="circle" data-col="0" data-row="4"></div>
      <div class="circle" data-col="0" data-row="5"></div>
      <div class="circle" data-col="0" data-row="6"></div>
      <div class="circle" data-col="1" data-row="0"></div>
      <div class="circle" data-col="1" data-row="1"></div>
      <div class="circle" data-col="1" data-row="2"></div>
      <div class="circle" data-col="1" data-row="3"></div>
      <div class="circle" data-col="1" data-row="4"></div>
      <div class="circle" data-col="1" data-row="5"></div>
      <div class="circle" data-col="1" data-row="6"></div>
      <div class="circle" data-col="2" data-row="0"></div>
      <div class="circle" data-col="2" data-row="1"></div>
      <div class="circle" data-col="2" data-row="2"></div>
      <div class="circle" data-col="2" data-row="3"></div>
      <div class="circle" data-col="2" data-row="4"></div>
      <div class="circle" data-col="2" data-row="5"></div>
      <div class="circle" data-col="2" data-row="6"></div>
      <div class="circle" data-col="3" data-row="0"></div>
      <div class="circle" data-col="3" data-row="1"></div>
      <div class="circle" data-col="3" data-row="2"></div>
      <div class="circle" data-col="3" data-row="3"></div>
      <div class="circle" data-col="3" data-row="4"></div>
      <div class="circle" data-col="3" data-row="5"></div>
      <div class="circle" data-col="3" data-row="6"></div>
      <div class="circle" data-col="4" data-row="0"></div>
      <div class="circle" data-col="4" data-row="1"></div>
      <div class="circle" data-col="4" data-row="2"></div>
      <div class="circle" data-col="4" data-row="3"></div>
      <div class="circle" data-col="4" data-row="4"></div>
      <div class="circle" data-col="4" data-row="5"></div>
      <div class="circle" data-col="4" data-row="6"></div>
      <div class="circle" data-col="5" data-row="0"></div>
      <div class="circle" data-col="5" data-row="1"></div>
      <div class="circle" data-col="5" data-row="2"></div>
      <div class="circle" data-col="5" data-row="3"></div>
      <div class="circle" data-col="5" data-row="4"></div>
      <div class="circle" data-col="5" data-row="5"></div>
      <div class="circle" data-col="5" data-row="6"></div>
    </div>
  </main>
</template>

<script>
import Navigation from '../components/Navigation.vue'

import { playPiece, checkForWin } from '../game/mechanics.js'

export default {
  components: {
    Navigation
  },
  data() {
    return {
      playable: true,
      playerOne: 'Jack',
      playerTwo: 'Robin',
      currentPlayer: 1,
      winner: 0
    }
  },
  computed: {
    currentPlayerText() {
      if (this.winner === 0) {
        if (this.currentPlayer === 1) {
          return this.playerOne + 's tur';
        } else {
          return this.playerTwo + 's tur';
        }
      } else {
        if (this.winner === 1) {
          return this.playerOne + ' vann!';
        } else {
          return this.playerTwo + ' vann!';
        }
      }
    }
  },
  methods: {
    getRow(e) {
      const row = e.target.getAttribute('data-row');
      if (this.playable && row !== null) {
        const played = playPiece(row, this.currentPlayer);
        if (played) {
          this.winner = checkForWin();
          this.switchPlayer();
        }
      }
    },
    switchPlayer() {
      if (!this.playable) return
      if (this.currentPlayer === 1) {
        this.currentPlayer = 2
      } else {
        this.currentPlayer = 1
      }
    }
  },
  watch: {
    winner() {
      if (this.winner !== 0) {
        console.log('Player ' + this.winner + ' won!!!');
        this.playable = false;
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

div.game {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 10px;
  background-color: #407378;
}

div.game div {
  width: 60px;
  height: 60px;
  background-color: #B6D4C6;
  border-radius: 50%;
  cursor: pointer;
}

div.game div.player-one {
  background-color: #EE9292;
}

div.game div.player-two {
  background-color: #DECF98;
}

span.current {
  font-family: 'Ribeye', cursive;
  font-size: 2rem;
  margin-top: 2rem;
}

@media screen and (max-width: 500px) {
  div.game div {
    width: 100%;
    height: 100%;
    padding-top: 100%; /* Aspect ration 1/1 */
  }
  div.game {
    width: 100vw;
    gap: calc(100vw * 0.02); /* Each gap is 2% of the total width to be consistent */
    padding: calc(100vw * 0.02);
  }
}
</style>