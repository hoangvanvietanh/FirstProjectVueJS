import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faChevronLeft,faBars,faAngleDown,faHome,faAddressCard,faTable } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faUserSecret, faChevronLeft,faBars, faAngleDown, faHome, faAddressCard,faTable)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


new Vue({
  render: h => h(App),
}).$mount('#app')
