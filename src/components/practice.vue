<template>
    <div>
        <p>用户： {{user}}</p>
        <Son />
    </div>
</template>

<script>
import Son from './children.vue'
export default {
    name: 'Practice',
    data: ()=> {
        return{
            user: 'lizhen'
        }
    },
    components: {
        Son
    }
}
</script>

<style scoped>
    b{
        font-weight: bolder;
    }
</style>
