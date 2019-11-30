<template>
    <div>
        <i>{{hello}}</i> <br>
        <b>{{childerenName}}</b>
        <button @click="emitMyEvent">emit</button>
        <slot name="header">
            <p>xxxx header</p>
        </slot>
        <p>body</p>
        <slot name="footer">
            <p>yyyy footer</p>
        </slot>
    </div>
</template>

<script>
export default {
    props: {
        "childeren-name": [Number, String]
    },
    data () {
        return {
            hello: 'I am component A;'
        }
    },
    methods: {
        emitMyEvent () {
            console.log( this.childerenName );  
            this.$emit('my-event', this.hello);
        }
    },
}
</script>