// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting'
import store from '@/vuex/store'
import {
    Button,
    Select,
    Row,
    Col,
    Switch,
    Dialog,
    Input,
    Message,
    MessageBox,
} from 'element-ui'

Vue.use(Vuex)
Vue.use(Highcharts)
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Input)

Vue.config.productionTip = false

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message

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
    store,
    components: { App },
    template: '<App/>'
})
