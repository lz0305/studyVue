<template>
    <div>
        <h2>深入组件</h2>
        <div>
            <input type="text" v-model.number="demo1">
            <demo :childeren-name="demo1">
                <p slot="header">我是插槽-----头部</p>
                <p slot="footer">我是插槽-----底部</p>
            </demo>
            <b>keep-alive 缓存组件，提升加载速度</b>
            <keep-alive>
                <p :is="demo" @my-event="shuchu"></p>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import Demo from './demo'
export default {
    components: {
        Demo
    },
    data() {
        return {
            demo: "demo",
            demo1: "",
        }
    },
    methods: {
        shuchu (){
            console.log("1111")
        }
    }
}
</script>