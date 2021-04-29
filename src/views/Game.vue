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
      <div class="text">
        <p>{{ displayPlayerOne }}</p>
        <p>Antal drag: {{ countPlayerOne }}</p>
        <div class="info-circle"></div>
      </div>
      <div class="text">
        <p>{{ displayPlayerTwo }}</p>
        <p>Antal drag: {{ countPlayerTwo }}</p>
        <div class="info-circle"></div>
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

//import { getKey } from '../game/network.js'

export default {
  components: {
    Navigation
  },
  props: {
    spectateAI: Boolean,
    versusAI: Boolean,
    playerOne: String,
    playerTwo: String,
    networkName: String,
    versusNetwork: Boolean,
    code: String
  },
  data() {
    return {
      networkNumber: 0,
      playable: true,
      currentPlayer: 1,
      winner: 0,
      displayPlayerOne: '',
      displayPlayerTwo: '',
      countPlayerOne: 0,
      countPlayerTwo: 0,
      currentPlayerText: ''
    }
  },
  methods: {
    getRow(e) {
      if (this.versusNetwork) {
        this.getRowNetwork(e);
        return;
      }
      const row = e.target.getAttribute('data-row');
      if (this.playable && row !== null && !this.spectateAI) {
        const played = playPiece(row, this.currentPlayer);
        if (played) {
          this.winner = checkForWin(this.countPlayerOne);
          this.increaseCount();
          this.switchPlayer();
        }
      }
    },
    getRowNetwork(e) {
      const row = e.target.getAttribute('data-row');
      if (this.playable && row !== null) {
        console.log('Inside gRN');
        const played = playPiece(row, this.currentPlayer);
        if (played) {
          this.winner = checkForWin(this.countPlayerOne);
          this.increaseCount();
          window.network.moves.push({
            player: this.networkNumber,
            row: Number(row)
            });
          this.playable = false;
          this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        }
      }
    },
    async setKey() {
        window.network = await window.store.getNetworkStore(this.code, this.keyListener);

        if (window.network.names !== undefined) {
          if (window.network.names.length >= 2) {
            this.$router.push("/landing");
            setTimeout(() => {
              alert('Det här spelet är fullt!');
            }, 100);
            return;
          }
        }

        window.network.currentPlayer = 1;
        window.network.moves = [];
        this.playable = false;
        if (window.network.names === undefined) {
          this.networkNumber = 1;
          window.network.names = [this.networkName];
          this.displayPlayerOne = this.networkName;
        } else {
          this.networkNumber = 2;
          window.network.names.push(this.networkName);
          this.displayPlayerOne = window.network.names[0];
          this.displayPlayerTwo = this.networkName;
        }
        this.currentPlayerText = this.displayName(this.displayPlayerOne);
    },
    keyListener() {
      if (this.displayPlayerOne === '') {
        this.displayPlayerOne = window.network.names[0];
      }
      if (this.displayPlayerTwo === '') {
        this.displayPlayerTwo = window.network.names[1];
      }
      if (window.network.names.length === 2) {
        if (this.networkNumber === this.currentPlayer) {
          this.playable = true;
        }
      }
      if (window.network.moves.length) {
        const lastMove = window.network.moves[window.network.moves.length - 1];
        if ((lastMove.player === this.currentPlayer)&&(this.currentPlayer !== this.networkNumber)) {
          playPiece(lastMove.row, lastMove.player);
          this.increaseCount();
          this.winner = checkForWin(this.countPlayerOne);
          this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
          this.playable = true;
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
          this.winner = checkForWin(this.countPlayerOne);
          this.increaseCount();
          this.currentPlayer = 1;
          this.playable = true;
        }, 1000);
      }
    },
    playSpectateAI() {
      if (!this.playable) return;
      if (this.winner === 0) {
        const randomTime = Math.floor((Math.random() * 1000) + 1000);
        setTimeout( () => {
          playAIPiece(this.currentPlayer);
          this.winner = checkForWin(this.countPlayerOne);
          this.increaseCount();
          this.currentPlayer = (this.currentPlayer === 1 ? 2 : 1);
          this.playSpectateAI();
        }, randomTime);
      }
    },
    displayName(name) {
      return (name.charAt(name.length - 1) === 's') ? name + ' tur' : name + 's tur';
    },
    resetGame() {
      this.$router.push("/landing");
    }
  },
  watch: {
    winner() {
      if (this.winner !== 0) {
        this.playable = false;
          if (this.versusAI && this.winner === 2) return; // If playing against AI and AI won, do nothing
          if (this.spectateAI) return; // If spectating AI do nothing
          if (winner === 3) return; // If draw do nothing
            const winner = this.winner === 1 ? this.playerOne : this.playerTwo;
            const numberOfMoves = this.winner === 1 ? this.countPlayerOne : this.countPlayerTwo;
            saveWinner(winner, numberOfMoves, this.versusAI);
      }
    },
    currentPlayer() {
      setTimeout(() => {
      if (this.winner === 0) {
        if (this.currentPlayer === 1) {
          this.currentPlayerText = this.displayName(this.displayPlayerOne);
        } else {
          this.currentPlayerText = this.displayName(this.displayPlayerTwo);
        }
      } else {
        if (this.winner === 1) {
          this.currentPlayerText = this.displayPlayerOne + ' vann!';
        } else if (this.winner === 2) {
          this.currentPlayerText =  this.displayPlayerTwo + ' vann!';
        } else {
          this.currentPlayerText = 'Oavgjort!';
        }
      }
      }, 500);
    }
  },
  created() {
    resetBoard();
    if (this.playerOne === '') {
      this.$router.push("/landing"); // Redirect to GameLanding if input fields are empty
    }
  },
  mounted() {
    if (this.spectateAI) {
      this.playSpectateAI();
    }
    if (this.versusNetwork) {
      this.setKey();
    } else {
      this.displayPlayerOne = this.playerOne;
      this.displayPlayerTwo = this.playerTwo;
    }
    this.currentPlayerText = this.displayName(this.displayPlayerOne);
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
  font-weight: bold;
  padding-bottom: 1rem;
}

section.info div.text {
  width: 200px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

section.info div p:first-of-type {
  font-size: 1.5rem;
}

div.info-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  z-index: -1;
}

section.info div:nth-child(1) div.info-circle {
  background-color: #EE9292;
  left: 0;
}

section.info div:nth-child(2) div.info-circle {
  background-color: #DECF98;
  right: 0;
}

section.info div.text:first-of-type {
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
  cursor: pointer;
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
  section.info div.text {
    width: 50vw;
  }
  section.info div.info-circle {
    margin: 0 1rem;
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