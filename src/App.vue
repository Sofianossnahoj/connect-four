<template>
  <div id="app">
    <router-view  @settings="saveSettings"
                  :playerOne="playerOne"
                  :playerTwo="playerTwo"
                  :versusAI="playAgainstBot"
                  :spectateAI="spectateAI"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerOne: "",
      playerTwo: "",
      playAgainstBot: false, 
      spectateAI: false
    }
  },
  methods: {
    saveSettings(payload) {
      this.playerOne = payload.playerOne
      this.playerTwo = payload.playerTwo
      this.playAgainstBot = payload.playAgainstBot || false
      this.spectateAI = payload.spectateAI || false
    }
  }
}


</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Ribeye&family=Open+Sans&family=Rajdhani:wght@300&display=swap');

/*
  FONTS
    font-family: 'Open Sans', sans-serif;
    font-family: 'Rajdhani', sans-serif;
    font-family: 'Ribeye', cursive;
*/

/*
  COLOURS
    #B6D4C6 - Light green
    #407378 - Dark teal
    #DECF98 - Yellow
    #EE9292 - Coral
    #464545 - Coffee
*/

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #B6D4C6;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
