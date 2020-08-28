import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, DropdownPlugin  } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faChevronLeft,faBars,faAngleDown,faHome,faAddressCard,faTable,faUserTie, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Bus from './components/bus'

library.add(faUserSecret, faChevronLeft,faBars, faAngleDown, faHome, faAddressCard,faTable,faUserTie,faKey)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(Bus)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(DropdownPlugin)
// Đăng kí một directive tùy biến cấp toàn cục với tên là `v-focus`
Vue.directive('focus', {
  // Khi phần tử liên quan được thêm vào DOM...
  inserted: function (el) {
    // Ta gán focus vào phần tử đó
    el.focus()
  }
})
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
 
  },
  mutations: {
    increment (state) {
      state.count++
      console.log("state====>"+state.count)
    }
  },
  actions: {
    
  }
})

new Vue({
  store ,
  render: h => h(App),
}).$mount('#app')
