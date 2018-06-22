<template>
    <div>
        <el-dialog :visible="visibleOrNot" fullscreen @open="handleOpen" :before-close="handleClose">
            <vue-highcharts :highcharts="Highcharts" :options="myOptions" ref="spline" :classname="spline"></vue-highcharts>
            <div>
                <el-date-picker ref="datetimePicker" v-model="pickedTime" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd HH:mm:ss" @change="datetimePicked"></el-date-picker>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import Vue from 'vue'
import Highcharts from 'highcharts'
import {options, activeLastPointToolip, simulationConfig, loadDetailChart} from '@/config/chart-config'

export default {
    data () {
        return {
            chart: {},
            options,
            Highcharts,
            pickedTime: '',
            spline: ''
        }
    },
    components: {
        VueHighcharts
    },
    mounted () {
        // console.log(this.options)
    },
    computed: {
        visibleOrNot () {
            return this.$store.state.detailChartVisible
        },
        myOptions () {
            let options = {}
            Object.assign(options, this.options)
            return options
        },
        mySimulation () {
            console.log(simulationConfig)
            return Object.assign({}, simulationConfig)
        }
    },
    watch: {
        visibleOrNot (val, oldVal) {
            console.log(val + ":" + oldVal)
        },
        // pickedTime (val, oldVal){
        //     console.log(val + ":" + oldVal)
        // },
    },
    methods: {
        datetimePicked (val) {
            // console.log(val)
            let splines = {}
            // 从info中获取曲线的名称
            splines[this.$store.state.detailChart.info] = this.$refs.spline
            console.log(this.$store.state.detailChart.info)
            console.log(splines)
            loadDetailChart(splines, this.mySimulation, val[0], val[1])
        },
        handleOpen() {
            Vue.nextTick(_ => {
                // console.log(this.$refs.spline)
                this.spline = this.$store.state.detailChart.info
                this.$refs.spline.removeSeries()
                let series = this.$store.state.detailChart.series
                // console.log(this.$store.state.detailChart)
                series.forEach( (serie) => {
                    let tempData = []
                    serie.data.forEach(function (d) {
                        tempData.push([d.x, d.y])
                    })
                    this.$refs.spline.addSeries({
                        name: serie.name,
                        data: tempData,
                        color: serie.color
                    })
                })
                this.$refs.spline.getChart().update({
                    title: {
                        text: this.$store.state.detailChart.title.textStr
                    }
                })
                activeLastPointToolip(this.$refs.spline.getChart())
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
