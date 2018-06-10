// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting'
import { 
    Button, 
    Select,
    Row,
    Col, 
} from 'element-ui'

Vue.use(Highcharts)
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)

Vue.config.productionTip = false

Highcharts.setOptions({
    global: {
        useUTC: false
    }
})

Exporting(Highcharts)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
