import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 全局引入vant
import vant from "vant";
import "vant/lib/index.css";
// vue-lazyload图片懒加载
import VueLazyLoad from 'vue-lazyload';

import FastClick from 'fastclick';


Vue.config.productionTip = false;

Vue.use(vant);

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require('./assets/img/common/lazyload_bg.png'),
  loading: require('./assets/img/common/error.png'),
  attempt: 1
})
// 解决移动端300ms延迟
FastClick.attach(document.body);

// 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
