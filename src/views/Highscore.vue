<template>
  <main>
    <Navigation />
    <div class="highscore">
      <div class="highscore-title">
          <h2>TOPP 10 in progress</h2>
      </div>
      <div class="top-list">
        <p class="yellow">1. Mom</p>
        <p class="green">2. Dad</p>
        <p class="yellow">3. Sam</p>
        <p class="green">4. Sara</p>
        <p class="yellow">5. Batman</p>
        <p class="green">6. Wolverine</p>
        <p class="yellow">7. Storm</p>
        <p class="green">8. Theo</p>
        <p class="yellow">9. Tom</p>
        <p class="green">10. Lily</p>
      </div>
    </div>
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
}

.highscore {
  width: 800px;
  margin-left: 20%; 
}

.highscore-title {
  font-family: 'Rajdhani', sans-serif;
  font-size: 2.7rem;
  color: #464545;
  margin-top: 1.5rem;
}

.top-list {
  font-family: 'Rajdhani', sans-serif;
  font-size: 2rem;
  max-width: 800px;
  margin: 0;
}

p {
  margin: .5rem;
  color: #464545;
}

p.yellow {
  background-color: #DECF98;
}

@media screen and (max-width: 800px) {
  h2{
    font-size: 36px;
    margin-left: 1rem;
  }

  .top-list {
    max-width: 350px;
  }

  .highscore {
    margin-left: 5%;
    width: 100%;
  }
}



</style>