<template>
    <div class="app__container2">
        <div class="grid wide" style="padding-bottom: 30px;">
            <div class="row sm-gutter">
                <div class="col l-9 m-9 c-12">
                    <div class="cart">
                        <h2 class="cart-product-title">Giỏ Hàng của bạn</h2>
                        <div class="cart-list">
                            <ul class="cart-product-list">
                                <li
                                    class="cart-product"
                                    v-for="item in carts"
                                    v-bind:key="item.productId._id"
                                >
                                    <img
                                        :src="item.productId.imageUrl"
                                        alt=""
                                        class="cart-product-img"
                                    />
                                    <div class="cart-product-content">
                                        <div class="cart-product-description">
                                            <a
                                                href=""
                                                class="cart-product-name"
                                                >{{
                                                    item.productId.description
                                                }}</a
                                            >
                                            <span class="cart-product-seller"
                                                >Cung cấp bởi:
                                                {{ item.productId.place }}</span
                                            >
                                            <p class="cart-product-action">
                                                <span
                                                    class="cart-product-remove"
                                                    ><a href="#">Xóa</a></span
                                                >
                                                <span
                                                    class="cart-product-buy-later"
                                                    >Dành để mua sau</span
                                                >
                                            </p>
                                        </div>
                                        <div class="cart-product-detail">
                                            <div class="cart-product-price">
                                                <p class="cart-product-current">
                                                    {{
                                                        formatNumber(
                                                            item.productId.price
                                                        )
                                                    }}đ
                                                </p>
                                                <p class="cart-product-old">
                                                    51651116đ
                                                </p>
                                                <p
                                                    class="cart-product-price-pay"
                                                ></p>
                                            </div>
                                            <div class="cart-product-more-less">
                                                <div class="cart-product-key">
                                                    <span
                                                        class="cart-product-less"
                                                        >-</span
                                                    >
                                                    <input
                                                        :id="item.productId._id"
                                                        :value="item.quantity"
                                                        class="cart-product-input"
                                                    />
                                                    <span
                                                        class="cart-product-more"
                                                        @click="
                                                            addMoreProduct(item)
                                                        "
                                                        >+</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col l-3 m-3 c-12">
                    <div class="cart-total-price">
                        <div class="cart-total-price-inner">
                            <div class="prices">
                                <ul class="prices__items">
                                    <li class="prices__item">
                                        <span class="price-text">Tạm tính</span>
                                        <span class="price-value"
                                            >456.000đ</span
                                        >
                                    </li>
                                </ul>
                                <p class="price-total">
                                    <span class="price-text">Thành tiền</span>
                                    <span
                                        class="price-value prices__value--final"
                                    >
                                        456.000đ
                                        <i>(Đã bao gồm phí VAT)</i>
                                    </span>
                                </p>
                            </div>
                            <router-link
                                :to="{ name: 'PayProduct' }"
                                class="cart__submit"
                            >
                                Tiến hành đặt hàng
                            </router-link>
                            <div class="cart-coupon">
                                <p class="coupon-title">
                                    Mã giảm giá / Quà tặng
                                </p>
                                <div class="coupon-inner">
                                    <input
                                        type="text"
                                        class="coupon-input"
                                        placeholder="nhập ở đây..."
                                    />
                                    <button class="coupon-button">
                                        Đồng ý
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsService from "@/services/ProductsService"
import $ from "jquery"
export default {
    data() {
        return {
            carts: null,
        }
    },
    methods: {
        async addMoreProduct(product) {
            var elementCount = $(`#${product.productId._id}`).val()
            var elementCountInc = parseInt(elementCount) + 1
            const response = await ProductsService.addMultiProduct({
                product: product,
                quantity: elementCountInc,
                userId: this.$store.state.user._id,
            })
            console.log(response)
            $(`#${product.productId._id}`).val(elementCountInc)
        },
        formatNumber: number => {
            var number_str = number.toString()
            return number_str.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    },
    async mounted() {
        const response = await ProductsService.getCart({
            user: this.$store.state.user,
        })
        this.carts = response.data.products
    },
}
</script>

<style scoped>
@import "../assets/css/pay.css";
</style>
