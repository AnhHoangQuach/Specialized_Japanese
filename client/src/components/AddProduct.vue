<template>
    <div class="app__container">
        <div class="grid wide">
            <div class="row no-gutters">
                <div class="col l-12 m-12 c-12">
                    <h3 class="address-title">Tạo sản phẩm bán hàng</h3>
                    <div class="form form-address">
                        <div class="table-address">
                            <div class="form-group">
                                <label for="name" class="form-label">Tên sản phẩm</label>
                                <input id="name" v-model="name" name="name" type="text" placeholder="Nhập tên sản phẩm" class="form-control">
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="price" class="form-label">Giá</label>
                                <input id="price" name="price" v-model="price" type="number" placeholder="Nhập giá" class="form-control">
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="description" class="form-label">Mô tả sản phẩm</label>
                                <input id="description" v-model="description" name="description" type="text" placeholder="Nhập mô tả sản phẩm" class="form-control">
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="place" class="form-label">Nơi xuất xứ</label>
                                <input id="place" name="place" type="text" v-model="place" placeholder="Nhập nơi xuất xứ" class="form-control">
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="image" class="form-label">Ảnh mô tả</label>
                                <input id="image" name="image" v-model="image" type="text" placeholder="Ảnh mô tả" class="form-control">
                                <span class="form-message"></span>
                            </div>
                            <div class="auth-form__controls">
                                <button @click="addNewProduct" style="width: 100%;" class="form-submit checkout">Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid wide" style="padding-bottom: 40px;">
                    <div class="content-table row no-gutters">
                        <div class="col l-12 m-12 c-12">
                            <h4 class="information-text">Sản phẩm đã đăng bán</h4>
                            <router-link :to="{name: 'Product', params: {id: product._id}}" style="text-decoration: none;" v-for="product in productsSellByUser" v-bind:key="product._id">
                                <div class="product-seen-list">
                                    <div class="product-seen">
                                        <img v-bind:src="product.imageUrl" alt="" class="product-seen-img">
                                        <p class="product-seen-name">{{product.name}}</p>
                                        <div class="product-seen-price">
                                            <p class="product-seen-old">{{product.price}} đ</p>
                                            <p class="product-seen-current">{{product.price}} đ</p>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsService from '@/services/ProductsService';
export default {
    data() {
        return {
            name: '',
            price: 0,
            description: '',
            place: '',
            image: '',
            productsSellByUser: null
        }
    },
    methods: {
        reloadForm() {
            this.name = '';
            this.price = 0;
            this.description = ''
            this.place = ''
            this.image = ''
        },
        async addNewProduct () {
            const response = await ProductsService.addProduct({
                name: this.name,
                price: this.price,
                description: this.description,
                place: this.place,
                image: this.image,
                userId: this.$store.state.user._id
            })
            if (response.data.status == 200) {
                this.$toastr.s(response.data.message)
                this.$router.push({ name: 'ShopContent' })
            } else {
                this.$toastr.e(response.data.message)
            }
            this.reloadForm()
        },
        deleteProduct(productId) {
            const response = ProductsService.deleteProduct(productId);
            console.log(response)
        }
    },
    async mounted () {
        const userId = this.$store.state.user._id
        const response = await ProductsService.getProductsByUserId(userId)
        this.productsSellByUser = response.data.products
        console.log(response.data.products)
    }
}
</script>

<style>

</style>