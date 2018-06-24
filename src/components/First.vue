<template>
    <div>
        <h1>河南和实研磨子试验台</h1>
        <el-row>
            <el-col :span="1" :offset="3"><span class="pre-desc">速度:</span></el-col>
            <el-col :span="2">
                <el-input v-model="mySpeed" :disabled="true"></el-input>
                <!-- <el-tag type="success" size="medium">{{mySpeed}}</el-tag> -->
            </el-col>
            <el-col :span="1" :offset="3"><span class="pre-desc">温度:</span></el-col>
            <el-col :span="2">
                <el-input v-model="myTemperature" :disabled="true"></el-input>
            </el-col>
            <el-col :span="1" :offset="3"><span class="pre-desc">压力:</span></el-col>
            <el-col :span="2">
                <el-input v-model="myPressure" :disabled="true"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <vue-highcharts :highcharts="Highcharts" :options="myOptions" ref="spline1" classname="spline1"></vue-highcharts>
            </el-col>
            <el-col :span="8">
                <vue-highcharts :highcharts="Highcharts" :options="myOptions" ref="spline2" classname="spline2"></vue-highcharts>
            </el-col>
            <el-col :span="8">
                <vue-highcharts :highcharts="Highcharts" :options="myOptions" ref="spline3" classname="spline3"></vue-highcharts>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <vue-highcharts :highcharts="Highcharts" :options="myOptions" ref="spline4" classname="spline4"></vue-highcharts>
            </el-col>
            <el-col :span="8">
                <vue-highcharts :highcharts="Highcharts" :options="myOptions" ref="spline5" classname="spline5"></vue-highcharts>
            </el-col>
            <el-col :span="8">
                <vue-highcharts :highcharts="Highcharts" :options="myOptions" ref="spline6" classname="spline6"></vue-highcharts>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4" v-for="(val, key, index) in switchConfig.switchSet" :key="index">
                <el-checkbox-button v-if="val.indexRowNo === 1" v-model="val.value" :checked="val.value"  @change="handleSwitch(key, val.value)">{{key}}</el-checkbox-button>
            </el-col>
            <el-col class="swCol" :span="4">
               <el-button type="primary" @click="openExport">导出</el-button>
            </el-col>
            <el-col class="swCol" :span="4">
               <el-button type="primary" @click.native="toggle">关闭实时曲线</el-button>
            </el-col>
        </el-row>
        <el-row class="swRow">
            <el-col :span="4" v-for="(val, key, index) in switchConfig.switchSet" :key="index">
                <el-checkbox-button v-if="val.indexRowNo === 2" v-model="val.value" :checked="val.value"  @change="handleSwitch(key, val.value)">{{key}}</el-checkbox-button>
            </el-col>
            <el-col class="swCol" :span="4">
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
import { options, simulationConfig, loadData, toggleTimeout } from '@/config/chart-config'
import Passwd from '@/components/Passwd'
import Set from '@/components/Set'
import Export from '@/components/Export'
import ChartDetail from '@/components/ChartDetail'
import Highcharts from 'highcharts'
import {getSimulation} from '@/api/dataset'
import {switchConfig, loadSwitch} from '@/config/switch-config'

export default {
    name: 'First',
    data () {
        return {
            checked: true,
            options,
            Highcharts,
            switchConfig
        }
    },
    watch: {
        checked (val, oldVal) {
            console.log(val + ':' + oldVal)
        }
    },
    computed: {
        mySpeed () {
            return this.$store.state.speed
        },
        myTemperature () {
            return this.$store.state.temperature
        },
        myPressure () {
            return this.$store.state.pressure
        },
        myOptions () {
            let options = {}
            Object.assign(options, this.options)
            options.exporting = {
                buttons: {
                    contextButton: {
                        enabled: false
                    }
                }
            }
            // console.log(this.options)
            return options
        },
        mySimulation () {
            return  Object.assign({}, simulationConfig)
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
        toggle () {
            return toggleTimeout()
        },
        load () {
            let splines = {
                spline1: this.$refs.spline1,
                spline2: this.$refs.spline2,
                spline3: this.$refs.spline3,
                spline4: this.$refs.spline4,
                spline5: this.$refs.spline5,
                spline6: this.$refs.spline6
            }

            loadData(splines, this.mySimulation)
            loadSwitch(switchConfig) // 更新首页的8个开关值
        },
        handleSwitch(key, val) {
            console.log(key + ':' + val)
            if (switchConfig.switchSet[key].readOnly) {
                console.log('只读开关量')
                this.$set(switchConfig.switchSet[key], 'value', !val)
                return
            }
        }
    },
    beforeMount () {
        (function (H, vm) {
            Highcharts.Chart.prototype.callbacks.push(function (chart) {
                H.addEvent(chart.container, 'click', function (e) {
                    vm.$store.commit('updateDetailChart', chart)
                    vm.openDetailChart()
                })
            })
        })(Highcharts, this)
    },
    mounted () {
        console.log(simulationConfig)
        this.load()
    }
}

</script>
<style>
.swRow, .swCol {
    margin-bottom: 20px;
}
.pre-desc {
    display: block;
    line-height: 60px;
}

.el-input.is-disabled .el-input__inner {
    background-color: black;
    font-weight: bold;
    font-size: 25px;
    color: #15ff00;
    height: 60px;
    line-height: 60px;
}

[class^=el-icon-],.el-input-number.is-disabled .el-input-number__decrease, .el-input-number.is-disabled .el-input-number__increase  {
    height: 58px;
    line-height: 58px;
    background-color: black;
}

.el-checkbox-button:last-child .el-checkbox-button__inner {
    border-radius: 4px;
    width: 185px;
    font-size: 20px;
    font-weight: bold;
    border-width: 2px;
}

</style>
