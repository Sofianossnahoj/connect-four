<template>
  <div class="nav-bar">
    
    <button @click="navOpen = !navOpen" class="hamburger-nav">
      <span v-if="!navOpen">&#9776;</span>
      <span v-else>&#x2715;</span>
    </button>

    <div class="title">
      <h1 class="corner-title" @click="goToPage('/landing')">FYRA I RAD</h1>
    </div>

    <div class="nav-menu">  
      <button class="menu-button" @click="goToPage('/landing')">START</button>
      <button class="menu-button" @click="goToPage('/rules')">REGLER</button>
      <button class="menu-button" @click="goToPage('/history')">HISTORIA</button>
      <button class="menu-button" @click="goToPage('/highscore')">TOPP 10</button>
    </div>

    <div class="nav-expanded" v-if="navOpen">
      <button class="menu-button" @click="goToPage('/landing')">START</button>
      <button class="menu-button" @click="goToPage('/rules')">REGLER</button>
      <button class="menu-button" @click="goToPage('/history')">HISTORIA</button>
      <button class="menu-button" @click="goToPage('/highscore')">TOPP 10</button>
    </div>

  </div>
</template>

<script>
export default {
   data() {
    return {
      navOpen: false,
    };
  },
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
  width: 6rem;
  height: 2.5rem;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.2rem;
  background-color: #407378;
  margin: 0;
}

.corner-title {
  color: #b6d4c6;
  font-family: 'Ribeye', cursive;
  margin-left: 1rem;
  margin-right: 1rem;
}

.corner-title:hover {
  cursor: pointer;
}

.hamburger-nav {
  color: #464545;
  font-size: 2.5rem;
  margin-left: 1rem;
  margin-bottom: .3rem;
  background-color:  #b6d4c6;
  border: 0;
  outline: 0;
  cursor: pointer;
}

.nav-expanded {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 4.2rem;
  padding: 2rem 0 2rem 4rem;
  width: 100%;
  background-color: rgb(182, 212, 198);
  align-items: left;
  border-bottom: 2px solid #407378;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.nav-expanded .menu-button {
  display: flex;
  align-items: left;
  margin: .5rem;
  font-size: 1.3rem;
  color: #464545;
}

@media only screen and (min-width: 800px) {
  .hamburger-nav {
    display: none;
  }
  .nav-expanded {
    display: none;
  }
  .nav-menu {
    display: block;
  }
}

@media only screen and (max-width: 800px) {
  .nav-menu {
    display: none;
  }
  .nav-bar {
    background-color: transparent;
  }
  .hamburger-nav {
    display: block;
    margin-left: 0;
  }
  .corner-title {
    color: #464545;
    font-size: 1.5rem;
  }
  .nav-expanded .menu-button {
    font-size: 1rem;
    width: 8rem;
    height: 0;
    padding: 1rem;
    z-index: 150;
  }
}
</style>