import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
import * as Cookies from "js-cookie"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        token: null,
        isUserLoggedIn: false,
        cart: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            if (token) {
                state.isUserLoggedIn = true
            } else {
                state.isUserLoggedIn = false
            }
        },
        setUser(state, user) {
            state.user = user
        },
        setCart(state, cart) {
            state.cart = cart
        },
    },
    actions: {
        setToken({ commit }, token) {
            commit("setToken", token)
        },
        setUser({ commit }, user) {
            commit("setUser", user)
        },
        setCart({ commit }, cart) {
            commit("setCart", cart)
        },
    },
    plugins: [
        createPersistedState({
            getState: key => Cookies.getJSON(key),
            setState: (key, state) => {
                Cookies.set(key, state, { expires: 3, secure: true })
            },
        }),
    ],
})
