import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/users'
import posts from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    posts
  }
})