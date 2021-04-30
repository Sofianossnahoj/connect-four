<template>
  <main>
    <Navigation />
    <section class="rules-text">
      <h1>Regler</h1>
      <p><b>Antal spelare:</b> Två</p>
      <p>
        Målet är att lägga fyra av sina brickor i rad på spelplanen. Raden kan
        vara antingen vågrätt, lodrätt eller diagonal.
      </p>
      <p>
        Spelet börjar med att deltagarna väljer färg på sina brickor. Därefter
        turas de om att spela en bricka i taget genom att klicka på den lodräta
        kolumn där de vill lägga den.
      </p>
      <p>
        Det gäller att vara strategisk. Samtidigt som deltagarna försöker lägga
        sin rad måste de hindra sin motståndare från att göra detsamma.
      </p>
      <p>Den som först lyckas få fyra i rad vinner.</p>
      <p>
        Om brädet fylls utan att någon fått fyra brickor i rad slutar spelet
        oavgjort.
      </p>
    </section>
    <section class="win-info">
      <h3 class="winning-positions">Så här vinner du:</h3>
      <article class="winning-boards">
        <img
          src="../assets/Horizontal.jpg"
          alt="horizontal-win"
          class="horizontal-win"
        />
        <img
          src="../assets/Vertical.jpg"
          alt="vertical-win"
          class="vertical-win"
        />
        <img
          src="../assets/Diagonal45.jpg"
          alt="diagonal-45-win"
          class="diagonal-45-win"
        />
        <img
          src="../assets/Diagonal135.jpg"
          alt="diagonal-135-win"
          class="diagonal-135-win"
        />
      </article>
    </section>
  </main>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  components: {
    Navigation,
  },
};
</script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #464545;
}

.rules-text {
  max-width: 800px;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 1.2rem;
  line-height: 1.8;
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
  margin-bottom: 5%;
}

img {
  max-width: 100%;
}

h1 {
  font-family: "Rajdhani", sans-serif;
  font-size: 70px;
  margin-bottom: 0;
}

h3 {
  font-family: "Rajdhani", sans-serif;
  font-size: 36px;
  margin-bottom: 10px;
}

p {
  font-family: "Open Sans", sans-serif;
}

@media screen and (max-width: 500px) {
  .winning-boards {
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  h1 {
    font-size: 36px;
  }

  h3 {
    font-size: 24px;
  }
}
</style>
