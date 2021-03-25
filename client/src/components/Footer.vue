<template>
    <footer class="footer">
        <div class="grid wide footer__content">
            <div class="row">
                <div class="col l-2-4 m-4 c-6">
                    <h3 class="footer__heading">Chăm sóc khách hàng</h3>
                    <ul class="footer-list">
                        <li class="footer-item">
                            <a href="" class="footer-item__link">Trung Tâm Trợ Giúp</a>
                        </li>
                        <li class="footer-item">
                            <a href="" class="footer-item__link">F8-Shop Mall</a>
                        </li>
                        <li class="footer-item">
                            <a href="" class="footer-item__link">Hướng dẫn mua hàng</a>
                        </li>
                    </ul>
                </div>
                <div class="col l-2-4 m-4 c-6">
                    <h3 class="footer__heading">Giới thiệu</h3>
                    <ul class="footer-list">
                        <li class="footer-item">
                            <a href="" class="footer-item__link">Giới thiệu</a>
                        </li>
                        <li class="footer-item">
                            <a href="" class="footer-item__link">Tuyển dụng</a>
                        </li>
                        <li class="footer-item">
                            <a href="" class="footer-item__link">Điều khoản</a>
                        </li>
                    </ul>
                </div>
                <div class="col l-2-4 m-4 c-6">
                    <h3 class="footer__heading">Danh mục</h3>
                    <ul class="footer-list">
                        <li class="footer-item">
                            <a href="" class="footer-item__link">Trang điểm mặt</a>
                        </li>
                        <li class="footer-item">
                            <a href="" class="footer-item__link">Trang điểm môi</a>
                        </li>
                        <li class="footer-item">
                            <a href="" class="footer-item__link">Trang điểm mắt</a>
                        </li>
                    </ul>
                </div>
                <div class="col l-2-4 m-4 c-6">
                    <h3 class="footer__heading">Theo dõi</h3>
                    <ul class="footer-list">
                        <li class="footer-item">
                            <a href="" class="footer-item__link">
                                <i class="footer-item__icon fab fa-facebook"></i>
                                Facebook
                            </a>
                        </li>
                        <li class="footer-item">
                            <a href="" class="footer-item__link">
                                <i class="footer-item__icon fab fa-instagram"></i>
                                Instagram
                            </a>
                        </li>
                        <li class="footer-item">
                            <a href="" class="footer-item__link">
                                <i class="footer-item__icon fab fa-linkedin"></i>
                                Linkedin
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col l-2-4 m-8 c-12">
                    <h3 class="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                    <div class="footer__download">
                        <img src="../assets/img/qr_code.png" alt="Download QR" class="footer__download-qr">
                        <div class="footer__download-apps">
                            <a href="" class="footer__download-app-link">
                                <img src="../assets/img/google_play.png" alt="Google Play" class="footer__download-app-img">
                            </a>
                            <a href="" class="footer__download-app-link">
                                <img src="../assets/img/app_store.png" alt="App Store" class="footer__download-app-img">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="grid wide">
                <p class="footer__text">© 2021 - Bản quyền thuộc về công ty Hoàng Anh và Đình Tuấn.</p>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal__register" id="form__container">
            <a href="#" class="modal__overlay"></a>
            <div class="modal__body">
                <!-- Register form -->
                <div class="auth-form">
                    <div class="auth-form__container">
                        <div class="auth-form__header">
                            <h3 class="auth-form__heading">Đăng ký</h3>
                            <span class="auth-form__switch-btn">Đăng nhập</span>
                        </div>

                        <div class="auth-form__form">
                            <div class="auth-form__group">
                                <input type="text" v-model="email" name="email" class="auth-form__input" placeholder="Email của bạn">
                            </div>
                            <div class="auth-form__group">
                                <input type="password" v-model="password" name="password" class="auth-form__input" placeholder="Mật khẩu của bạn">
                            </div>
                            <div class="auth-form__group">
                                <input type="password" v-model="confirm_password" name="confirm_password" class="auth-form__input" placeholder="Nhập lại mật khẩu">
                            </div>
                        </div>
                        <div class="auth-form__aside">
                            <p class="auth-form__policy-text">
                                Bằng việc đăng kí, bạn đã đồng ý với F8-Shop về
                                <a href="" class="auth-form__text-link">Điều khoản dịch vụ</a> &
                                <a href="" class="auth-form__text-link">Chính sách bảo mật</a>
                            </p>
                        </div>
                        <div class="auth-form__controls">
                            <button class="btn btn--normal auth-form__controls-back">TRỞ LẠI</button>
                            <button class="btn btn--primary" v-on:click="register">ĐĂNG KÝ</button>
                        </div>
                    </div>
                    <div class="auth-form__socials">
                        <a href="" class="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                            <i class="auth-form__socials-icon fab fa-facebook-square"></i>
                            <span class="auth-form__socials-title">Kết nối với Facebook</span>
                        </a>
                        <a href="" class="auth-form__socials--google btn btn--size-s btn--with-icon">
                            <i class="auth-form__socials-icon fab fa-google"></i>
                            <span class="auth-form__socials-title">Kết nối với Google</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal__login" id="login">
            <a href="#" class="modal__overlay"></a>
            <div class="modal__body">
                <!-- Login form -->
                <div class="auth-form">
                    <div class="auth-form__container">
                        <div class="auth-form__header">
                            <h3 class="auth-form__heading">Đăng nhập</h3>
                            <span class="auth-form__switch-btn">Đăng ký</span>
                        </div>

                        <div class="auth-form__form">
                            <div class="auth-form__group">
                                <input type="text" name="email" class="auth-form__input" placeholder="Email của bạn">
                            </div>
                            <div class="auth-form__group">
                                <input type="password" name="password" class="auth-form__input" placeholder="Mật khẩu của bạn">
                            </div>
                        </div>
                        <div class="auth-form__aside">
                            <div class="auth-form__help">
                                <a href="" class="auth-form__help-link auth-form__help-forgot">Quên mật khẩu</a>
                                <span class="auth-form__help-separate"></span>
                                <a href="" class="auth-form__help-link">Cần trợ giúp?</a>
                            </div>
                        </div>
                        <div class="auth-form__controls">
                            <button class="btn btn--normal auth-form__controls-back">TRỞ LẠI</button>
                            <button class="btn btn--primary">ĐĂNG NHẬP</button>
                        </div>
                    </div>
                    <div class="auth-form__socials">
                        <a href="" class="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                            <i class="auth-form__socials-icon fab fa-facebook-square"></i>
                            <span class="auth-form__socials-title">Kết nối với Facebook</span>
                        </a>
                        <a href="" class="auth-form__socials--google btn btn--size-s btn--with-icon">
                            <i class="auth-form__socials-icon fab fa-google"></i>
                            <span class="auth-form__socials-title">Kết nối với Google</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
    name: 'Footer',
    data() {
        return {
            email: '',
            password: '',
            confirm_password: '',
        }
    },
    methods: {
        async register () {
            const response = await AuthenticationService.register({
                email: this.email,
                password: this.password,
                confirm_password: this.confirm_password
            })
            console.log(response)
        }
    }
}
</script>

<style>

</style>