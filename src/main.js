
import Vue from 'vue';
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import VueResource from 'vue-resource';
// import $ from 'jquery';
import VueCookie from 'vue-cookie';
import underscore from 'vue-underscore';
import VueIntercom from 'vue-intercom';
import VueGtag from 'vue-gtag';

//Import Styles
import './assets/styles/styles.css'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueResource);
Vue.use(VueCookie);
Vue.use(underscore);
Vue.use(VueIntercom, { appId: 'lctnmldz' });

Vue.use(VueGtag, {
  config: { id: 'UA-147697639-1' },
  // config: { id: ['UA-147697639-1','AW-783162594']}
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
