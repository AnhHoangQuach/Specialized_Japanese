import Vue from "vue"
import VueRouter from "vue-router"
import ShopContent from "./components/ShopContent.vue"
import Help from "./components/Help.vue"
import UserInfo from "./components/UserInfo.vue"
import Product from "./components/Product.vue"
import UserListProduct from "./components/UserListProduct.vue"
import PayProduct from "./components/PayProduct.vue"
import ChangeUserInfo from "./components/ChangeUserInfo.vue"
import UserBill from "./components/UserBill.vue"
import AddProduct from "./components/AddProduct.vue"
// import auth from "./middlewares/auth.js"

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        { path: "/", name: "ShopContent", component: ShopContent },
        { path: "/help", name: "Help", component: Help },
        {
            path: "/user/profile",
            name: "UserInfo",
            component: UserInfo,
            // meta: {
            //     middleware: [auth],
            // },
        },
        { path: "/product/:id", name: "Product", component: Product },
        { path: "/cart", name: "UserListProduct", component: UserListProduct },
        { path: "/pay", name: "PayProduct", component: PayProduct },
        {
            path: "/checkout",
            name: "ChangeUserInfo",
            component: ChangeUserInfo,
        },
        { path: "/bill", name: "UserBill", component: UserBill },
        { path: "/add-product", name: "AddProduct", component: AddProduct },
    ],
})

function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index]
    if (!subsequentMiddleware) {
        return context.next
    }

    return (...parameters) => {
        context.next(parameters)
        const nextMiddleware = nextFactory(context, middleware, index + 1)
        subsequentMiddleware({ ...context, next: nextMiddleware })
    }
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware]

        const context = { from, next, router, to }
        const nextMiddleware = nextFactory(context, middleware, 1)
        return middleware[0]({ ...context, next: nextMiddleware })
    }
    return next()
})
