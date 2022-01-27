const Home = {
    template: '#home',
    name: 'Home'
}

const UserSettings = {
    template: '<h1>UserSettings</h1>',
    name: 'UserSettings'
}
const WichList = {
    template: '<h1>WichList</h1>',
    name: 'WichList'
}

const ShoppingCart = {
    template: '<h1>ShoppingCart</h1>',
    name: 'ShoppingCart'
}

// router

const router = new VueRouter ({
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/user-settings', component: UserSettings, name: 'UserSettings' },
        { path: '/wish-list', component: WichList, name: 'WhishList' },
        { path: '/shopping-cart', component: ShoppingCart, name: 'ShoppingCart' },
    ]
})

const vue = new Vue ({
    router
}).$mount('#app');