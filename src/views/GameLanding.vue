<template>
  <main>
    <navigationMenu />
    <section class="game-info">
      <p>
        I det klassiska spelet <i>Fyra i rad</i> spelar du för att vinna
        samtidigt som du måste se upp för motståndarens drag. Välj att spela mot
        familj och vänner eller mot en bot. Först till fyra i rad vinner!
      </p>
      <!--User chooses to play against bot or another player-->
      <section v-show="playingAlternatives">
        <article>
          <h2>Spela mot en vän</h2>
          <button class="btn-playingAlternatives" v-on:click="showPlayer()">
            Välj
          </button>
        </article>
        <article>
          <h2>Spela mot en Bot</h2>
          <button class="btn-playingAlternatives" v-on:click="showBot()">
            Välj
          </button>
        </article>
        <article>
          <h2>Spel mellan två bottar</h2>
          <button class="btn-playingAlternatives" v-on:click="runBotGame()">
            Välj
          </button>
        </article>
        <!--<article class="container-logo">
          <div id="logo-markers"></div>
        </article>-->
      </section>

      <!-- settings for player 1-->
      <article v-show="settingsplayer1">
        <h3>Spelare 1</h3>
        <div class="form">
          <label>Namn:</label>
          <input
            @keypress.enter="submitPlayer1()"
            type="text"
            class="input-name"
            name="playerName"
            v-model="playerOne"
            required
          />
        </div>
        <button class="btn-playingAlternatives" v-on:click="submitPlayer1()">
          Spelare 1 ok!
        </button>
      </article>

      <!-- settings for player 2-->
      <article v-show="settingsplayer2">
        <h3>Spelare 2</h3>
        <div class="form">
          <label>Namn:</label>
          <input
            @keypress.enter="submitPlayer2()"
            type="text"
            class="input-name"
            name="playerName"
            v-model="playerTwo"
            required
          />
        </div>
        <button class="btn-playingAlternatives" v-on:click="submitPlayer2()">
          Spelare 2 ok!
        </button>
      </article>

      <!-- when player against bot-->
      <article v-show="playAgainstBot">
        <h2>Spela mot en bot</h2>
        <div class="form">
          <label>Namn:</label>
          <input
            @keypress.enter="submitPlayerVsBot()"
            type="text"
            class="input-name"
            name="playerName"
            v-model="playerOne"
            required
          />
        </div>
        <button
          class="btn-playingAlternatives"
          v-on:click="submitPlayerVsBot()"
        >
          Spelare ok
        </button>
      </article>
    </section>
  </main>
</template>

<script>
import NavigationMenu from "../components/Navigation";
export default {
  data() {
    return {
      playerOne: "",
      playerTwo: "",
      playAgainstBot: false,
      settingsplayer1: false,
      settingsplayer2: false,
      playingAlternatives: true,
    };
  },
  components: { NavigationMenu },

  methods: {
    showPlayer() {
      this.settingsplayer1 = true;
      this.playingAlternatives = false;
    },
    showBot() {
      this.playAgainstBot = true;
      this.playingAlternatives = false;
    },
    submitPlayerVsBot() {
      const payload = {
        playAgainstBot: this.playAgainstBot,
        playerOne: this.playerOne,
        playerTwo: "Botson",
      };
      if (this.playerOne()){
      this.$emit("settings", payload);
      this.$router.push("/game");
      }
      if (!this.playerOne) {
        alert("Fyll i ett namn för att spela!")
      }
    },

    validatePlayerVsBot() {
      if (this.playAgainstBot) {
        return true;
      }
      if (!this.playAgainstBot) {
        alert("Fyll i ett namn för att spela!");
      }
    },
    submitPlayer1() {
      this.settingsplayer1 = true;

      if (this.validatePlayerOne()) {
        this.settingsplayer1 = false;
        this.settingsplayer2 = true;
      }
    },
    validatePlayerOne() {
      if (this.playerOne) {
        return true;
      }
      if (!this.playerOne) {
        alert("Fyll i ett namn för att spela!");
      }
    },
    submitPlayer2() {
      this.settingsplayer2 = true;
      const payload = {
        playerOne: this.playerOne,
        playerTwo: this.playerTwo,
        playAgainstBot: this.playAgainstBot,
      };
      if (this.validatePlayerTwo()) {
        this.$emit("settings", payload);
        this.$router.push("/game");
        this.settingsplayer2 = false;
      }
    },
    validatePlayerTwo() {
      if (this.playerTwo) {
        return true;
      }
      if (!this.playerTwo) {
        alert("Fyll i ett namn för att spela!");
      }
    },
    runBotGame() {
      const payload = {
        playerOne: "Mr Bot",
        playerTwo: "Mrs Bot",
        spectateAI: true,
      };
      this.$emit("settings", payload);
      this.$router.push("/game");
    },
  },
};
</script>

<style scoped>
body {
  overflow: scroll;
  margin: none;
}
main {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn-playingAlternatives {
  display: flex;
  height: 50px;
  min-width: 234px;
  background-color: #424040;
  border-radius: 4px;
  color: #b6d4c6;
  font-family: "Rajdhani", sans-serif;
  font-size: 36px;
  justify-content: center;
  align-items: center;
  border-style: none;
  margin-top: 10px;
  cursor: pointer;
}
h2 {
  font-family: "Rajdhani", sans-serif;
  font-size: 36px;
  color: #424040;
}
h3 {
  font-family: "Rajdhani", sans-serif;
  font-size: 36px;
  color: #424040;
  margin-bottom: -20px;
}

.game-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-bottom: 30px;
}
.container-logo {
  margin-top: 20px;
  height: 200px;
  width: 200px;
}
#logo-markers {
  background: url("../assets/LogoMarkers.svg") center no-repeat;
  background-size: 100%;
  height: 60px;
}

p {
  text-align: center;
  color: #464545;
  font-family: "Open Sans", sans-serif;
  width: 80%;
  max-width: 800px;
}
.form {
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 112px;
  width: 315px;
  background-color: #407378;
  margin-top: 15px;
  border-radius: 7px;
  box-shadow: 0px 2px 2px rgb(70, 69, 69);
}
article {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  font-family: "Rajdhani", sans-serif;
  font-size: 36px;
  color: #b6d4c6;
  font-weight: 600;
}
.input-name {
  width: 255px;
  height: 54px;
  border-radius: 7px;
  border-style: none;
  font-family: "Rajdhani", sans-serif;
  font-size: 36px;
  color: #424040;
  font-weight: 600;
  cursor: pointer;
}
</style>
