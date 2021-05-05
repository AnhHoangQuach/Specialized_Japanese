import Api from "@/services/Api"
export default {
    index() {
        return Api().get("products")
    },
    addProduct(credentials) {
        return Api().post("products/add-product", credentials)
    },
    getProduct(productId) {
        return Api().get(`products/${productId}`)
    },
    getProductsByUserId(userId) {
        return Api().get(`products/users/${userId}`)
    },
    deleteProductId(productId) {
        return Api().post("products/delete-product", productId)
    },
    addProductToCart(product) {
        return Api().post("products/cart", product)
    },
    getCart(user) {
        return Api().post("products/get-cart", user)
    },
    deleteProductCart(data) {
        return Api().post("products/cart-delete-item", data)
    },
}
