<template>
    <div class="app__container">
        <div class="grid wide">
            <div class="row sm-gutter app__content">
                <div class="col l-2 m-0 c-0">
                    <nav class="category">
                        <h3 class="category__heading">Tất Cả Danh mục</h3>
                        <ul class="category-list">
                            <li class="category-item category-item--active">
                                <a href="" class="category-item__link">Trang điểm mặt</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item__link">Trang điểm môi</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item__link">Thêm</a>
                            </li>
                        </ul>
                    </nav>
                    <nav class="category">
                        <h3 class="category__heading">Khoảng giá</h3>
                        <div class="shop-price-range-filter">
                            <input type="text" class="shop-price-range-filter__input" placeholder="₫ TỪ">
                            <div class="shop-price-range-filter__line"></div>
                            <input type="text" class="shop-price-range-filter__input" placeholder="₫ ĐẾN">
                        </div>
                        <button class="shop-price-range-filter__button">Áp dụng</button>
                    </nav>
                </div>
                <div class="col l-10 m-12 c-12">
                    <div class="home-filter hide-on-mobile-tablet">
                        <span class="home-filter__label">Sắp xếp theo</span>
                        <button class="home-filter__btn btn">Phổ biến</button>
                        <button class="home-filter__btn btn btn--primary">Mới nhất</button>
                        <button class="home-filter__btn btn">Bán chạy</button>

                        <div class="select-input">
                            <span class="select-input__label">Giá</span>
                            <fa-icon :icon="['fas', 'angle-down']" class="select-input__icon"/>

                            <!-- List options -->
                            <ul class="select-input__list">
                                <li class="select-input__item">
                                    <a href="" class="select-input__link">Giá: Thấp đến Cao</a>
                                </li>
                                <li class="select-input__item">
                                    <a href="" class="select-input__link">Giá: Cao đến Thấp</a>
                                </li>
                            </ul>
                        </div>
                        <div class="home-filter__page">
                            <span class="home-filter__page-num">
                                <span class="home-filter__page-current">1</span>/14
                            </span>
                            <div class="home-filter__page-control">
                                <a href="" class="home-filter__page-btn home-filter__page-btn--disabled">
                                    <fa-icon :icon="['fas', 'angle-left']" class="home-filter__page-icon"/>
                                </a>
                                <a href="" class="home-filter__page-btn">
                                    <fa-icon :icon="['fas', 'angle-right']" class="home-filter__page-icon"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <nav class="mobile-category">
                        <ul class="mobile-category__list">
                            <li class="mobile-category__item">
                                <a href="" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                            </li>
                            <li class="mobile-category__item">
                                <a href="" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                            </li>
                            <li class="mobile-category__item">
                                <a href="" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                            </li>
                            <li class="mobile-category__item">
                                <a href="" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                            </li>
                            <li class="mobile-category__item">
                                <a href="" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                            </li>
                            <li class="mobile-category__item">
                                <a href="" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                            </li>
                            <li class="mobile-category__item">
                                <a href="" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                            </li>
                            <li class="mobile-category__item">
                                <a href="" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                            </li>
                            <li class="mobile-category__item">
                                <a href="" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                            </li>
                            <li class="mobile-category__item">
                                <a href="" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                            </li>
                            <li class="mobile-category__item">
                                <a href="" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                            </li>
                            <li class="mobile-category__item">
                                <a href="" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                            </li>
                        </ul>
                    </nav>

                    <div class="home-product">
                        <div class="row sm-gutter">
                            <div class="col l-2-4 m-4 c-6" v-for="product in products" :key="product._id">
                                <!-- Product item -->
                                <router-link class="home-product-item" :to="{name: 'Product', params: {id: 13123213}}">
                                    <div class="home-product-item__img" v-bind:style="{ backgroundImage: 'url(' + product.imageUrl + ')' }">
                                        <h4 class="home-product-item__name">{{product.name}}</h4>
                                    </div>
                                    <div class="home-product-item__price">
                                        <span class="home-product-item__price-old">1.200.000đ</span>
                                        <span class="home-product-item__current">{{formatNumber(product.price)}}</span>
                                    </div>
                                    <div class="home-product-item__action">
                                        <span class="home-product-item__like home-product-item__like--liked">
                                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                            <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                        </span>
                                        <div class="home-product-item__rating">
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <span class="home-product-item__sold">88 đã bán</span>
                                    </div>
                                    <div class="home-product-item__origin">
                                        <span class="home-product-item__brand">Whoo</span>
                                        <span class="home-product-item__origin-name">{{product.place}}</span>
                                    </div>
                                    <div class="home-product-item__favourite">
                                        <i class="fas fa-check"></i>
                                        <span>Yêu thích</span>
                                    </div>
                                    <div class="home-product-item__sale-off">
                                        <span class="home-product-item__sale-off-percent">43%</span>
                                        <span class="home-product-item__sale-off-label">GIẢM</span>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <ul class="pagination home-product__pagination">
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">
                                <i class="pagination-item__icon fas fa-angle-left"></i>
                            </a>
                        </li>
                        <li class="pagination-item pagination-item--active">
                            <a href="" class="pagination-item__link">1</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">2</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">3</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">4</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">5</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">...</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">14</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">
                                <i class="pagination-item__icon fas fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsService from '@/services/ProductsService'
export default {
    name: 'ShopContent',
    data () {
        return {
            products: null,
        }
    },
    methods: {
        formatNumber: number => {
            console.log(number)
            var number_str = number.toString()
            return number_str.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    },
    async mounted() {
        var response = await ProductsService.index()
        this.products = response.data.products
        console.log(this.products)
    }
}
</script>

<style scoped>
.shop-price-range-filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
}

.shop-price-range-filter .shop-price-range-filter__input {
    width: 7.2rem;
    margin: 0 0.5rem;
    font-size: 1.125rem;
}

.shop-price-range-filter__input {
    height: 2.5rem;
    background-color: #fff;
    outline: none;
    border: 1px solid rgba(0,0,0,.26);
    box-sizing: border-box;
    padding-left: .3125rem;
    text-transform: uppercase;
    border-radius: .125rem;
    box-shadow: inset 0 1px 0 0 rgb(0 0 0 / 5%);
}

.shop-price-range-filter__line {
    flex: 1;
    height: 2px;
    background: #bdbdbd;
    margin: 0 0.3rem;
}

.shop-price-range-filter__button {
    height: 3rem;
    margin: 1rem 0.5rem;
    text-transform: uppercase;
    font-weight: 400;
    width: 95%;
    border: none;
    color: #fff;
    background: #ee4d2d;
}

.shop-price-range-filter__button:focus {
    outline: none;
}

.shop-price-range-filter__button:hover {
    cursor: pointer;
    opacity: 0.9;
}
</style>