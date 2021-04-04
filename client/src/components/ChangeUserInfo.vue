<template>
    <div class="app__container">
        <div class="grid wide">
            <div class="row no-gutters">
                <div class="col l-12 m-12 c-12">
                    <h3 class="address-title">2. Địa chỉ giao hàng</h3>
                    <div class="table-address">
                        <div class="form form-address" id="form-3">
                            <div class="form-group">
                                <label for="fullname" class="form-label">Họ tên</label>
                                <input id="hoten" name="hoten" rules="required|min:6" type="text" placeholder="Nhập họ tên" class="form-control">
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="fullname" class="form-label">Điện thoại di động</label>
                                <input id="sdt" name="sdt" rules="required|min:10" type="tel" placeholder="Nhập số điện thoại" class="form-control">
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="fullname" class="form-label">Tỉnh/Thành phố</label>
                                <!-- <input id="fullname2" name="username" rules="required" type="text" placeholder="Tên người dùng/Email" class="form-control"> -->
                                <select name="city" id="city" class="form-control">
                                    <option value="Đà Nẵng" class="form-control">Đà Nẵng</option>
                                </select>
                                <span class="form-message"></span>
                            </div>    
                            <div class="form-group">
                                <label for="fullname" class="form-label">Quận/Huyện</label>
                                <select name="huyen" id="huyen" class="form-control">
                                    <option value="Ngũ Hành Sơn" class="form-control">Quận Ngũ Hành Sơn</option>
                                    <option value="Hải Châu" class="form-control">Quận Hải Châu</option>
                                </select>
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="fullname" class="form-label">Phường/Xã</label>
                                <select name="xa" class="form-control">
                                    <option value="Phường Khuê Mỹ" class="form-control">Phường Khuê Mỹ</option>
                                    <option value="Phường Hoà Hải" class="form-control">Phường Hoà Hải</option>
                                </select>
                                <span class="form-message"></span>
                            </div>
                            <div class="form-group">
                                <label for="fullname" class="form-label">Địa chỉ</label>
                                <input id="diachi" name="diachi" rules="required" type="text" placeholder="" class="form-control">
                                <span class="form-message"></span>
                            </div>
                            <div class="auth-form__controls">
                                <button style="width: 100%;" class="form-submit checkout">Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
// import validation from '../assets/js/validation'
// validation.Validator('#form-3')
export default {
    data() {
        return {
                
        }
    },
    computed: {
        
    }
}
</script>

<style>

</style>