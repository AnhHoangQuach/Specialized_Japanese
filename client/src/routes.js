import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopContent from './components/ShopContent.vue';
import Help from './components/Help.vue'
import UserInfo from './components/UserInfo.vue'
import Product from './components/Product.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', name: 'ShopContent', component: ShopContent},
        {path: '/help', name: 'Help', component: Help},
        {path: '/user/profile', name: 'UserInfo', component: UserInfo},
        {path: '/product/:id', name: 'Product', component: Product},
    ]
})