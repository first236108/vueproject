<template>
    <carrousel :images="res.slide"></carrousel>
</template>


<script>
    import carrousel from '../components/carousel';
    export default {
        name: 'index',
        data() {
            return {
                democlass: false
            };
        },
        components: {
            carrousel
        },
        created(){
            this.axios.post();
        }
    }
</script>

<style>

</style>