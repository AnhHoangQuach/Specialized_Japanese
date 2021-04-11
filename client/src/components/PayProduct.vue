<template>
    <div class="app">
        <div class="app__container">
            <div class="grid wide">
                <div class="row no-gutters">
                    <div class="col l-12 m-12 c-12">
                        <div class="status">
                    <div class="status-node">
                        <div class="status-text">Đăng nhập</div>
                        <div class="status-bar">
                            <div class="status-fill"></div>
                        </div>
                        <div class="status-circle">1</div>
                    </div>
                    <div class="status-node">
                        <div class="status-text">Địa chỉ giao hàng</div>
                        <div class="status-bar">
                            <div class="status-fill"></div>
                        </div>
                        <div class="status-circle">2</div>
                    </div>
                    <div class="status-node">
                        <div class="status-text">Thanh toán & Đặt mua</div>
                        <div class="status-circle">3</div>
                    </div>
                </div>
                        <div class="infor-address">
                            <div class="border-address"></div>
                            <div class="infor-address-main">
                                <div class="infor-address-text">Địa chỉ nhận hàng</div>
                                <div class="infor-address-content">
                                    <div class="infor-address-row">
                                        <div class="infor-address__user-detail">4124214214</div>
                                        <div class="infor-address-summary">42142142142142421afasfsaf</div>
                                    </div>
                                    <router-link :to="{name: 'ChangeUserInfo'}" class="infor-address-change">Thay đổi</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid wide">
                <div class="row no-gutters">
                    <div class="col l-12 m-12 c-12">
                        <div class="product-order">
                            <div class="product-order-title">Sản phẩm</div>
                            <div class="product-order-detail">
                                <ul class="product-order-list">
                                    
                                    
                                    <li class="product-order-one">
                                        <img src="https://cf.shopee.vn/file/089e81de274701dcdd765952c524dde3" alt="ảnh" class="product-order-img">
                                        <div class="product-order-content">
                                            <div class="product-order-name">2</div>
                                            <div class="product-order-price">13213213đ</div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="product-order-totol">
                                    <div class="product-order-totol-text">Tổng số tiền (2 sản phẩm):</div>
                                    <div class="product-order-totol-price">321321321323đ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid wide" v-if="isPay">
                <div class="row no-gutters">
                    <div class="col l-12 m-12 c-12">
                        <div class="method-pay">
                            <div class="method-pay-text">Phương thức thanh toán</div>
                            <button class="method-pay-value" @click="clickPay">Thanh toán khi nhận hàng</button>
                        </div>
                        <div class="pay-end">
                            <button class="pay-end-button" @click="addOrder">Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid wide" v-else>
                <div class="row no-gutters">
                    <div class="col l-12 m-12 c-12">
                        <div class="pay-done">
                            <div class="status-cart">
                                <div class="status-cart-title">Trạng thái đơn hàng của bạn</div>
                            </div>
                            <div class="status-cart-main">
                                <i class="status-cart-icon fas fa-shipping-fast"></i>
                                <div class="status-cart-text">Đã đặt hàng, sản phẩm sẽ được giao đến sớm nhất cho bạn</div>
                                <router-link :to="{name: 'ShopContent'}" class="status-cart-home">Tiếp tục mua hàng</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import OrdersService from '@/services/OrdersService'
export default {
    name: 'PayProduct',
    data () {
        return {
            isPay: true
        }
    },
    methods: {
        clickPay() {
            this.isPay = false
        },
        async addOrder() {
            const response = await OrdersService.createOrder({
                user: this.$store.state.user,
            })
            if (response.data.status == 200) {
                this.$toastr.s(response.data.message)
            } else {
                this.$toastr.e(response.data.message)
            }
        }
    }
}
</script>

<style scoped>

</style>