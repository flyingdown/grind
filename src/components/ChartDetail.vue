<template>
    <div>
        <el-dialog :visible="visibleOrNot" fullscreen @open="handleOpen" :before-close="handleClose">
            <vue-highcharts :highcharts="Highcharts" :options="myOptions" ref="spline"></vue-highcharts>
        </el-dialog>
    </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import Vue from 'vue'
import Highcharts from 'highcharts'
import {options, activeLastPointToolip} from '@/config/chart-config'

export default {
    data () {
        return {
            chart: {},
            options,
            Highcharts
        }
    },
    components: {
        VueHighcharts
    },
    mounted () {
        console.log(this.options)
    },
    computed: {
        visibleOrNot () {
            return this.$store.state.detailChartVisible
        },
        myOptions () {
            let options = {}
            Object.assign(options, this.options)
            return options
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
                // console.log(this.$refs.spline)
                this.$refs.spline.removeSeries()
                let series = this.$store.state.detailChart.series
                // console.log(this.$store.state.detailChart.title)
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
