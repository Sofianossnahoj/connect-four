<template>

  <main class="homeLanding">
    <section class="homeLogo">
      <h1>Välkommen till fyra i rad</h1> 
    </section>
    <router-link class="start__btn" to="/landing">
      start
    </router-link>
  </main>
  
</template>

<script>
export default {

}
</script>

<style>
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
  display: flex;
  justify-content: center;
  height: 30%;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right:10px;
}
h1{
  display: flex;
  width: 100%;
  font-family: 'Ribeye', cursive;
  color: #464545;
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;
text-shadow: 0px 1px 0px rgb(129, 128, 128);
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

</style>