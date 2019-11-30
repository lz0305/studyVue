<template>
    <div>
        <h2>路由传参</h2>
        父组件路由传过来的参数是--------{{ $route.params.color }} <br>
        <button @click="getParams">get Params</button>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        getParams () {
            console.log(this.$route.params)
        }
    }
}
</script>