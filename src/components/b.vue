<template>
    <div>
        我是动态组件BBBBBBBBBBB
        <h2>js动画过渡</h2>
        <p>
            当只用 JavaScript 过渡的时候，在 enter 和 leave 中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。
                <br>
            推荐对于仅使用 JavaScript 过渡的元素添加 v-bind:css="false"，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。
        </p>
        <div>
            <button @click="show = !show">toggle</button>
            <transition 
            @before-enter="beforeEnter" 
            @enter="enter" 
            @leave="leave" 
            :class="false">
                <p class="animate-p" v-show="show"> 我来啦~~~~~  </p>
            </transition>
        </div>
    </div>
</template>

<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
<script>
export default {
    data () {
        return {
            show: true
        }
    },
    methods: {
        beforeEnter: ( el ) => {
            $(el).css({
                left: '-500px',
                opacity: 0
            })
        },
        enter: (el, done) => {
            $(el).animate({
                left: 0,
                opacity: 1
            }, {
                duration: 1500,
                complete: done
            })
        },
        leave: (el, done) => {
            $(el).animate({
                left: '500px',
                opacity: 0
            }, {
                duration: 1500,
                complete: done
            })
        },
    }
}
</script>

<style scoped>
    .animate-p{
        position: absolute;
        left: 0;
    }
</style>