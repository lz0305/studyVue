export default {
    state: {
        totalPrice: 0.1
    },
    mutations: {//Mutation 必须是同步函数
        increment ( state, price) {
            state.totalPrice += price
        },
        decrement ( state, price) {
            state.totalPrice -= price
        }
    },
    actions: {//dispatch 分发
        add ( context, price) {
            console.log( context );
            context.commit("decrement", price)
        }
    },
    getters: {//getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。类似于中介
        getPrice ( state ) {
            return state.totalPrice
        }
    }
}