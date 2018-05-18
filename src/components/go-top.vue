<template>
    <div class="pagetop animated" :class="[{fadeInUp:scroll},{fadeOutDown:fadeout},{dis_none:display_init}]">
        <a @click="toTop(400)" class="btn_pagetop"><span>TOP</span></a>
    </div>
</template>

<script>
    export default{
        name: 'go-top',
        data() {
            return {
                scroll: false,
                display_init:true,
                fadeout:false
            };
        },
        methods: {
            toTop(scrollDuration){
                let cosParameter = window.scrollY / 2,
                    scrollCount = 0,
                    oldTimestamp = performance.now();
                function step (newTimestamp) {
                    scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
                    if (scrollCount >= Math.PI) window.scrollTo(0, 0);
                    if (window.scrollY === 0) return;
                    window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
                    oldTimestamp = newTimestamp;
                    window.requestAnimationFrame(step);
                }
                window.requestAnimationFrame(step);
                // document.getElementsByClassName('pagetop')[0].style.display='none';
            }
        },
        created() {
            let vm=this;
            window.onscroll=function(){
                if (document.documentElement.scrollTop>100) {
                    document.getElementsByClassName('pagetop')[0].style.display='block';
                    vm.display_init=false;
                    vm.fadeout=false;
                    vm.scroll=true;
                }else {
                    if (!vm.display_init){
                        vm.fadeout = true;
                        vm.scroll && setTimeout(()=>{document.getElementsByClassName('pagetop')[0].style.display='none';},300);
                    }
                    vm.scroll=false;
                }
            }
        }
    }
</script>

<style>
    .pagetop {
        position: fixed;
        width: 58px;
        height: 58px;
        right: 5%;
        bottom: 55px;
        z-index: 100;
        transition:all 0.7s ease-out;
    }

    .dis_none{
        display: none;
    }

    .btn_pagetop {
        display: block;
        height: 100%;
        background: rgba(231, 32, 138, 0.68);
        border-radius: 50%;
        text-align: center;
        letter-spacing: 0.2em;
        opacity: 0.7;
        color: #fff;
        line-height: 4.5rem;
        font-size: 0.5rem;
        text-decoration-line: none;
    }

    .btn_pagetop::before {
        content: "";
        display: block;
        width: 2px;
        height: 10px;
        top: 11px;
        background: #ffffff;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
    }

    .btn_pagetop::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        top: 11px;
        border-top: 2px solid #ffffff;
        border-right: 2px solid #ffffff;
        transform: rotate(-45deg);
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
    }
</style>