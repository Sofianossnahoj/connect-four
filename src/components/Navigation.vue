<template>
  <div class="nav-bar">
    <div class="nav-menu">
      <button class="menu-button" @click="goToPage('/')">Hem</button>

      <button class="menu-button" @click="goToPage('/rules')">Regler</button>

      <button class="menu-button" @click="goToPage('/history')">Historia</button>

      <button class="menu-button" @click="goToPage('/highscore')">Topp 10</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToPage(page) {
      const currentPage = this.$route.path;
      if (currentPage !== page) {
        this.$router.push(page);
      }
    }
  }
};
</script>

<style scoped>
.menu-button {
  width: 90px;
  height: 40px;
  background-color: #b6d4c6;
  border-radius: 8px;
  place-items: center;
  margin: 1rem;
  cursor: pointer;
  color: #464545;
  font-family: 'Open Sans', sans-serif;
  font-size: 14pt;
  border: 0;
  outline: 0;
  transition-duration: 0.4s;
}

.menu-button:hover {
  background-color: #EE9292; 
  color: #464545;
  box-shadow: 1px 8px 8px 0 rgba(0,0,0,0.2);
}

.nav-bar {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 4.2rem;
  background-color: #407378;
  margin: 0;
}
</style>