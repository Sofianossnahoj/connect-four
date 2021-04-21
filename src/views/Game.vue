<template>
  <main>
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
  </main>
</template>

<script>
// import board from '../game/board.js'

export default {
  data() {
    return {
      playable: true
    }
  },
  methods: {
    getRow(e) {
      const row = Number(e.target.getAttribute('data-row'));
      if (this.playable && row !== null) {
        console.log(row);
      }
    }
  }
}
</script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}

div.game {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 10px;
  background-color: #407378;
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

div.game div.player-two {
  background-color: #DECF98;
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
}
</style>