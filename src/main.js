// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting'
import OfflineExporting from 'highcharts/modules/offline-exporting'
import store from '@/vuex/store'
import {
    Button,
    Select,
    Row,
    Col,
    Switch,
    Dialog,
    Input,
    InputNumber,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    TabPane,
    Tag,
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
Vue.use(InputNumber)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Table);
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(TabPane)
Vue.use(Tag)

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message

Highcharts.setOptions({
    global: {
        useUTC: false
    }
})

Exporting(Highcharts)
OfflineExporting(Highcharts)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
