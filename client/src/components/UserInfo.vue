<template>
    <div class="container user-info">
        <div class="user-info__sidebar">
            <div class="user-info__sidebar--brief">
                <a href="" class="user-info__sidebar--brief__avatar">
                    <div class="shopee-avatar">
                        <img class="shopee-avatar__img" src="https://graph.facebook.com/2700722880185093/picture?width=400&height=400" alt="">
                    </div>
                </a>
                <div class="user-info__sidebar--brief__right">
                    <div class="user-info__sidebar--brief__username">{{ $store.state.user.email }}</div>
                    <div>
                        <a href="" class="user-info__sidebar--brief__edit">
                            <fa-icon :icon="['fa', 'edit']" /> Sửa hồ sơ
                        </a>
                    </div>
                </div>    
            </div>
            <div class="user-info__sidebar--menu">
                <div class="stardust-dropdown stardust-dropdown--open">
                    <div class="stardust-dropdown__item--header">
                        <a href="" class="user-info__sidebar--menu--entry">
                            <div class="user-info__sidebar--menu--entry__icon" style="background-color: rgb(255, 193, 7);">
                                <fa-icon :icon="['fa', 'user']" />
                            </div>
                            <div class="user-info__sidebar--menu--entry__text">Tài khoản của tôi</div>
                        </a>
                    </div>
                    <div class="stardust-dropdown__item-body stardust-dropdown__item-body--open">
                        <div class="user-info__sidebar--menu__subsection">
                            <a href="" class="user-info__sidebar--choice user-info__sidebar--menu__item">
                                <span>Hồ sơ</span>
                            </a>
                            <a href="" class="user-info__sidebar--menu__item">
                                <span>Đổi Mật Khẩu</span>
                            </a>
                        </div>
                    </div>
                    <div class="stardust-dropdown__item--header">
                        <a href="" class="user-info__sidebar--menu--entry">
                            <div class="user-info__sidebar--menu--entry__icon" style="background-color: rgb(68, 181, 255);">
                                <fa-icon :icon="['fa', 'file']" />
                            </div>
                            <div class="user-info__sidebar--menu--entry__text">Đơn mua</div>
                        </a>
                    </div>
                    <div class="stardust-dropdown__item--header">
                        <a href="" class="user-info__sidebar--menu--entry">
                            <div class="user-info__sidebar--menu--entry__icon" style="background-color: rgb(238, 77, 45);">
                                <fa-icon :icon="['fa', 'bell']" />
                            </div>
                            <div class="user-info__sidebar--menu--entry__text">Thông báo</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="user-info__sidebar__content">
            <div class="user-info__sidebar__content--detail">
                <div class="my__account--section">
                    <div class="my__account--section__header">
                        <div class="my__account--section__header--left">
                            <div class="my__account--section__header-title">Hồ sơ của tôi</div>
                            <div class="my__account--section__header-subtitle">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                        </div>
                    </div>
                    <div class="my__account--profile">
                        <div class="my__account--profile__left">
                            <div class="my__account--profile__left--label">
                                <div class="my__account--profile__left--label__wrapper">
                                    <div class="my__account--profile__left--name">
                                         <label for="">Tên đăng nhập</label>
                                    </div>
                                    <div class="my__account--profile__left--content">
                                        <div class="my__account--profile__left--content__container">
                                            <div class="my__account--profile__left--input__text">
                                                {{ $store.state.user.email }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="my__account--profile__left--label">
                                <div class="my__account--profile__left--label__wrapper">
                                    <div class="my__account--profile__left--name">
                                         <label for="">Email</label>
                                    </div>
                                    <div class="my__account--profile__left--content">
                                        <div class="my__account--profile__left--content__container">
                                            <div class="my__account--profile__left--input__text">
                                                {{ $store.state.user.email }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="my__account--profile__left--label">
                                <div class="my__account--profile__left--label__wrapper">
                                    <div class="my__account--profile__left--name">
                                         <label for="">Số điện thoại</label>
                                    </div>
                                    <div class="my__account--profile__left--content">
                                        <div class="my__account--profile__left--content__container">
                                            <div class="my__account--profile__left--input__text">
                                                0904513053
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="my__account--profile__left--label">
                                <div class="my__account--profile__left--label__wrapper">
                                    <div class="my__account--profile__left--name">
                                         <label for="">Giới tính</label>
                                    </div>
                                    <div class="my__account--profile__left--content">
                                        <div class="my__account--profile__left--content__container">
                                            <div class="my__account--profile__left--input__gender">
                                                <input type="radio"> <span class="text">Nam</span>
                                                <input type="radio"> <span class="text">Nữ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="my__account--profile__left--label">
                                <div class="my__account--profile__left--label__wrapper">
                                    <div class="my__account--profile__left--name">
                                         <label for="">Ngày sinh</label>
                                    </div>
                                    <div class="my__account--profile__left--content">
                                        <div class="my__account--profile__left--content__container">
                                            <div class="my__account--profile__left--input__date">
                                                <select class="shopee--dropdown__entry">
                                                    <option value="">1</option>
                                                </select>
                                                <select class="shopee--dropdown__entry">
                                                    <option value="">1</option>
                                                </select>
                                                <select class="shopee--dropdown__entry">
                                                    <option value="">1</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="my__account--profile__submit">
                                <button type="button" class="btn btn-solid-primary">Lưu</button>
                            </div>
                        </div>
                        <div class="my__account--profile__right"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getRetrieveName(email) {
            return email.substring(0, email.lastIndexOf("@"))
        }
    },
    computed: {
        
    }
}
</script>

<style scoped>
    body {
        background-color: #f5f5f5;  
    }
    
    .text {
        font-size: 1.5rem;
        margin: 0 1rem;
    }

    .my__account--profile__left--input__date {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .shopee--dropdown__entry {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        border: 1px solid rgba(0,0,0,.09);
        border-radius: 2px;
        height: 4rem;
        background: #fff;
        width: 100%;
        padding: 2rem 4rem;
        margin-right: 0.6rem;
    }

    .btn-solid-primary {
        color: #fff;
        background: #ee4d2d;
    }

    .my__account--profile__submit {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 4.5rem;
    }

    /* My account left */
    .my__account--profile__left {
        flex: 1;
        padding-right: 50px;
    }

    .my__account--profile__left--label {
        margin-bottom: 30px;
    }

    .my__account--profile__left--label__wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .my__account--profile__left--name {
        width: 15%;
        text-align: left;
        color: rgba(85,85,85,.8);
        text-transform: capitalize;
        overflow: hidden;
        font-size: 1.4rem;
    }

    .my__account--profile__left--content {
        width: 80%;
        box-sizing: border-box;
        padding-left: 1.5rem;
    }

    .my__account--profile__left--content__container {
        display: flex;
        align-items: center;
    }

    /* User info content */
    .user-info__sidebar__content {
        position: relative;
        box-sizing: border-box;
        margin-left: 1.6875rem;
        min-width: 0;
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
        border-radius: .125rem;
        flex-grow: 1;
        width: 980px;
    }

    .user-info__sidebar__content--detail {
        display: flex;
        flex-direction: column;
        position: relative;
        min-height: 100%;
    }

    .my__account--section {
        display: flex;
        flex-direction: column;
        padding: 0 30px 20px;
        background: #fff;
        overflow: visible;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
    }

    .my__account--section__header {
        align-items: center;
        border-bottom: 1px solid #efefef;
        padding: 20px 0;
        height: 85px;
        box-sizing: border-box;
    }

    .my__account--section__header--left {
        flex: 1;
    }

    .my__account--section__header-title {
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.5rem;
        color: #333;
        text-transform: capitalize;
    }
    
    .my__account--section__header-subtitle {
        font-size: 1.4rem;
        line-height: 1.0625rem;
        color: #555;
        margin-top: 12px;
    }

    .my__account--profile {
        display: flex;
        align-items: flex-start;
        padding-top: 30px;
    }

    .my__account--profile__left--input__text {
        font-size: 1.5rem;
    }

    /* User sidebar */
    .user-info {
        display: flex;
        padding: 1.25rem 0 3.125rem;
    }

    .user-info__sidebar {
        display: block;
        width: 18rem;
    }

    .user-info__sidebar--brief {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid #efefef;
    }

    .shopee-avatar {
        width: 5rem;
        height: 5rem;
        display: inline-block;
        position: relative;
        border-radius: 50%;
        border: .1rem solid rgba(0,0,0,.09);
    }

    .shopee-avatar__img {
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
    }

    .user-info__sidebar--brief__right {
        display: flex;
        justify-content: center;
        padding-left: 2rem;
        overflow: hidden;
        flex-direction: column;
    }

    .user-info__sidebar--brief__username {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        min-height: 2rem;
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: 5px;
        color: #333;
    }

    .user-info__sidebar--brief__edit {
        color: #888;
        text-transform: capitalize;
        text-decoration: none;
        font-size: 1.4rem;
    }

    .stardust-dropdown {
        position: relative;
    }

    .user-info__sidebar--menu--entry {
        text-decoration: none;
        color: rgba(0,0,0,.8);
        display: flex;
        align-items: center;
        text-transform: capitalize;
        margin: 18px 0;
        transition: color .1s cubic-bezier(.4,0,.2,1);
    }

    .user-info__sidebar--menu--entry__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        flex-shrink: 0;
        margin-right: 12px;
        font-size: .9375rem;
    }

    .user-info__sidebar--menu--entry__text {
        font-size: 1.6rem;
    }

    .stardust-dropdown__item-body--open {
        height: auto;
        opacity: 1;
    }

    .user-info__sidebar--menu__subsection {
        display: block;
        padding: 0 0 3px 34px;
    }

    .user-info__sidebar--choice {
        color: #ee4d2d;
    }

    .user-info__sidebar--menu__item {
        text-decoration: none;
        display: block;
        margin-bottom: 15px;
        font-size: 1.4rem;
    }
</style>