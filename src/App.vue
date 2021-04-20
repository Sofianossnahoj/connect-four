<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
