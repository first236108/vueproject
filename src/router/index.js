import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/html/HelloWorld';
import index from '@/html/index';
import about from '@/html/about';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(NProgress);

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
    ]
});

router.beforeEach((to, from, next) => {
    NProgress.set(0.1);
    next();
});

router.afterEach((to, from) => {
    NProgress.done();
});

export default router;