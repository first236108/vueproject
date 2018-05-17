<template>
    <div>
        <a>{{aaa}}-{{bbb}}</a>
        <router-link to="/index">首页</router-link>
    </div>
</template>



<script>
    export default {
        name: 'subs',
        props:['aaa','bbb']
    }
</script>