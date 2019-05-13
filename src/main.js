import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import lodash from 'lodash';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
Vue.prototype._= lodash;
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
