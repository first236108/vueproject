<template>
    <header class="sp is_absolute">
        <div class="h_inner cf">
            <div class="h_head cf">
                <h1 class="h_logo"><a href="/"><img src="../assets/images/logo.png" alt="天源美容"></a></h1>
                <ul class="h_sns cf animated" :class="[{flipInX:isopen},sms_active,{dis_none:!sms_active}]">
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
                'sms_active': '',
                'b_active': '',
            };
        },
        methods: {
            init_menu:function(){
                this.toggle_menu();
                setTimeout(()=>{
                    this.sms_active=this.b_active='';
                },1000);
            },
            toggle_menu: function () {
                this.isopen = !this.isopen;
                this.sms_active = this.isopen  || 'flipOutX';
                this.b_active = this.isopen  || 'fadeOutRight';
            },
        }
    };
</script>