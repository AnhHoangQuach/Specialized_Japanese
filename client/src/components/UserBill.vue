<template>
    <div class="grid wide">
        <div class="col l-10 m-12 c-12">    
            <div class="user-order">
                <div class="user-order-title">Đơn hàng của tôi</div>
                <div class="user-order-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Số TT</th>
                                <th>Ngày mua</th>
                                <th>Sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Tổng tiền</th>
                                <th>Trạng thái</th>
                                <th>Hủy đơn</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr v-for="(cart, index) in carts" v-bind:key="index">
                                <td>{{index + 1}}</td>
                                <td>{{ formatDateTime(cart.time) }}</td>
                                <td>{{ cart.productId.name }}</td>
                                <td>{{ cart.quantity }}</td>
                                <td>{{ formatNumber(cart.productId.price * cart.quantity) }} đ</td>
                                <td>Đang xử lý</td>
                                <td id="" class="cancelpay" @click="deleteProductItemCart(cart.productId._id)">Hủy</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsService from '@/services/ProductsService'
export default {
    data() {
        return {
            carts: null
        }
    },
    methods: {
        formatNumber: number => {
            var number_str = number.toString()
            return number_str.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        checkZero: data => {
            if (data.length == 1) {
                data = "0" + data;
            }
            return data;
        },
        formatDateTime: time => {
            var today = new Date(time);
            var day = today.getDate() + "";
            var month = (today.getMonth() + 1) + "";
            var year = today.getFullYear() + "";
            var hour = today.getHours() + "";
            var minutes = today.getMinutes() + "";
            var seconds = today.getSeconds() + "";

            day = day.length == 1 ? day = "0" + day : day
            month = month.length == 1 ? month = "0" + month : month
            year = year.length == 1 ? year = "0" + year : year
            hour = hour.length == 1 ? hour = "0" + hour : hour
            minutes = minutes.length == 1 ? minutes = "0" + minutes : minutes
            seconds = seconds.length == 1 ? seconds = "0" + seconds : seconds

            var result = (day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds);
            return result;
        },
        async deleteProductItemCart(productId) {
            const response = await ProductsService.deleteProductCart({
                productId: productId,
                user: this.$store.state.user
            })
            if (response.data.status == 200) {
                this.$toastr.s(response.data.message)
                this.$router.go(0)               
            } else {
                this.$toastr.e(response.data.message)
            }
            console.log(response)
        }
    },
    async mounted () {
        const response = await ProductsService.getCart({
            user: this.$store.state.user
        })
        this.carts = response.data.products
    }
}
</script>

<style>

</style>