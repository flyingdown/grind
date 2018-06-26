<template>
    <div>
        <h1>河南和实研磨子试验台</h1>
        <el-row>
            <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                    <el-input-number v-if="val.indexRowNo === 1" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)"></el-input-number>
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
                <el-checkbox-button v-if="val.indexRowNo === 1" v-model="val.value" :checked="val.value"  @change="handleSwitch(key, val.value)">{{key}}{{val.label}}</el-checkbox-button>
            </el-col>
            <el-col class="swCol" :span="4">
               <el-button type="primary" @click="openExport">导出</el-button>
            </el-col>
            <el-col class="swCol" :span="4">
               <el-button type="primary" @click.native="toggleChart">关闭实时曲线</el-button>
            </el-col>
        </el-row>
        <el-row class="swRow">
            <el-col :span="4" v-for="(val, key, index) in switchConfig.switchSet" :key="index">
                <el-checkbox-button v-if="val.indexRowNo === 2" v-model="val.value" :checked="val.value"  @change="handleSwitch(key, val.value)">{{key}}{{val.label}}</el-checkbox-button>
            </el-col>
            <el-col class="swCol" :span="4">
                <el-button type="primary" @click="openPasswd" >设置</el-button>
            </el-col>
            <el-col class="swCol" :span="4">
               <el-button type="primary" @click.native="toggleDigital('off')">开/关实时数字</el-button>
            </el-col>
        </el-row>
        <passwd @getPasswd="getPasswd"></passwd>
    </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import { options, seriesConfig, loadData, turnOffChartTimeout } from '@/config/simulation-config'
import Highcharts from 'highcharts'
import {digitalConfig, loadDigital, toggleDigitalTimeout} from '@/config/digital-config'
import {switchConfig, loadSwitch} from '@/config/switch-config'
import Passwd from '@/components/Passwd'

export default {
    name: 'First',
    data () {
        return {
            options,
            Highcharts,
            digitalConfig,
            switchConfig
        }
    },
    computed: {
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
        mySeries () {
            return  Object.assign({}, seriesConfig)
        }
    },
    components: {
        VueHighcharts,
        Passwd
    },
    methods: {
        turnOffTimeout () {
            this.toggleChart('off')
            this.toggleDigital('off')
        },
        getPasswd (val) {
            if (val.target === "cancel") {
                return
            }

            if (val.value === '123456') {
                this.turnOffTimeout()
                this.$router.push('/set')
            } else {
                this.$message.error('密码错误')
            }
        },
        openPasswd () {
            this.$store.commit('updatePasswdVisible', true)
        },
        openExport () {
            this.turnOffTimeout()
            this.$router.push('/export')
        },
        toggleChart (op) {
            return turnOffChartTimeout()
        },
        toggleDigital (op) {
            return toggleDigitalTimeout(op)
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

            loadData(splines, this.mySeries, 100)
            loadDigital(digitalConfig)
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
                    if (vm.$route.path === '/detail') {
                        console.log('already detail')
                        return
                    }
                    console.log(vm.$route.path)
                    vm.$store.commit('updateDetailChart', chart.info)
                    vm.turnOffTimeout()
                    vm.$router.push('/detail')
                })
            })
        })(Highcharts, this)
    },
    beforeDestroy () {
        this.turnOffTimeout()
    },
    mounted () {
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

.el-input.is-disabled .el-input__inner, .el-input .el-input__inner {
    background-color: black;
    font-weight: bold;
    font-size: 25px;
    color: #15ff00;
    height: 60px;
    line-height: 60px;
}

.el-input-number__decrease, .el-input-number__increase  {
    height: 58px;
    line-height: 58px;
    background-color: black;
    color: #15ff00;
}

.el-checkbox-button:last-child .el-checkbox-button__inner {
    border-radius: 4px;
    width: 185px;
    font-size: 20px;
    font-weight: bold;
    border-width: 2px;
}

</style>
