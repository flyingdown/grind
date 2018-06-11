import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
        setVisible: false,
        passwdVisible: false,
        exportVisible: false,
        detailChartVisible: false,
    },
    mutations: {
        updateSetVisible (state, val) {
            state.setVisible = val
        },
        updatePasswdVisible (state, val) {
            state.passwdVisible = val
        },
        updateExportVisible (state, val) {
            state.exportVisible = val
        },
        updateDetailChartVisible (state, val) {
            state.detailChartVisible = val
        },
    }
})

export default store
