import { createRouter, createWebHistory ,} from 'vue-router'
import Home from '../views/Home.vue'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/services',
        name: 'Services',

        component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')
    },
    {
        path: '/contact',
        name: 'Contact',

        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
    {
        path: '/datenschutz',
        name: 'Datenschutz',

        component: () => import(/* webpackChunkName: "datenschutz" */ '../views/Datenschutz.vue')
    },

    {
        path: '/impressum',
        name: 'Impressum',

        component: () => import(/* webpackChunkName: "impressum" */ '../views/Impressum.vue')
    }

]





const router = createRouter({
    history: createWebHistory(),
    routes,

})




export default router
