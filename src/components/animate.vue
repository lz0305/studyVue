<template>
    <div>
        <!-- <h2>过渡动画（css）</h2>
        <div>
            <Button type="button" @click="show = !show"> toggle Animate </Button>
            <transition name="fade">
                <p v-show="show">I is show! v-show也可以使用</p>
            </transition>
            <transition name="my-trans">
                <p>多元素过渡</p>
                <p v-if="show" key="1">v-if  如果是两个相同的标签需添加key值区分，不然动画不会执行</p>
                <p v-else key="2">v-else 出现</p>
            </transition>
        </div> -->
        <img src="../assets/animate.png" alt="">
        <hr>
        <transition name="fade" mode="out-in">
            <div :is="currentView"></div>
        </transition>
        <Button type="button" @click="toggleCom"> toggle Component </Button>
        <ul>
            <li>
                <a href="#">123123123</a>
                <ul>
                    <li>12312</li>
                    <li>12321</li>
                    <li>123123</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import comA from './a'
import comB from './b'
export default {
    components: {
        comA,
        comB
    },
    data () {
        return{
            show: true,
            currentView: 'com-b'
        }
    },
    methods: {
        toggleCom () {
            if( this.currentView === 'com-a' ){
                this.currentView = 'com-b'
            } else {
                this.currentView = 'com-a'
            }
        }
    }
}
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1.5s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }

    .my-trans-enter-active, .my-trans-leave-active {
        transition: all .5s ease;
    }
    .my-trans-enter{
        transform: translateY(-500px);
        opacity: 0;
    }
    .my-trans-leave-active{
        transform: translateY(500px);
        opacity: 0;
    }
    button{
        margin: 50px;
    }
</style>