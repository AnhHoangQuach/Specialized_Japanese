<template>
    <!-- Container -->
    <div class="app__container2">
        <div class="grid wide">
            <div class="app__content row no-gutters">
                <div class="col l-5 m-12 c-12">
                    <div class="content__sp">
                        <div class="group-images">
                            <div class="images">
                                <a>
                                    <div v-bind:src="product.imageUrl">
                                        <img
                                            v-bind:src="product.imageUrl"
                                            class="image-small"
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <a>
                                    <div v-bind:src="product.imageUrl">
                                        <img
                                            v-bind:src="product.imageUrl"
                                            class="image-small"
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <a>
                                    <div v-bind:src="product.imageUrl">
                                        <img
                                            v-bind:src="product.imageUrl"
                                            class="image-small"
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <a>
                                    <div v-bind:src="product.imageUrl">
                                        <img
                                            v-bind:src="product.imageUrl"
                                            class="image-small"
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <a>
                                    <div v-bind:src="product.imageUrl">
                                        <img
                                            v-bind:src="product.imageUrl"
                                            class="image-small"
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                            <div class="big-image">
                                <img
                                    v-bind:src="product.imageUrl"
                                    alt=""
                                    class="big-image__image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col l-7 m-12 c-12"
                    style="border-radius: 0 0 6px 0;"
                >
                    <div class="information-product">
                        <div class="header-product">
                            <p class="header-product-title">
                                {{ product.name }}
                            </p>
                            <div class="product-rating">
                                <div
                                    class="home-product-item__rating header-product-rating"
                                >
                                    <fa-icon
                                        :icon="['fa', 'star']"
                                        class="home-product-item__star--gold"
                                    />
                                    <fa-icon
                                        :icon="['fa', 'star']"
                                        class="home-product-item__star--gold"
                                    />
                                    <fa-icon
                                        :icon="['fa', 'star']"
                                        class="home-product-item__star--gold"
                                    />
                                    <fa-icon
                                        :icon="['fa', 'star']"
                                        class="home-product-item__star--gold"
                                    />
                                    <fa-icon :icon="['fa', 'star']" />
                                </div>
                                <p class="number__rater">
                                    (275 người đánh giá)
                                </p>
                            </div>

                            <div class="brand">
                                <p class="brand-header">Thương hiệu:</p>
                                <p class="brand-main">{{ product.place }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="body-product">
                        <div class="price-product">
                            <div class="price-product-old">10000đ</div>
                            <div class="price-product-current">
                                {{ product.price }}
                            </div>
                        </div>
                        <div class="product-textcontent">
                            <div class="row no-gutters">
                                <div
                                    class="product-textcontent-col col l-3 m-3 c-0"
                                >
                                    <label class="textcontent-label"
                                        >Thông tin</label
                                    >
                                </div>
                                <div
                                    class="product-textcontent-col col l-9 m-9 c-12"
                                >
                                    <p class="textcontent-main">
                                        {{ product.description }}
                                    </p>
                                    <a
                                        href="#section2"
                                        class="textcontent-detail"
                                        >Xem chi tiết</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-pay">
                        <button
                            type="button"
                            @click="addProductToCart(product._id)"
                            class="product-add-cart"
                            aria-disabled="false"
                        >
                            <fa-icon
                                :icon="['fa', 'cart-plus']"
                                class="product-add-cart__icon"
                            />
                            <span class="product-add-cart-text"
                                >Thêm vào giỏ hàng</span
                            >
                        </button>
                        <button
                            type="submit"
                            class="product-buy-now"
                            aria-disabled="false"
                            @click="addProductAndLink(product._id)"
                        >
                            <a
                                href="javascript:void(0)"
                                class="product-buy-now-click"
                                >Mua ngay</a
                            >
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid wide">
            <div class="content-table row no-gutters">
                <div class="col l-12 m-12 c-12" id="section2">
                    <h4 class="information-text">Thông tin chi tiết</h4>
                    <div class="table-information">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Thương hiệu</td>
                                    <td class="setbackground">
                                        {{ product.description }}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Xuất xứ thương hiệu</td>
                                    <td class="setbackground">
                                        {{ product.place }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid wide">
            <div class="content-table row no-gutters">
                <div class="col l-12 m-12 c-12">
                    <h4 class="information-text">Mô tả sản phẩm</h4>
                    <div class="description-product">
                        <ul class="description-list">
                            <li class="description-text">
                                {{ product.description }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid wide" style="padding-bottom: 40px;">
            <div class="content-table row no-gutters">
                <div class="col l-12 m-12 c-12">
                    <h4 class="information-text">Sản phẩm bạn đã xem</h4>
                    <router-link
                        :to="{ name: 'Product', params: { id: 765765 } }"
                        style="text-decoration: none;"
                    >
                        <div class="product-seen-list">
                            <div class="product-seen">
                                <img
                                    src="https://cf.shopee.vn/file/089e81de274701dcdd765952c524dde3"
                                    alt="balo"
                                    class="product-seen-img"
                                />
                                <p class="product-seen-name">dasdsadasd</p>
                                <div class="product-seen-price">
                                    <p class="product-seen-old">212312321đ</p>
                                    <p class="product-seen-current">
                                        3123213213đ
                                    </p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link
                        :to="{ name: 'Product', params: { id: 765765 } }"
                        style="text-decoration: none;"
                    >
                        <div class="product-seen-list">
                            <div class="product-seen">
                                <img
                                    src="https://cf.shopee.vn/file/f73838bbd767f36b99435faed22b19b5"
                                    alt="balo"
                                    class="product-seen-img"
                                />
                                <p class="product-seen-name">dasdsadasd</p>
                                <div class="product-seen-price">
                                    <p class="product-seen-old">212312321đ</p>
                                    <p class="product-seen-current">
                                        3123213213đ
                                    </p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link
                        :to="{ name: 'Product', params: { id: 765765 } }"
                        style="text-decoration: none;"
                    >
                        <div class="product-seen-list">
                            <div class="product-seen">
                                <img
                                    src="https://cf.shopee.vn/file/089e81de274701dcdd765952c524dde3"
                                    alt="balo"
                                    class="product-seen-img"
                                />
                                <p class="product-seen-name">dasdsadasd</p>
                                <div class="product-seen-price">
                                    <p class="product-seen-old">212312321đ</p>
                                    <p class="product-seen-current">
                                        3123213213đ
                                    </p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="app-animation-cart" v-if="addCart">
            <div class="animation-cart">
                <fa-icon
                    :icon="['fas', 'check-circle']"
                    class="animation-cart-icon"
                />
                <p class="animation-cart-text">
                    Sản phẩm đã được thêm vào giỏ hàng
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsService from "@/services/ProductsService"
export default {
    data() {
        return {
            product: null,
            addCart: false,
        }
    },
    methods: {
        async addProductToCart(product) {
            const response = await ProductsService.addProductToCart({
                productId: product,
                userId: this.$store.state.user._id,
            })
            console.log(response)
            if (response.data.status == 200) {
                this.addCart = true
                setTimeout(
                    function() {
                        this.addCart = false
                    }.bind(this),
                    1500
                )
            }
        },
        async addProductAndLink(product) {
            const response = await ProductsService.addProductToCart({
                productId: product,
                userId: this.$store.state.user._id,
            })
            if (response.data.status == 200) {
                setTimeout(
                    function() {
                        this.$router.push({ name: "UserListProduct" })
                    }.bind(this),
                    500
                )
            }
        },
    },
    async mounted() {
        const prodId = this.$route.params.id
        const response = await ProductsService.getProduct(prodId)
        this.product = response.data.product
    },
}
</script>

<style scoped>
@import "../assets/css/base.css";
@import "../assets/css/product.css";
</style>
