<template>
    <div class="a">
        <img src="../assets/vuex.png" alt="">
        <b>Vuex状态管理B</b>
        <p>
            <button @click="zengjia">同步（mutation）price+10</button>
            <button @click="jianshao">异步（actions）price-10</button>
        </p>
    </div>
</template>
<script>
export default {
    methods: {
        zengjia () {
            this.$store.commit('increment', 10)
        },
        jianshao () {
            if(this.$store.state.totalPrice - 10 >= 0 ){
                this.$store.dispatch('add', 10)
            }else{
                alert("已经是最小了")
            }
        }
    }
}
</script>
<style scoped>
b{
    color: #000;
}
.a{
    float: left;
}
img{
    width: 500px;
    height: 400px;
    vertical-align: middle
} 
</style>