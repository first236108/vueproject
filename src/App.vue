
<template>
    <div id="app" ref="viewBox">
        <m-header></m-header>
        <router-view></router-view>
        <m-footer></m-footer>
    </div>
</template>

<script>
    import mHeader from './components/m-header';
    import mFooter from './components/m-footer';
    export default {
        name: 'App',
        data(){
            return{
                box:''
            }
        },
        components:{
            mHeader,mFooter
        },

    };
</script>
<style>
    @import "./assets/css/common.css";
    @import "./assets/css/animate.css";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
