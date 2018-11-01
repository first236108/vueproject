// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import axios from 'axios';
import toast from 'vue-toasted';

Vue.use(VueAwesomeSwiper);
Vue.use(toast);

Vue.prototype.axios=axios.create({baseURL:'http://api.scsj.net.cn'});

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
});
