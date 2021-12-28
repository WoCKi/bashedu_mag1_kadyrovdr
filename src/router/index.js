import VueRouter from 'vue-router'

// import HelloWorld from '../components/HelloWorld.vue'
import calculator from '../components/calculator.vue'
import slider from '../components/slider.vue'
import about from '../components/about.vue'

import store from '../components/store.vue'
import move from '../components/move.vue'
import carousel from '../components/carousel.vue'
import test from '../components/test.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            component: about
        },
        {
            path:'/calculator',
            component: calculator
        },
        {
            path:'/slider',
            component: slider
        },
        {
            path: '/store',
            component: store
        },
        {
            path: '/move',
            component: move
        },
        {
            path: '/carousel',
            component: carousel
        },
        {
            path: '/test',
            component: test
        }
    ]
})