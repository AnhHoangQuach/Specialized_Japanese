import Vue from 'vue'
import App from './App.vue'
import './icons.js'
import { BootstrapVue } from 'bootstrap-vue'
import { router } from './routes'
import VueToastr from "vue-toastr"
import store from '@/store/store'

Vue.use(BootstrapVue)
Vue.use(VueToastr)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
