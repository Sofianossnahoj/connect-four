<template>
  <main>
    <navigationMenu />
    <section class="game-info">
      <p>
        I det klassiska spelet <i>Fyra i rad</i> spelar du för att vinna samtidigt som du måste se upp för motståndarens drag. Välj att spela mot familj och vänner eller mot en bot. Först till fyra i rad vinner!
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
        <article class="container-logo">
          <div id="logo-markers"></div>
        </article>
      </section>

      <!-- settings for player 1-->
      <article v-show="settingsplayer1">
        <h3>Spelare 1</h3>
        <form>
          <label>Namn:</label>
          <input
            type="text"
            class="input-name"
            name="playerName"
            v-model="playerOne"
            required
          />
        </form>
          <button class="btn-playingAlternatives" v-on:click="submitPlayer1()">Spelare 1 ok!</button>
      </article>

      <!-- settings for player 2-->
      <article v-show="settingsplayer2">
        <h3>Spelare 2</h3>
        <form>
          <label>Namn:</label>
          <input
            type="text"
            class="input-name"
            name="playerName"
            v-model="playerTwo"
            required
          />
        </form>
          <button class="btn-playingAlternatives" v-on:click="submitPlayer2()">Spelare 2 ok!</button>
      </article>

      <!-- when player against bot-->
      <article v-show="playAgainstBot">
        <h2>Spela mot en bot</h2>
        <form>
          <label>Namn:</label>
          <input
            type="text"
            class="input-name"
            name="playerName"
            v-model="playerOne"
            required
          />
        </form>
        <!--<form>
          <label>Välj färg:</label>
          <div class="checkmark-container">
            <label id="playerColor-red" class="choose-markercolor">
              <input
                type="radio"
                value="playercolorRed"
                name="playerColor"
                v-model="playerColor"
              />
              <span class="checkmark checkmarkRed"></span>
            </label>
            <label id="playerColor-yellow" class="choose-markercolor">
              <input
                type="radio"
                value="playercolorYellow"
                name="playerColor"
                v-model="playerColor"
              />
              <span class="checkmark checkmarkYellow"></span>
            </label>
          </div>
        </form>
        <form>
          <label for="">Välj svårighetsgrad:</label>
          <select
            class="choose-difficulty"
            v-model="chooseDifficulty"
            name="AIDifficulty"
          >
            <option class="dropdown-options">Lätt</option>
            <option class="dropdown-options">Svår</option>
          </select> 
        </form> -->
        <button class="btn-playingAlternatives" v-on:click=" submitPlayerVsBot()">Spelare ok</button>
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
    submitPlayerVsBot(){
      const payload = {playAgainstBot: this.playAgainstBot, playerOne: this.playerOne, playerTwo: "Botson"}
      this.$emit("settings", payload)
      this.$router.push("/game")
    },
    submitPlayer1() {
      this.settingsplayer1 = false;
      this.settingsplayer2 = true;
    },
    submitPlayer2() {
      this.settingsplayer2 = false;
      const payload = {playerOne: this.playerOne, playerTwo: this.playerTwo, playAgainstBot: this.playAgainstBot}
      this.$emit("settings", payload)
      this.$router.push("/game")
    }
  },
};
</script>

<style scoped>
main {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;
}
.btn-playingAlternatives {
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
  margin-top: 20px;
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
  margin-bottom: -10px;
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
  width: 90%;
}
form {
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
article{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.checkmark-container {
  display: flex;
  width: 80%;
  height: 54px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-radius: 7px;
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
}

.choose-markercolor {
  display: flex;
  justify-content: space-between;
  width: 41px;
  height: 41px;
  border: 5px solid #ee9292;
  border-radius: 50%;
}
.choose-markercolor .checkmarkRed {
  width: 100%;
  height: 100%;
  background-color: #ee9292;
  border-radius: 50%;
  display: none;
}

.choose-markercolor .checkmarkYellow {
  width: 100%;
  height: 100%;
  background-color: #decf98;
  border-radius: 50%;
  display: none;
}
.choose-markercolor input {
  display: none;
}

.choose-markercolor input:checked + .checkmark {
  display: inline-block;
}
#playerColor-yellow {
  border: 5px solid #decf98;
}

.choose-difficulty {
  font-family: "Rajdhani", sans-serif;
  color: #424040;
  font-weight: 660;
  font-size: 36px;
  appearance: none;
  background-image: url("../assets/DropdownArrow.svg");
  background-repeat: no-repeat;
  background-position: right;
  width: 255px;
  height: 54px;
  border-style: none;
  border-radius: 7px;
}
</style>
