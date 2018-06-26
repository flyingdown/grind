<template>
    <div>
        <h1>模拟量详细曲线</h1>
        <el-row>
            <el-col :push="20" :span="4">
                <el-button type="primary" plain @click.native="goFirst">返回</el-button>
            </el-col>
        </el-row>
        <vue-highcharts :highcharts="Highcharts" :options="myOptions" ref="spline"></vue-highcharts>
        <el-row>
            <el-col :span="16" :push="4">
                <el-date-picker ref="datetimePicker" v-model="pickedTime" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd HH:mm:ss" @change="datetimePicked"></el-date-picker>
            </el-col>
            <el-col :span="4" :push="4">
                <el-button type="primary" @click.native="reload">刷新实时曲线</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import Vue from 'vue'
import Highcharts from 'highcharts'
import {options, activeLastPointToolip, seriesConfig, loadData, turnOffChartTimeout, loadDetailChart, interval} from '@/config/simulation-config'

export default {
    data () {
        return {
            chart: {},
            Highcharts,
            pickedTime: '',
        }
    },
    components: {
        VueHighcharts
    },
    mounted () {
        this.load()
    },
    computed: {
        myOptions () {
            return Object.assign({}, options, {
                chart: {
                    zoomType: 'x'
                }
            })
        },
        mySeriesConfig () {
            return Object.assign({}, seriesConfig)
        }
    },
    methods: {
        reload () {
            this.load()
        },
        getSplines () {
            let splines = {}
            // 从info中获取曲线的名称
            splines[this.$store.state.detailChart] = this.$refs.spline
            console.log(this.$store.state.detailChart)
            console.log(splines)
            return splines
        },
        goFirst () {
            turnOffChartTimeout()
            this.$router.push('/')
        },
        datetimePicked (val) {
            // console.log(val)
            turnOffChartTimeout()
            let splines = this.getSplines()
            // console.log(splines)
            loadDetailChart(splines, this.mySeriesConfig, val[0], val[1])
        },
        load () {
            // console.log(this.myOptions)
            this.$refs.spline.removeSeries()
            let splines = this.getSplines()
            loadData (splines, this.mySeriesConfig, interval)
        }
    }
}
</script>

<style>

</style>
