import Api from '@/services/Api'
export default {
    createOrder(data) {
        return Api().post('orders/create', data)
    }
}