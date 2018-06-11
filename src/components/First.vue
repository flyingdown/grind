<template>
    <div>
        <el-row>
            <el-col :span="8">
                <vue-highcharts :highcharts="Highcharts" :options="options" ref="spline1" ></vue-highcharts>
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
        <el-row class="swRow">
            <el-col :span="4">
                <el-switch v-model="swValue" active-text="A开" inactive-text="A关"></el-switch>
            </el-col>
            <el-col :span="4">
                <el-switch v-model="swValue" active-text="B开" inactive-text="B关"></el-switch>
            </el-col>
            <el-col :span="4">
                <el-switch v-model="swValue" active-text="C开" inactive-text="C关"></el-switch>
            </el-col>
            <el-col :span="4">
                <el-switch v-model="swValue" active-text="D开" inactive-text="D关"></el-switch>
            </el-col>
            <el-col :span="4">
               <el-button type="primary" @click="openExport">导出</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4">
                <el-switch v-model="swValue" active-text="E开" inactive-text="E关"></el-switch>
            </el-col>
            <el-col :span="4">
                <el-switch v-model="swValue" active-text="F开" inactive-text="F关"></el-switch>
            </el-col>
            <el-col :span="4">
                <el-switch v-model="swValue" active-text="G开" inactive-text="G关"></el-switch>
            </el-col>
            <el-col :span="4">
                <el-switch v-model="swValue" active-text="H开" inactive-text="H关"></el-switch>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="openPasswd" >设置</el-button>
            </el-col>
        </el-row>
        <passwd @getPasswd="getPasswd"></passwd>
        <set></set>
        <export></export>
        <chart-detail></chart-detail>
    </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import { options, asyncData } from '@/config/chart-config'
import Passwd from '@/components/Passwd'
import Set from '@/components/Set'
import Export from '@/components/Export'
import ChartDetail from '@/components/ChartDetail'
import Highcharts from 'highcharts'


export default {
    name: 'First',
    data () {
        return {
            options,
            swValue: true,
            Highcharts,
            ChartDetail
        }
    },
    components: {
        VueHighcharts,
        Set,
        Passwd,
        Export,
        ChartDetail,
    },
    methods: {
        getPasswd (val) {
            if (val.target === "cancel") {
                return
            }

            if (val.value === '123456') {
                this.openSet()
            } else {
                this.$message.error('密码错误')
            }
        },
        openPasswd () {
            this.$store.commit('updatePasswdVisible', true)
        },
        openSet () {
            this.$store.commit('updateSetVisible', true)
        },
        openExport () {
            this.$store.commit('updateExportVisible', true)
        },
        openDetailChart () {
            this.$store.commit('updateDetailChartVisible', true)
        },
        
    },
    beforeMount () {
        (function (H, vm) {
            Highcharts.Chart.prototype.callbacks.push(function (chart) {
                H.addEvent(chart.container, 'click', function (e) {
                    // console.log(this)
                    vm.openDetailChart()
                })
            })
        })(Highcharts, this)
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
.swRow {
    margin-bottom: 20px;
}
</style>
