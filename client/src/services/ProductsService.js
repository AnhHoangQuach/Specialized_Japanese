import Api from '@/services/Api'
export default {
    index () {
        return Api().get('products')
    },

    addProduct(credentials) {
        return Api().post('products/add-product', credentials)
    }
}