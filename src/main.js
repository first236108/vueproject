// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import axios from 'axios';
import Toasted from 'vue-toasted';

Vue.use(VueAwesomeSwiper);
Vue.use(Toasted);

Vue.prototype.axios=axios.create({baseURL:'http://test.ap.scsj.net.cn'});
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
    created:()=>{
        this.$toasted.show('asdf');
        // console.log(this.$toasted.show('网络错误,请稍后再试'));
    }
});
