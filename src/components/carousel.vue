<template>
    <div class="carrousel">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(img, key) in images">
                <a :href="img.link"><img :src="img.path" alt="img.description"></a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    import 'swiper/dist/css/swiper.css';

    export default {
        name: 'carousel',
        component: {
            swiper, swiperSlide
        },
        props: {
            images: {
                type: Array,
                default: function () {
                    return [
                        {link: 'http://www.baidu.com', path: 'http://mallscsj.oss-cn-beijing.aliyuncs.com//test/upload/ad/20180514/3GPSx6a5NX.jpg', description: '第一张'},
                        {link: 'http://www.163.com', path: 'http://mallscsj.oss-cn-beijing.aliyuncs.com//test/upload/ad/20180514/BpADm7ZAbM.jpg', description: '第二张'},
                    ];
                }
            },
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true,
                    },
                    loop: true,
                    effect: 'fade',//fade,flip
                    lazy: {
                        loadPrevNext: true,
                    },
                    zoom : true,
                }
            };
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        mounted() {
            let total=parseInt(this.images.length/2)+1;
            this.swiper.slideTo(total, 1000, false);
        }
    };
</script>

<style>
    .carrousel {
        height: 16rem;
    }

    .swiper-container {
        height: 100%;
    }

</style>