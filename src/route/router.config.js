import Practice from '../components/practice.vue'
import Biaodan from '../components/form.vue'
import ComputedDemo from '../components/computed.vue'
import Zujian from '../components/shenruzujian.vue'
import DongHua from '../components/animate.vue'
import CustomOrder from '../components/customOrder.vue'
import ALuyou from '../components/luyou.vue'
import ChildRoute from '../components/childRoute.vue'
import VuexA from '../components/vuexA.vue'
import VuexB from '../components/vuexB.vue'

export default {
    mode: 'history',
    routes: [
        {
            path: "*",
            redirect: './animate'
        },
        {
            path: "/",
            components: {
                default: VuexA,
                a: VuexB
            }
        },
        
        {
            path: '/route/:color',
            name: 'route',
            components: {
                default: ALuyou,
                A: CustomOrder
            }, 
            children: [
                {
                    path: 'hhh',
                    component: ChildRoute
                }
            ]
        },
        {
            path: '/form',
            component: Biaodan
        },
        {
            path: '/practice',
            component: Practice 
        },
        {
            path: '/zujian',
            component: Zujian 
        },
        {
            path: '/computedDemo',
            component: ComputedDemo 
        },
        {
            path: '/animate',
            component: DongHua 
        },
        {
            path: '/customOrder',
            component: CustomOrder 
        },
        {
            path: '/practice',
            component: Practice 
        }
    ]
}