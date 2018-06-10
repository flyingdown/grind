<template>
    <div>
        <el-row>
            <el-col :span="8">
                <vue-highcharts :options="options" ref="spline1"></vue-highcharts>
            </el-col>
            <el-col :span="8">
                <vue-highcharts :options="options" ref="spline2"></vue-highcharts>
            </el-col>
            <el-col :span="8">
                <vue-highcharts :options="options" ref="spline3"></vue-highcharts>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <vue-highcharts :options="options" ref="spline4"></vue-highcharts>
            </el-col>
            <el-col :span="8">
                <vue-highcharts :options="options" ref="spline5"></vue-highcharts>
            </el-col>
            <el-col :span="8">
                <vue-highcharts :options="options" ref="spline6"></vue-highcharts>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import { options, asyncData } from '../config/chart-config'

export default {
    name: 'First',
    data () {
        return {
            options
        }
    },
    components: {
        VueHighcharts,
    },
    mounted () {
        this.$refs.spline1.addSeries(asyncData)
        this.$refs.spline2.addSeries(asyncData)
        this.$refs.spline3.addSeries(asyncData)
        this.$refs.spline4.addSeries(asyncData)
        this.$refs.spline5.addSeries(asyncData)
        this.$refs.spline6.addSeries(asyncData)
    }
}
    
</script>
<style>
    
</style>