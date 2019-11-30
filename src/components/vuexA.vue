<template>
    <div class="a">
        <img src="../assets/danxiang.jpg" alt="">
        <b>Vuex状态管理A</b>
         <a href="https://vuex.vuejs.org/zh/guide/state.html">官网地址</a>
        <p>
            <button @click="zengjia">同步（mutation）price+5</button>
            <button @click="jianshao">异步（actions）price-5</button>
        </p>
    </div>
</template>
<script>
export default {
    methods: {
        zengjia () {
            this.$store.commit('increment', 5)
        },
        jianshao () {
            if(this.$store.state.totalPrice - 5 >= 0 ){
                this.$store.dispatch('add', 5)
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
    margin: 0 50px;
}
img{
    width: 400px;
    height: 400px;
    vertical-align: middle
} 
</style>