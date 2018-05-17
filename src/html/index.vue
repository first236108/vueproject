<template>
    <div>
        <h1 :class="{ch1:democlass}">asdfasdfasdf</h1>
        <button type="button" @click="sample">测试</button>
    </div>
</template>



<script>
    export default {
        name: 'index',
        data(){
            return {
                democlass:false
            }
        },
        methods:{
            sample:function(){
                this.democlass=!this.democlass;
            }
        }
    }
</script>

<style>
    .ch1{
        display:none;
        transition:all 1s ease;
    }
</style>