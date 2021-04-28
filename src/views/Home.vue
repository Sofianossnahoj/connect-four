<template>
  <main>
    <Navigation v-if="!desktopView" />
    <article class="home-landing">
      <section class="home-logo">
        <h3>Välkommen till</h3>
        <h1>fyra i rad</h1>
      </section>
      <router-link class="start-btn" to="/landing">
        start
      </router-link>
    </article>
  </main>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  data: () => {
    return {
      desktopView: true,
    };
  },
  components: {
    Navigation,
  },

  methods: {
    handleView() {
      this.desktopView = window.innerWidth <= 800;
    },
  },

  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style scoped>
.home-landing {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;
}

.home-logo {
  background: url("../assets/LogoMarkers.svg") bottom no-repeat;
  height: 25%;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
h3 {
  display: flex;
  height: 25%;
  width: 100%;
  font-size: 36px;
  font-family: "Rajdhani", sans-serif;
  color: #464545;
  justify-content: center;
}
h1 {
  display: flex;
  width: 100%;
  height: 25%;
  justify-content: center;
  font-family: "Ribeye", cursive;
  color: #464545;
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;
  margin-top: -40px;
  padding-bottom: 20px;
}
.start-btn {
  display: flex;
  height: 50px;
  width: 234px;
  background-color: #424040;
  border-radius: 4px;
  color: #c4c4c4;
  font-family: "Rajdhani", sans-serif;
  font-size: 36px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
}

@media screen and (min-width: 500px) {
  .start-btn {
    width: 292px;
    height: 60px;
  }
}
@media screen and (min-width: 620px) {
  .home-logo {
    background-size: 545px 107px;
    height: 50%;
  }
  h1 {
    font-size: 96px;
  }
  h3 {
    font-size: 72px;
  }
}
</style>
