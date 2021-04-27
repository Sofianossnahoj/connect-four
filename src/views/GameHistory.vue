<template>
  <main ALINK="#464545" >
    <Navigation />
    <section class="history-text">
      <h1>Spelets historia</h1>
      <p><i>Fyra i rad</i> är ett strategiskt sällskapsspel inspirerat av luffarschack. Det har spelats i olika varianter under hundratals år och blivit känt under namn som <i>Connect Four</i> (Koppla ihop fyra), <i>Captain’s Mistress</i> (Kaptenens älskarinna) eller som det hette i Sovjetunionen; <i>Gravitrips</i>.</p>
      <p>Det är okänt när exakt spelet uppfanns, men en av de tidigaste utövarna ska enligt sägnen ha varit kapten James Cook på 1700-talet. Under sina resor ska han ofta ha fördrivit tiden med att spela mot sina medresenärer, främst naturalisten Joseph Banks och botanisten Daniel Solander. Kapten Cook ska spenderat så mycket tid på spelet att det blev allmänt känt som <i>Captain’s Mistress</i>.</p>
      <p>Den moderna versionen av spelet uppfanns 1973 av Howard Wexler och hans kollega Ned Strongin. Enligt Wexler var tanken att skapa ett strategiskt sällskapsspel som passar alla åldrar. Det som utmärker Wexlers och Strongins variant är det unika sättet att återställa spelplanen. Istället för att vända upp- och ner på hela planen släpps brickorna ner genom att frigöra botten.</p>
      <p>Spelet patenterades och började säljas 1974 under namnet <i>Connect 4</i> av Milton Bradley Company (numera Hasbro). Företaget har även producerat spel som <i>Twister</i>, <i>Yatzy</i>, <i>Jenga</i> och <i>Vem där?</i></p>

      <img src="../assets/LogoMarkers.svg" alt="logo-markers" class="logo-markers">

      <p><b>Visste du att:</b>
        <ul>
          <li>På en klassisk 6x7 Fyra i rad-spelplan finns det totalt över fyra triljoner(!) möjliga drag att spela. Det finns också lite mindre än två triljoner möjliga sätt att vinna</li>
          <li>Det finns en perfekt spelmetod som garanterar vinst varje gång. Om man följer metoden perfekt och lyckas placera en av sina brickor i nedersta raden i mitten-kolumnen, så vinner spelaren efter 41 drag oavsett motståndare. Metoden är baserad på den matematiska lösningen av spelet, som knäcktes första gången 1988 av James Dow Allen.</li>
        </ul>
      </p>

      <p class="history-links"><b>Källor:</b> <a class="history-links" href="https://www.gamesver.com/a-brief-history-of-connect-4-four-in-a-row/">Gamesver</a> <a class="history-links" href="https://www.youtube.com/watch?v=yDWPi1pZ0Po">Numberphile</a> <a class="history-links" href="http://oeis.org/A212693">The OEIS Foundation</a> <a class="history-links" href="https://www.tradgames.org.uk/games/Four-in-a-row.htm">Tradgames</a> <a class="history-links" href="https://en.wikipedia.org/wiki/Connect_Four">Wikipedia</a>
      </p>
    </section>
  </main>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  components: {
    Navigation
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
  color: #464545;
}

.history-text {
  max-width: 800px;
  margin-left: 5%;
  margin-right: 5%;
}

.history-links {
  color:#464545;
  cursor: pointer;
  margin-left: 10px;
  margin-top: 1.5rem;
}

.logo-markers {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  font-family: 'Rajdhani', sans-serif;
  font-size: 70px;
  margin-bottom: 0;
}

p {
  font-family: 'Open Sans', sans-serif;
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 36px;
  }
}

</style>