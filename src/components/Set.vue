<template>
    <div>
        <el-dialog title="设置" :visible="visibleOrNot" fullscreen :before-close="handleClose" @open="handleOpen">
            <el-row class="digital-row">
                <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                    <el-input-number v-if="val.rowNo === 1" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)"></el-input-number>
                </el-col>
            </el-row>
            <el-row class="digital-row">
                <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                    <el-input-number v-if="val.rowNo === 2" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)"></el-input-number>
                </el-col>
            </el-row>
            <el-row class="digital-row">
                <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                    <el-input-number v-if="val.rowNo === 3" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)"></el-input-number>
                </el-col>
            </el-row>
            <el-row class="digital-row">
                <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                    <el-input-number v-if="val.rowNo === 4" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)"></el-input-number>
                </el-col>
            </el-row>
            <el-row class="digital-row">
                <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                    <el-input-number v-if="val.rowNo === 5" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)"></el-input-number>
                </el-col>
            </el-row>
            <el-row class="digital-row">
                <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                    <el-input-number v-if="val.rowNo === 6" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)"></el-input-number>
                </el-col>
            </el-row>

            <el-row class="switch-row">
                <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                    <el-checkbox-button v-if="val.rowNo === 1" v-model="val.value" :disabled="val.disabled" :checked="val.checked"  @change="handleSwitch(key, val.value)">{{key}}</el-checkbox-button>
                </el-col>
            </el-row>
            <el-row class="switch-row">
                <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                    <el-checkbox-button v-if="val.rowNo === 2" v-model="val.value" :disabled="val.disabled" :checked="val.checked"  @change="handleSwitch(key, val.value)">{{key}}</el-checkbox-button>
                </el-col>
            </el-row>
            <el-row class="switch-row">
                <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                    <el-checkbox-button v-if="val.rowNo === 3" v-model="val.value" :disabled="val.disabled" :checked="val.checked"  @change="handleSwitch(key, val.value)">{{key}}</el-checkbox-button>
                </el-col>
            </el-row>
            <el-row class="switch-row">
                <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                    <el-checkbox-button v-if="val.rowNo === 4" v-model="val.value" :disabled="val.disabled" :checked="val.checked"  @change="handleSwitch(key, val.value)">{{key}}</el-checkbox-button>
                </el-col>
            </el-row>
            <el-row class="switch-row">
                <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                    <el-checkbox-button v-if="val.rowNo === 5" v-model="val.value" :disabled="val.disabled" :checked="val.checked"  @change="handleSwitch(key, val.value)">{{key}}</el-checkbox-button>
                </el-col>
            </el-row>
            <el-row class="switch-row">
                <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                    <el-checkbox-button v-if="val.rowNo === 6" v-model="val.value" :disabled="val.disabled" :checked="val.value"  @change="handleSwitch(key, val.value)">{{key}}</el-checkbox-button>
                </el-col>
            </el-row>
            <el-row class="switch-row">
                <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                    <el-checkbox-button v-if="val.rowNo === 7" v-model="val.value" :disabled="val.disabled" :checked="val.value"  @change="handleSwitch(key, val.value)">{{key}}</el-checkbox-button>
                </el-col>
            </el-row>
            <el-row class="switch-row">
                <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                    <el-checkbox-button v-if="val.rowNo === 8" v-model="val.value" :disabled="val.disabled" :checked="val.value"  @change="handleSwitch(key, val.value)">{{key}}</el-checkbox-button>
                </el-col>
            </el-row>
            <el-row class="switch-row">
                <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                    <el-checkbox-button v-if="val.rowNo === 9" v-model="val.value" :disabled="val.disabled" :checked="val.value"  @change="handleSwitch(key, val.value)">{{key}}</el-checkbox-button>
                </el-col>
            </el-row>
            <el-row class="switch-row">
                <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                    <el-checkbox-button v-if="val.rowNo === 10" v-model="val.value" :disabled="val.disabled" :checked="val.value"  @change="handleSwitch(key, val.value)">{{key}}</el-checkbox-button>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>
<script>
import {patchDigital, patchSwitch} from '@/api/dataset'
import {digitalConfig, loadDigital, toggleTimeout} from '@/config/digital-config'
import {switchConfig, loadSwitch} from '@/config/switch-config'

export default {
    data () {
        return {
            digitalConfig,
            switchConfig
        }
    },
    computed: {
        visibleOrNot () {
            return this.$store.state.setVisible
        }
    },
    watch: {
        visibleOrNot (val, oldVal) {
            console.log(val + ":" + oldVal)
        }
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？').then(_ => {
                done()
                toggleTimeout()
                this.$store.commit('updateSetVisible', false)
            }).catch(_ => {})
        },
        handleOpen() {
            // toggleTimeout()
            this.loadData()
        },
        handleSwitch(key, val) {
            console.log(key + ':' + val)
            if (switchConfig.switchSet[key].readOnly) {
                console.log('只读开关量')
                this.$set(switchConfig.switchSet[key], 'value', !val)
                return
            }
            switchConfig.switchSet[key].label = (val ? '开' : '关')
            console.log(switchConfig)
            let sw = {}
            sw[key] = val
            patchSwitch({
                'id': switchConfig.id,
                'switch': sw
            }).then((value) => {
                console.log(value)
                // loadSwitch(switchConfig)
                setTimeout(loadSwitch, 1000, switchConfig)
            }).catch((err) => {
                console.log(err)
            })
        },
        loadData () {
            loadDigital(digitalConfig)
            loadSwitch(switchConfig)
        },
        handleDigital (key, event) {
            // console.log(key, event)
            if (digitalConfig.digitalSet[key].readOnly) {
                console.log('只读数字量')
                return
            }
            this.$set(digitalConfig.digitalSet[key], 'disabled', false)
            // console.log(digitalConfig)
        },
        digitalBlur (key) {
            this.$confirm('确认提交？').then(_ => {
                console.log(key + ':' + digitalConfig.digitalSet[key].value)
                this.$set(digitalConfig.digitalSet[key], 'disabled', true)
                let digital = {}
                digital[key] = digitalConfig.digitalSet[key].value
                patchDigital({
                    'id': digitalConfig.id,
                    'digital': digital
                }).then((value) => {
                    console.log(value)
                }).catch((err) => {
                    console.log(err)
                })
            }).catch(_ => {})
        }
    },
    mounted () {
        // this.loadData()
    }
}
</script>
<style scoped>
.digital-row, .switch-row {
    margin-bottom: 20px;
}
</style>
