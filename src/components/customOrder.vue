<template>
    <div>
        <h2>自定义指令</h2>
        <p v-color=" 'red' ">Hello world!</p>
        <input type="text" v-focus>自动获取光标
    </div>
</template>

<script>
export default {
    directives: {
        color (el, binding) {
            console.log(el);
            console.log(binding);
            el.style.color = binding.value;
        },
        focus: {
            inserted (el, binding) {
                el.focus();
                console.log( binding )
            }
        }
    }
}
</script>