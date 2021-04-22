<template>

  <main>
    <desktopNavigation v-if="!desktopView"/>
    <article class="homeLanding">
      <section class="homeLogo">
        <h3>Välkommen till </h3>
        <h1>fyra i rad</h1> 
    </section>
      <router-link class="start__btn" to="/landing">
        start
      </router-link>
    </article>
  </main>
  
</template>

<script>
import desktopNavigation from "../components/Navigation.vue"; 
export default {
  

 data: () => {
   return {
     desktopView: true,
     showNavbar: true
   }
   },
   components: {
    desktopNavigation
  },

  methods: {
    handleView(){
      this.desktopView = window.innerWidth <=500;
    }
  },

  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
 }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ribeye&family=Open+Sans&family=Rajdhani:wght@300&display=swap');

.homeLanding {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.homeLogo{
  background: url("../assets/LogoMarkers.svg") bottom no-repeat ;
  height: 30%;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right:10px;
}
h3 {
  display: flex;
  height: 25%;
  width: 100%;
  font-size: 36px;
  font-family: 'Rajdhani', sans-serif;
  color: #464545;
  justify-content: center;
}
h1{
  display: flex;
  width: 100%;
  height: 25%;
  justify-content: center;
  font-family: 'Ribeye', cursive;
  color: #464545;
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;
  margin-top: -35px;

}
.start__btn{
height: 50px;
width: 234px;
background-color: #424040;
border-radius: 4px;
color: #C4C4C4;
font-family: 'Rajdhani', sans-serif;
font-size: 36px;
text-align: center;
text-decoration: none;
}

@media screen and (min-width: 500px){
  


 .start__btn{
   width: 292px;
   height: 60px;
 }
}
@media screen and (min-width: 620px){
  
 .homeLogo {
   background-size: 545px 107px;
   height: 50%;
 }
 h1 {
   font-size: 96px;
 }
 h3{
   font-size: 72px;
 }
}
</style>