<template>
    <div>
        <div>
            <h2>计算属性</h2>
            <input type="text" v-model="myValue" />
            <br />
            <b>计算属性和methods的区别</b>
            <br>
            {{ getMyValWithoutNum() }}
            {{ myValueWithoutNum }}
        </div>
        <div>
            <h2>属性监听</h2>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myValue: ""
        };
    },
    computed: {
        myValueWithoutNum() {
            return Date.now();
        }
    },
    watch: {
        myValue: (val, oldVal)=> {  
            console.log( val, "旧值是------------" + oldVal)
        }
    },
    methods: {
        getMyValWithoutNum() {
            return Date.now();
        }
    }
};
</script>