<template>
  <main>
    <Navigation />
    <span class="current">{{ currentPlayerText }}</span>
    <section class="game">
    <img src="@/assets/skeleton.png" alt="">
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
    <section>
      <button v-on:click="resetGame()" class="new-game">Nytt spel</button>
    </section>
  </main>
</template>

<script>
import Navigation from '../components/Navigation.vue'

import { playPiece, checkForWin } from '../game/mechanics.js'
import { playAIPiece } from '../game/ai.js'
import { saveWinner } from '../game/highscore.js'
import { resetBoard } from '../game/board.js'

export default {
  components: {
    Navigation
  },
  props: {
    versusAI: Boolean,
    playerOne: String,
    playerTwo: String
  },
  data() {
    return {
      spectateAI: false,
      playable: true,
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
      if (this.playable && row !== null && !this.spectateAI) {
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
          playAIPiece(2);
          this.winner = checkForWin();
          this.increaseCount();
          this.currentPlayer = 1;
          this.playable = true;
        }, 1000);
      }
    },
    playSpectateAI() {
      if (!this.playable) return;
      setTimeout( () => {
        playAIPiece(this.currentPlayer);
        this.winner = checkForWin();
        this.increaseCount();
        this.currentPlayer = (this.currentPlayer === 1 ? 2 : 1);
        this.playSpectateAI();
      }, 1000);
    },
    resetGame() {
      this.$router.push("/landing")
    }
  },
  watch: {
    winner() {
      if (this.winner !== 0) {
        this.playable = false;
          if (this.versusAI && this.winner === 2) return; // If playing against AI and AI won, do nothing
            if (this.spectateAI) return; // If spectating AI do nothing
            const winner = this.winner === 1 ? this.playerOne : this.playerTwo;
            const numberOfMoves = this.winner === 1 ? this.countPlayerOne : this.countPlayerTwo;
            saveWinner(winner, numberOfMoves, this.versusAI);
      }
    }
  },
  created() {
    resetBoard();
  },
  mounted() {
    this.playSpectateAI()
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
  margin-top: 2rem;
}

div.game {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 10px;
  overflow: hidden;
}

section.game img {
  pointer-events: none;
  position: absolute;
  z-index: 999;
  width: 100%;
  left: 0;
  top: 0;
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

div.game div.win {
  background-image: url('../assets/star.png');
  background-position: center;
  background-size: cover;
}

div.game div.player-two {
  background-color: #DECF98;
}

span.current {
  font-family: 'Ribeye', cursive;
  font-size: 2rem;
  margin-top: 2rem;
  color: #464545;
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

.new-game {
  display: flex;
  height: 50px;
  width: 234px;
  background-color: #424040;
  border-radius: 4px;
  color: #b6d4c6;
  font-family: "Rajdhani", sans-serif;
  font-size: 36px;
  justify-content: center;
  align-items: center;
  border-style: none;
  margin-bottom: 2rem;
  margin-top: 1rem;
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
  animation: move 0.5s ease;
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