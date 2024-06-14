import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'
import Create from '../pages/create.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Index
    },
    {
        path: '/create',
        name: 'Create',
        component: Create
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router