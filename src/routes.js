export default [
    {
        path: '/',
        component: require('./app.vue')
    },
    {
        path: '/about/',
        component: require('./pages/about.vue')
    },
    {
        path: '/form/',
        component: require('./pages/form.vue')
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: require('./pages/dynamic-route.vue')
    },
    {
        path: '/login',
        component: require('./pages/sessions/Login.vue')
    },
    {
        path: '/register/user',
        component: require('./pages/sessions/UserRegister.vue')
    },
    {
        path: '/register/technical',
        component: require('./pages/sessions/TechnicalRegister.vue')
    },
    {
        path: '/technical/:id',
        component: require('./pages/technicals/Details.vue')
    }

]