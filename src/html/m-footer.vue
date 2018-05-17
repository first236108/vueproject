<template>
    <footer>
        <go-top></go-top>
    </footer>
</template>

<script>
    import goTop from '../components/go-top';

    export default {
        name: 'm-footer',
        data() {
            return {
                scroll: false,
            };
        },
        components:{
            goTop
        },
    };
</script>

<style>
    footer {
        color: #fff;
    }



</style>