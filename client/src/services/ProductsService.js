import Api from '@/services/Api'
export default {
    index () {
        return Api().get('products')
    },
    addProduct(credentials) {
        return Api().post('products/add-product', credentials)
    },
    getProduct(productId) {
        return Api().get(`products/${productId}`)
    },
    getProductsByUserId(userId) {
        return Api().get(`products/users/${userId}`)
    }
}