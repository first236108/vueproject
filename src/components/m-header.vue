<template>
    <header class="sp is_absolute">
        <div class="h_inner cf">
            <div class="h_head cf">
                <h1 class="h_logo"><a href="/"><img src="../../static/images/logo.png" alt="天源美容"></a></h1>
                <ul class="h_sns cf animated" :class="[{flipInX:isopen},sns_active,{dis_none:!sns_active}]">
                    <li class="h_blog">
                        <a href="/blog/"><span>BLOG</span></a>
                    </li>
                    <li class="h_tw">
                        <a href="https://twitter.com/theatreacademy" target="_blank"><span>twitter</span></a>
                    </li>
                </ul>
                <div id="btn_sp" :class="{opened:isopen}" @click="toggle_menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    MENU
                </div>
            </div>
            <div class="h_bottom animated" :class="[{fadeInLeft:isopen},b_active,{dis_none:!b_active}]" @click="toggle_menu">
                <nav>
                    <ul>
                        <li @click.stop="init_menu"><router-link to="/index">欢迎页面</router-link></li>
                        <li @click.stop="init_menu"><router-link to="/">首页</router-link></li>
                        <li @click.stop="init_menu"><router-link to="/about">关于我们</router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'm-header',
        data() {
            return {
                'isopen': false,
                'sns_active': '',
                'b_active': '',
            };
        },
        methods: {
            init_menu:function(){
                this.toggle_menu();
                setTimeout(()=>{
                    this.sns_active=this.b_active='';
                    this.hide_element();
                },700);
            },
            toggle_menu: function() {
                this.isopen = !this.isopen;
                if (!this.isopen){
                    setTimeout(()=>{this.hide_element()},700);
                }
                this.sns_active = this.isopen  || 'flipOutX';
                this.b_active = this.isopen  || 'fadeOutRight';
            },
            hide_element:function(){
                document.getElementsByClassName('h_bottom')[0].classList.add('dis_none');
                document.getElementsByClassName('h_sns')[0].classList.add('dis_none');
            },
        }
    };
</script>

<style>
    header.is_absolute {
        animation-name: abHeader;
        animation-duration: 1s;
        animation-timing-function: ease;
        animation-play-state: running;
        height:65px;
    }

    header {
        position: fixed;
        width: 100%;
        height: auto;
        top: 0;
        left: 0;
        background: none;
    }

    .h_inner {
        width: 100%;
        padding: 0;
    }

    .h_logo {
        width: 100%;
        background: #ffffff;
        padding: 10px 0 0 10px;
        margin: 0;
        float: none;
        text-align: left;
    }

    .h_logo img{
        width:60%;
    }

    .h_head {
        margin-bottom: 0;
        position: relative;
    }

    .h_sns {
        width: 100%;
        margin: 0;
        padding: 7px 0;
        background: #e7208a;
        border-bottom: 1px solid rgba(231, 32, 138, 0.68);
        float: none;
        text-align: center;
    }

    .h_sns li {
        display: inline-block;
        width: 27px;
        height: 25px;
        float: none;
        margin: 0 8px;
    }

    .h_sns li a {
        background: url(/assets/images/h_sns_sp.png) no-repeat top center/272px;
    }

    .h_sns .h_blog {
        width: 38px;
        margin: 0 8px;
    }

    .h_sns .h_blog a {
        background-position: left 0 top 2px;
    }

    .h_sns .h_fb a {
        background-position: top 2px left -58px;
    }

    .h_sns .h_tw a {
        background-position: top 2px left -106px;
    }

    .h_sns .h_line a {
        background-position: top 0 left -152px;
    }

    .h_sns .h_insta a {
        background-position: top 2px right -48px;
    }

    .h_sns .h_yt a {
        background-position: top 2px right 0;
    }

    .h_bottom {
        padding: 0 0 80px;
        height: calc(100vh - 100px);
        overflow: auto;
        background: rgba(229, 0, 127,0.7);
        font-weight: bold;
    }

    .h_bottom li{
        list-style: none;
        display:block;
        padding-right:1rem;
        text-align: right;
        line-height:3rem;
    }

    .h_bottom a{
        color: #fff;
        text-decoration-line: none;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #fff;
    }

    #btn_sp {
        display: block;
        width: 46px;
        padding: 31px 0 0;
        background: #e7208a;
        position: absolute;
        top: 10px;
        right: 10px;
        color: #ffffff;
        text-align: center;
        font-size: 0.6rem;
    }

    #btn_sp span {
        display: block;
        width: 20px;
        height: 2px;
        position: absolute;
        right: 0;
        left: 0;
        margin: auto;
        background: #ffffff;
        transition: 0.1s linear;
    }

    #btn_sp span:first-child {
        transition-duration: .3s;
        top: 10px;
    }

    #btn_sp span:nth-child(2) {
        transition-duration: .3s;
        top: 17px;
    }

    #btn_sp span:nth-child(3) {
        transition-duration: .3s;
        top: 24px;
    }

    #btn_sp.opened span:first-child {
        transform: rotate(-45deg);
        transition-duration: .5s;
        top: 15px;
    }

    #btn_sp.opened span:nth-child(2) {
        transition-duration: .5s;
        display: none;
    }

    #btn_sp.opened span:nth-child(3) {
        transform: rotate(45deg);
        transition-duration: .5s;
        top: 15px;
    }
    .dis_none {
        display:none;
    }
</style>