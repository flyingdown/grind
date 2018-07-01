<template>
    <div>
        <h1 id="title">和实科技高速列车研磨子综合试验台</h1>
        <div class='back'>
            <el-row>
                <el-col :push="20" :span="4">
                    <el-button type="primary" plain @click.native="close">关闭</el-button>
                </el-col>
            </el-row>
        </div>
        <el-row class="digitalRow">
            <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                <span class="digitalDesc" v-if="val.indexRowNo === 1">{{val.title}}</span>
                <el-input-number v-if="val.indexRowNo === 1" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)" name="digital" class="digital"></el-input-number>
            </el-col>
        </el-row>
        <el-row class="digitalRow">
            <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                <span class="digitalDesc" v-if="val.indexRowNo === 2">{{val.title}}</span>
                <el-input-number v-if="val.indexRowNo === 2" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)" name="digital" class="digital"></el-input-number>
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
                <el-checkbox-button v-if="val.indexRowNo === 1" v-model="val.value" :checked="val.value"  @change="handleSwitch(key, val.value)">{{val.label}}{{val.value?'开':'关'}}</el-checkbox-button>
            </el-col>
            <el-col class="swCol" :span="4">
               <el-button type="primary" @click="openExport" class="myButton">数据导出</el-button>
            </el-col>
            <el-col class="swCol" :span="4">
                <el-button type="primary" @click="openPasswd" class="myButton">系统设置</el-button>
            </el-col>
            <!-- <el-col class="swCol" :span="4">
               <el-button type="primary" @click.native="turnOffChartTimeout">关闭实时曲线</el-button>
            </el-col> -->
        </el-row>
        <el-row>
            <el-col :span="4" v-for="(val, key, index) in switchConfig.switchSet" :key="index">
                <el-checkbox-button v-if="val.indexRowNo === 2" v-model="val.value" :checked="val.value"  @change="handleSwitch(key, val.value)">{{val.label}}{{val.value?'开':'关'}}</el-checkbox-button>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" class="myButton" disabled>备用</el-button>
            </el-col>
            <!-- <el-col class="swCol" :span="4">
               <el-button type="primary" @click.native="turnOffDigitalTimeout">关闭实时数字</el-button>
            </el-col> -->
        </el-row>
        <passwd @getPasswd="getPasswd"></passwd>
    </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import { options, seriesConfig, loadData, turnOffChartTimeout } from '@/config/simulation-config'
import Highcharts from 'highcharts'
import {digitalConfig, loadDigital, turnOffDigitalTimeout} from '@/config/digital-config'
import {switchConfig, loadSwitch, turnOffSwitchTimeout, handleSwitch} from '@/config/switch-config'
import Passwd from '@/components/Passwd'

export default {
    name: 'First',
    data () {
        return {
            options,
            Highcharts,
            digitalConfig,
            switchConfig,
            turnOffChartTimeout,
            turnOffDigitalTimeout,
            handleSwitch
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
        close () {
            global.opener=null
            global.open('','_self')
            global.parent.close()
            this.$message.info('关闭失效，请使用快捷键ctrl+w')
        },
        turnOffTimeout () {
            turnOffChartTimeout()
            turnOffDigitalTimeout()
            turnOffSwitchTimeout()
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
#title {
    margin: 30px auto 30px auto;
    width: 66%;
    text-align:justify;
    text-justify:distribute-all-lines;/*ie6-8*/
    text-align-last:justify;/* ie9*/
    -moz-text-align-last:justify;/*ff*/
    -webkit-text-align-last:justify;/*chrome 20+*/
}

.swRow, .swCol, .digitalRow {
    margin-bottom: 20px;
}
.pre-desc {
    display: block;
    line-height: 60px;
}

/*.el-input.is-disabled .el-input__inner, .el-input .el-input__inner {*/
.digital>.el-input [name="digital"] {
    background-color: black;
    font-weight: bold;
    font-size: 20px;
    color: #15ff00;
    height: 60px;
    line-height: 60px;
}

div.digital {
    width: 50%;
    display: inline-block;
    /*float: right;*/
}

.digital>.el-input-number__decrease, .digital>.el-input-number__increase  {
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

.myButton>span {
    border-radius: 4px;
    width: 141px;
    font-size: 20px;
    font-weight: bold;
    border-width: 2px;
    display: inline-block;
}

.back {
    position: absolute;
    top: 0px;
    right: 60px;
}

.digitalDesc {
    background-color: black;
    border: 1px solid black;
    height: 58px;
    line-height: 58px;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    color: #15ff00;
    border-radius: 4px;
    cursor: pointer;
    width: 40%;
    /*letter-spacing: 4px;*/
}

</style>
