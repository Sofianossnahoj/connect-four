<template>
  <main>
    <navigationMenu />
    <section class="game-info">
      <p>
        I det klassiska spelet Fyra i rad spelar du för att vinna samtidigt som
        du måste se upp för motståndarens drag! Välj att spela mot familj/
        kompisar eller mot en bot. Först till fyra i rad vinner!
      </p>
      <form>
        <label>Namn:</label>
        <input
          type="text"
          class="input-name"
          name="playerName"
          v-model="enterName"
          required
        />
      </form>
      <form>
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
      </form>
    </section>
  </main>
</template>

<script>
import NavigationMenu from "../components/Navigation";
export default {
  components: { NavigationMenu },
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

.game-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90%;
  margin-bottom: 15px;
}

p {
  text-align: center;
  color: #464545;
  font-family: "Open Sans", sans-serif;
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
.checkmark-container {
  display: flex;
  width: 80%;
  height: 54px;
  flex-direction: row;
  justify-content:space-around;
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
  text-transform: uppercase;
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
