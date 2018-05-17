<template>
    <div>
        <h1>简介页面</h1>
        <subs :aaa="tel" :bbb="domain"></subs>
    </div>
</template>

<script>
    import subs from './sub';
    export default {
        name: 'about',
        components:{
            subs
        },
        data(){
            return {
                tel: '13007686112',
                domain:'igccc.com'
            }
        }
    }
</script>