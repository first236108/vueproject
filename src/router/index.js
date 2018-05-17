import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import index from '@/html/index';
import about from '@/html/about';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path:'/index',
            name:'index',
            component:index
        },
        {
            path:'/about',
            name:'about',
            component:about
        }
    ]
});
