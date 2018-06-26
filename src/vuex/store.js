import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
        passwdVisible: false,
        detailChart: {}

    },
    mutations: {
        updatePasswdVisible (state, val) {
            state.passwdVisible = val
        },
        updateDetailChart (state, val) {
            state.detailChart = val
        },
    }
})

export default store
