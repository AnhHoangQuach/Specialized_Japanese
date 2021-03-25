import Vue from 'vue'
import App from './App.vue'
import './icons.js'
import { BootstrapVue } from 'bootstrap-vue'
import { router } from './routes'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
