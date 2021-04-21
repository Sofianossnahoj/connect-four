<template>
  <main>
    <Navigation /> 
    <section class="rules-text">
      <h1>Regler</h1>
      <p v-html="players"></p>
      <p>Målet är att lägga fyra av sina brickor i rad på spelplanen. Raden kan vara antingen vågrätt, lodrätt eller diagonal.</p>
      <p>Spelet börjar med att deltagarna väljer färg på sina brickor. Därefter turas de om att spela en bricka i taget genom att klicka på den lodräta kolumn där de vill lägga den.</p>
      <p>Det gäller att vara strategisk. Samtidigt som deltagarna försöker lägga sin rad måste de hindra sin motståndare från att göra detsamma.</p>
      <p>Den som först lyckas få fyra i rad vinner.</p>
      <p>Om brädet fylls utan att någon fått fyra brickor i rad slutar spelet oavgjort.</p>
    </section>
    <section class="win-info">
      <h3 class="winning-positions">Så här vinner du:</h3>
      <article class="winning-boards">
        <img src="../assets/horizontal-win.jpg" alt="horizontal-win" class="horizontal-win" >
        <img src="../assets/vertical-win.jpg" alt="vertical-win" class="vertical-win">
        <img src="../assets/diagonal-45-win.jpg" alt="diagonal-45-win" class="diagonal-45-win">
        <img src="../assets/diagonal-135-win.jpg" alt="diagonal-135-win" class="diagonal-135-win">
      </article>
    </section>
  </main>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  components: {
    Navigation
  },
  computed: {
    players() {
      return `<b>Antal spelare:</b> Två`
    }
  }
}
</script>

<style scoped>
/* Har problem med att innehållet spiller över bodyn och skulle behöva hjälp att fixa det */

main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rules-text {
  max-width: 800px;
  margin-left: 5%;
  margin-right: 5%;
}

.win-info {
  max-width: 800px;
  margin-left: 5%;
  margin-right: 5%;
}

.winning-boards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 30px;
  /* grid-template-areas: "winning-positions winning-positions"
  "horizontal-win vertical-win"
  "diagonal-45-win diagonal-135-win"; */
}

img {
  max-width: 100%;
}

h1 {
  font-family: 'Rajdhani', sans-serif;
  font-size: 70px;
  /* line-height: 89.32px; */
  /* padding-bottom: 0; */
  margin-bottom: 0;
}

h3 {
  font-family: 'Rajdhani', sans-serif;
  font-size: 36px;
  /* padding-bottom: 0; */
  margin-bottom: 10px;
}

p {
  font-family: 'Open Sans', sans-serif;
}

@media screen and (max-width: 500px) {
  .winning-boards {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 36px;

  }

  h3 {
    font-size: 24px;
  }
}
</style>
