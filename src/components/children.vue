<template>
    <div>
        <h1>这是一个<span class="odd">{{son}}</span>组件</h1>
        <p><b>渲染数组</b></p>
        <ul>
            <li v-for="(item, index) in items" :key="index" :class="{odd: index%2}">
                {{index}}----{{item.name}}---{{item.data}}
            </li>
        </ul>
        <p><b>渲染对象</b></p>
        <p v-for="(value, key, index) in objList" :key="index">
            {{key}}------{{value}}
        </p>
        <p><b>渲染组件</b></p>
        <Demo v-for="(value, key, index) in objList" :key="key+index" :title="key+index"/>
        <p><b>事件</b></p>
        <button @click="addItem" >addItem</button>
        <p><b>样式、class绑定</b></p>
        <div>
            <a :href="href" :class="classArr" :style="linkCss" target="_blank"> to Baidu </a>
        </div>
        <p><b>v-if v-show</b></p>
        <div>
            <a v-if="isShow"> partAAA </a>
            <a v-else> NO AAA </a>
            <!-- <a v-show="!isShow"> partBBB </a> -->
            <button @click="toggle"> toggle </button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Demo from './demo.vue'
export default {
    name: 'child',
    components: {
        Demo
    },
    data: () => {
        return{
            son: "儿子",
            href: "http://www.baidu.com",
            isShow: true,
            className: {
                "red-font": true,
                "green-font": false
            },
            classArr: ["red-font", {"font-weight": false}],
            linkCss:{
                "font-size": "20px",
                "color": "yellowgreen"
            },
            items: [
                {
                    name: 'html',
                    data: '2019'
                },
                {
                    name: 'css',
                    data: '2014'
                }
            ],
            objList:{
                name: 'lizhen',
                age: '23',
                price: '999+'
            }
        }
    },
    methods: {
        addItem () {//函数赋值  addItem:function () {} == addItem () {}
            Vue.set(this.items, 0 , { //vue全局方法强制改变 （改变的数组， 改变的值，  新值）
                name: "h5",
                data: "1999"
            })
            this.items.push({
                name: "js",
                data: "2000"
            });
            this.linkCss.color = 'red';
            console.log( this.items )
        },
        toggle () {
            this.isShow = !this.isShow
            console.log(this.isShow)
        }
    }
}
</script>

<style>
    b{
        color: greenyellow;
    }
    li{
        list-style-type: none;
    }
    .odd{
        color: green;
    }
</style>