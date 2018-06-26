import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
import Set from '@/components/Set'
import Export from '@/components/Export'
import ChartDetail from '@/components/ChartDetail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/grind/',
    routes: [
        {
          path: '/',
          name: 'first',
          component: First
        },
        {
          path: '/set',
          name: 'set',
          component: Set
        },
        {
          path: '/export',
          name: 'export',
          component: Export
        },
        {
          path: '/detail',
          name: 'detail',
          component: ChartDetail
        }
    ]
})
