export default function({ next, router }) {
    console.log("Middleware")
    const account_auth = false
    if (!account_auth) {
        return router.push({ name: "ShopContent" })
    }
    return next()
}
