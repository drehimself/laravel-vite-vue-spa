import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: () => import('./Home.vue'),
        name: 'Home'
    },
    {
        path: '/about',
        component: () => import('./About.vue'),
        name: 'About'
    },
    {
        path: '/contact',
        component: () => import('./Contact.vue'),
        name: 'Contact'
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router
