import Vue from 'vue'
import Router from 'vue-router'
import name1 from '../components/name1'
import name2 from '../components/name2'
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/1',
            component: name1
        },
        {
            path: '/',
            component: name2
        }
    ]
})

