<template>
    <div>
        <el-dialog :visible="visibleOrNot" fullscreen @open="handleOpen" :before-close="handleClose">
            <vue-highcharts :options="options" ref="spline"></vue-highcharts>
        </el-dialog>
    </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import { options, asyncData } from '@/config/chart-config'
import Vue from 'vue'

export default {
    data () {
        return {
            options
        }
    },
    components: {
        VueHighcharts
    },
    mounted () {
        // console.log(this.$refs.spline)
        // this.$refs.spline.addSeries(asyncData)
    },
    computed: {
        visibleOrNot () {
            return this.$store.state.detailChartVisible
        }
    },
    watch: {
        visibleOrNot (val, oldVal) {
            console.log(val + ":" + oldVal)
        }
    },
    methods: {
        handleOpen() {
            Vue.nextTick(_ => {
                console.log(this.$refs.spline)
                this.$refs.spline.addSeries(asyncData)
            })
        },
        handleClose(done) {
            this.$confirm('确认关闭？').then(_ => {
                done()
                this.$store.commit('updateDetailChartVisible', false)
            }).catch(_ => {})
        }
    },
}
</script>

<style>

</style>
