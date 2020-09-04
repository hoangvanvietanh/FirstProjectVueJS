import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin, DropdownPlugin  } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faChevronLeft,faBars,faAngleDown,faHome,faAddressCard,faTable,faUserTie, faKey,faCircleNotch,faFileWord,faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Bus from './components/bus'
import store from './store'
import CompHome from "./components/CompHome.vue";
//import CompLogin from "./components/CompLogin.vue";
import CompManagePost from "./components/CompManagePost.vue";
import CompManageTeam from "./components/CompManageTeam.vue";
import CompInfoUser from "./components/CompInfoUser.vue";
import CompDocuments from "./components/CompDocuments.vue";
import VueCarousel from 'vue-carousel';
import loader from "vue-ui-preloader";

library.add(faUserSecret, faChevronLeft,faBars, faAngleDown, faHome, faAddressCard,faTable,faUserTie,faKey,faCircleNotch,faFileWord,faTasks) 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Bus)
Vue.use(BootstrapVue)// Install BootstrapVue
Vue.use(IconsPlugin)// Optionally install the BootstrapVue icon components plugin
Vue.use(DropdownPlugin)
Vue.use(VueCarousel);
Vue.use(loader);
// Đăng kí một directive tùy biến cấp toàn cục với tên là `v-focus`
Vue.directive('focus', {
  // Khi phần tử liên quan được thêm vào DOM...
  inserted: function (el) {
    // Ta gán focus vào phần tử đó
    el.focus()
  }
})

const router = new VueRouter({
  routes: [
    { path: '/#', redirect: '/home'},
    // { path: '/login',name:'login' ,component: CompLogin, meta: { requireAuth: false }},
    { path: '/home', name: 'home',component: CompHome,meta: { requireAuth: true } },
    { path: '/manage-post', name : 'manage-post',component: CompManagePost,meta: { requireAuth: true } },
    { path: '/manage-team', name: 'manage-team',component: CompManageTeam,meta: { requireAuth: true } },
    { path: '/my-info', name: 'my-info',component: CompInfoUser,meta: { requireAuth: true } },
    { path: '/documents', name: 'documents',component: CompDocuments,meta: { requireAuth: false } },
  ],mode:'history'
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (!localStorage.getItem("apiToken")) {
      next("/");
    } else {
      to.meta.requireAuth = true;
      next();
    }
  } else {
    if((to.name == null) && localStorage.getItem("apiToken")){
      next("/home");
    }
    next();
  }
});

new Vue({
  router,
  store ,
  render: h => h(App),
}).$mount('#app')
