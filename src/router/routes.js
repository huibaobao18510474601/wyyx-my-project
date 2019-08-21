import Home from '../pages/Home/Home.vue'
import Cartory from '../pages/Cartory/Cartory.vue'
import FindThing from '../pages/FindThing/FindThing.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
export default[
    {
        path:'/home',
        component:Home,
    },
    {
        path:'/cartory',
        component:Cartory
    },
    {
        path: '/find',
        component: FindThing
    },
    {
        path: '/shopping',
        component: Shopping
    },
    {
        path: '/personal',
        component: Personal
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/',
        redirect: '/home'
    },
]