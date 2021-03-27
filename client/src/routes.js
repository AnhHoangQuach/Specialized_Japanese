import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopContent from './components/ShopContent.vue';
import Help from './components/Help'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', name: 'ShopContent', component: ShopContent},
        {path: '/help', name: 'Help', component: Help}
    ]
})