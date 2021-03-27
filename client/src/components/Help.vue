<template>
    <div class="help-content">
        <div class="help-content__header">
            <div class="help-content__header--question">
                <span class="help-content__header--question-word">Xin chào. Shopee có thể giúp gì cho bạn?</span>
            </div>
            <div class="help-content__body">
                <div class="help-content__body-left">
                    <span class="help-content__body-title">Danh Mục</span>
                    <ul class="help-content__body-list">
                        <li class="help-content__body-list-item">Tài khoản & Mục Khác</li>
                        <li class="help-content__body-list-item">Đơn Hàng & Thanh Toán</li>
                        <li class="help-content__body-list-item">Trả Hàng & Hoàn Tiền</li>
                    </ul>
                </div>
                <div class="help-content__body-right">
                    <span class="help-content__body-title">Bài Viết</span>
                    <ul class="help-content__body-right-list">
                        <li class="help-content__body-right-item">Shopee Đảm Bảo Là Gì?</li>
                        <li class="help-content__body-right-item">[Người Bán] Thời Gian Xử Lý Khiếu Nại Về Nội Dung Đánh Giá Shop</li>
                        <li class="help-content__body-right-item">Làm Sao Để Mua Hàng Với Phí Vận Chuyển Thấp Nhất / Miễn Phí Vận Chuyển</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.help-content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}

.help-content__header {
    padding: 10rem 5rem;
}

.help-content__header--question {
    text-align: center;
}

.help-content__header--question-word {
    color: #ee4d2d;
    font-size: 4rem;
}

.help-content__body {
    margin-top: 5rem;
}

.help-content__body-left {
    float: left;
    width: 30%;
    margin: 0 2.4rem;
}

.help-content__body-title {
    font-size: 3rem;
}

.help-content__body-list {
    list-style-type: none;
    font-size: 1.5rem;
    margin: 3rem 0;
}

.help-content__body-right-list {
    list-style-type: none;
    font-size: 2.2rem;
    margin: 3rem 0;
}

.help-content__body-right-item {
    display: block;
    line-height: 2rem;
    margin: 2rem 0;
}

.help-content__body-list-item {
    display: block;
    margin: 1rem 0;
}

</style>