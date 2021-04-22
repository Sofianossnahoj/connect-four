<template>
  <div class="nav-bar">

    <button @click="navOpen = !navOpen" class ="hamburger-nav">
        &#9776;
    </button>

    <div class="title">
      <h1 class="corner-title">FYRA I RAD</h1>
    </div>

    <div class="nav-menu">
      
      <button class="menu-button" @click="goToPage('/')">HEM</button>

      <button class="menu-button" @click="goToPage('/rules')">REGLER</button>

      <button class="menu-button" @click="goToPage('/history')">HISTORIA</button>

      <button class="menu-button" @click="goToPage('/highscore')">TOPP 10</button>

    </div>

    <div class="nav-expanded">

      <button class="menu-button" @click="goToPage('/')">HEM</button>

      <button class="menu-button" @click="goToPage('/rules')">REGLER</button>

      <button class="menu-button" @click="goToPage('/history')">HISTORIA</button>

      <button class="menu-button" @click="goToPage('/highscore')">TOPP 10</button>

    </div>

 

  </div>
</template>

<script>
export default {
   data: function () {
    return {
      navOpen: true,
    };
  },
  methods: {
    goToPage(page) {
      const currentPage = this.$route.path;
      if (currentPage !== page) {
        this.$router.push(page);
      }
    }
    /* goToPage(page) {
      const currentPage = this.$route.path;
      if (currentPage === page) {
        this.$emit('close-nav');
      } else {
        this.$router.push(page);
      }
    }*/
  }
};
</script>

<style scoped>
.menu-button {
  width: 98px;
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

.hamburger-nav {
 color: #407378;
 font-size: 2.5rem;
 margin-left: 1rem;
 margin-bottom: .3rem;
 background-color:  #b6d4c6;
 border: 0;
 outline: 0;

}

.nav-expanded {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 18rem;
  padding-left: 4rem;
  width: 100%;
  background-color: #b6d4c6;
  align-items: left;
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
  }
  .corner-title {
    color: #464545;
  }
}

</style>