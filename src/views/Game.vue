<template>
  <main>
    <Navigation />
    <span class="current">{{ currentPlayerText }}</span>
    <section class="game">
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
    <div class="game-background">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </section>

    <section class="info">
      <div>
        <p><span class="piece">&#9679;</span>Spelare: {{ playerOne }}</p>
        <p>Antal drag: {{ countPlayerOne }}</p>
      </div>
      <div>
        <p>Spelare: {{ playerTwo }}<span class="piece">&#9679;</span></p>
        <p>Antal drag: {{ countPlayerTwo }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import Navigation from '../components/Navigation.vue'

import { playPiece, checkForWin } from '../game/mechanics.js'
import { playAIPiece } from '../game/ai.js'

export default {
  components: {
    Navigation
  },
  data() {
    return {
      playable: true,
      versusAI: true,
      playerOne: 'Jack',
      playerTwo: 'AI',
      currentPlayer: 1,
      winner: 0,
      countPlayerOne: 0,
      countPlayerTwo: 0
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
          this.increaseCount();
          this.switchPlayer();
        }
      }
    },
    increaseCount() {
      if (this.currentPlayer === 1) {
        this.countPlayerOne ++;
      } else {
        this.countPlayerTwo ++;
      }
    },
    switchPlayer() {
      if (!this.playable) return;
      if (this.currentPlayer === 1) {
        this.currentPlayer = 2;
        if (this.versusAI) {
          this.playAI();
        }
      } else {
        this.currentPlayer = 1;
      }
    },
    playAI() {
      this.playable = false;
      if (this.winner === 0) {
        setTimeout(() => {
          playAIPiece();
          this.winner = checkForWin();
          this.increaseCount();
          this.currentPlayer = 1;
          this.playable = true;
        }, 1000);
      }
    }
  },
  watch: {
    winner() {
      if (this.winner !== 0) {
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

section.game {
  position: relative;
}

div.game,
div.game-background {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 10px;
  overflow: hidden;
}

div.game-background {
  background-color: #407378;
}

div.game-background {
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
}

div.game div,
div.game-background div {
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

section.info {
  display: flex;
  margin-top: 1rem;
  font-family: 'Rajdhani', sans-serif;
  padding-bottom: 1rem;
}

section.info div {
  width: 200px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

section.info div:first-of-type {
  align-items: flex-end;
  border-right: solid 1px;
}

section.info p {
  margin: 0;
}

section.info p:first-of-type {
  display: flex;
  align-items: center;
}

section.info span.piece {
  font-size: 3rem;
  color: #EE9292;
  margin: 0 0.5rem;
  line-height: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

section.info div:nth-child(2) span {
  color: #DECF98;
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
  section.info div {
    width: 50vw;
  }
}

.move {
  animation: move 1s ease;
}

@keyframes move {
  0% {
    transform: translateY(-430px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>