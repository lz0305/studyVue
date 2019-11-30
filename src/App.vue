<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3>{{price}}</h3>
    <ul>
      <li>
        <router-link to="/">vue-x</router-link>
        <!-- v-for语法、样式盒子名绑定等 -->
        <router-link to="/practice">练习</router-link>
        <!-- v-model和子传父 -->
        <router-link to="/form">表单</router-link>
        <!-- 深入组件 -->
        <router-link to="/zujian">组件</router-link>
        <!-- <computedDemo />  -->
        <router-link to="/computedDemo">计算属性</router-link>
        <!-- <过渡动画 />  -->
        <router-link to="/animate">动画</router-link>
        <!-- 自定义指令 -->
        <router-link to="/customOrder">自定义指令</router-link>
        <!-- 路由传参 -->
        <router-link to="./route/red">直接跳转路由传参</router-link>
        <router-link :to="{name: 'route',params: {color: color}}">(命名)路由传参</router-link>
      </li>
    </ul>
    <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in">
      <keep-alive>
        <router-view class="view one"></router-view>
      </keep-alive>
    </transition>
      <router-view class="view two" name="a"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      color: 'yellowGreen'
    }
  },
  computed: {
    price () {
      return this.$store.getters.getPrice
    }
  }
}
</script>

<style>
body{
  background: #ddd;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  padding: 5px 10px;
  color: #000;
}
a:hover{
  color: red;
}
</style>
