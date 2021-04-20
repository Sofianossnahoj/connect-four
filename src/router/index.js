import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rules from '../views/Rules.vue'
import GameHistory from '../views/GameHistory.vue'
import GameLanding from '../views/GameLanding.vue'
import Game from '../views/Game.vue'
import Highscore from '../views/Highscore.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/rules',
    component: Rules
  },
  {
    path: '/history',
    component: GameHistory
  },
  {
    path: '/landing',
    component: GameLanding
  },
  {
    path: '/game',
    component: Game
  },
  {
    path: '/highscore',
    component: Highscore
  }
]

const router = new VueRouter({
  routes
})

export default router
