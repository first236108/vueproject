<template>
    <carrousel :images="data.slide"></carrousel>
</template>


<script>
    import carrousel from '../components/carousel';
    export default {
        name: 'index',
        data() {
            return {
                democlass: false,
                data:{}
            };
        },
        components: {
            carrousel
        },
        created(){
            // toast.show('网络错误,请稍后再试');
            this.axios.post('/sms',{
                'phoneNo':'13007686112'
            }).then(res=>{
                console.log(res);
            }).catch(e=>{
                 this.$toasted.show("Toasted !!", {
                     theme: "primary",
                     position: "bottom-center",
                     duration : 1000,
                 });
            });
        }
    }
</script>

<style>

</style>