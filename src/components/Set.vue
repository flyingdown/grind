<template>
    <div>
        <h1>参数设置</h1>
        <div class="back">
            <el-row>
                <el-col :push="20" :span="4">
                    <el-button type="primary" plain @click.native="goFirst">返回</el-button>
                </el-col>
            </el-row>
        </div>
        <el-row class="digital-row">
            <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                <span class="digitalDesc" v-if="val.rowNo === 1">{{val.title}}</span>
                <el-input-number v-if="val.rowNo === 1" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)" name="digital" class="digital"></el-input-number>
            </el-col>
        </el-row>
        <el-row class="digital-row">
            <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                <span class="digitalDesc" v-if="val.rowNo === 2">{{val.title}}</span>
                <el-input-number v-if="val.rowNo === 2" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)" name="digital" class="digital"></el-input-number>
            </el-col>
        </el-row>
        <el-row class="digital-row">
            <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                <span class="digitalDesc" v-if="val.rowNo === 3">{{val.title}}</span>
                <el-input-number v-if="val.rowNo === 3" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)" name="digital" class="digital"></el-input-number>
            </el-col>
        </el-row>
        <el-row class="digital-row">
            <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                <span class="digitalDesc" v-if="val.rowNo === 4" @click="digitalBlur(key)">{{val.title}}</span>
                <el-input-number v-if="val.rowNo === 4" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)" name="digital" class="digital"></el-input-number>
            </el-col>
        </el-row>
        <el-row class="digital-row">
            <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                <span class="digitalDesc" v-if="val.rowNo === 5" @click="digitalBlur(key)">{{val.title}}</span>
                <el-input-number v-if="val.rowNo === 5" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)" name="digital" class="digital"></el-input-number>
            </el-col>
        </el-row>
        <el-row class="digital-row">
            <el-col v-for="(val, key, index) in digitalConfig.digitalSet" :key="index" :span="val.colSpan">
                <span class="digitalDesc" v-if="val.rowNo === 6" @click="digitalBlur(key)">{{val.title}}</span>
                <el-input-number v-if="val.rowNo === 6" v-model="val.value" :disabled="val.disabled" :controls="val.controls" :ref="key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)" name="digital" class="digital"></el-input-number>
            </el-col>
        </el-row>

        <el-row class="switch-row">
            <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                <el-checkbox-button v-if="val.rowNo === 1" v-model="val.value" :disabled="val.disabled" :checked="val.checked"  @change="handleSwitch(key, val.value)">{{val.label}}{{val.value?'开':'关'}}</el-checkbox-button>
            </el-col>
        </el-row>
        <el-row class="switch-row">
            <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                <el-checkbox-button v-if="val.rowNo === 2" v-model="val.value" :disabled="val.disabled" :checked="val.checked"  @change="handleSwitch(key, val.value)">{{val.label}}{{val.value?'开':'关'}}</el-checkbox-button>
            </el-col>
        </el-row>
        <el-row class="switch-row">
            <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                <el-checkbox-button v-if="val.rowNo === 3" v-model="val.value" :disabled="val.disabled" :checked="val.checked"  @change="handleSwitch(key, val.value)">{{val.label}}{{val.value?'开':'关'}}</el-checkbox-button>
            </el-col>
        </el-row>
        <el-row class="switch-row">
            <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                <el-checkbox-button v-if="val.rowNo === 4" v-model="val.value" :disabled="val.disabled" :checked="val.checked"  @change="handleSwitch(key, val.value)">{{val.label}}{{val.value?'开':'关'}}</el-checkbox-button>
            </el-col>
        </el-row>
        <el-row class="switch-row">
            <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                <el-checkbox-button v-if="val.rowNo === 5" v-model="val.value" :disabled="val.disabled" :checked="val.checked"  @change="handleSwitch(key, val.value)">{{val.label}}{{val.value?'开':'关'}}</el-checkbox-button>
            </el-col>
        </el-row>
        <el-row class="switch-row">
            <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                <el-checkbox-button v-if="val.rowNo === 6" v-model="val.value" :disabled="val.disabled" :checked="val.value"  @change="handleSwitch(key, val.value)">{{val.label}}{{val.value?'开':'关'}}</el-checkbox-button>
            </el-col>
        </el-row>
        <el-row class="switch-row">
            <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                <el-checkbox-button v-if="val.rowNo === 7" v-model="val.value" :disabled="val.disabled" :checked="val.value"  @change="handleSwitch(key, val.value)">{{val.label}}{{val.value?'开':'关'}}</el-checkbox-button>
            </el-col>
        </el-row>
        <el-row class="switch-row">
            <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                <el-checkbox-button v-if="val.rowNo === 8" v-model="val.value" :disabled="val.disabled" :checked="val.value"  @change="handleSwitch(key, val.value)">{{val.label}}{{val.value?'开':'关'}}</el-checkbox-button>
            </el-col>
        </el-row>
        <el-row class="switch-row">
            <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                <el-checkbox-button v-if="val.rowNo === 9" v-model="val.value" :disabled="val.disabled" :checked="val.value"  @change="handleSwitch(key, val.value)">{{val.label}}{{val.value?'开':'关'}}</el-checkbox-button>
            </el-col>
        </el-row>
        <el-row class="switch-row">
            <el-col v-for="(val, key, index) in switchConfig.switchSet" :key="index" :span="val.colSpan">
                <el-checkbox-button v-if="val.rowNo === 10" v-model="val.value" :disabled="val.disabled" :checked="val.value"  @change="handleSwitch(key, val.value)">{{val.label}}{{val.value?'开':'关'}}</el-checkbox-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {patchDigital, patchSwitch} from '@/api/dataset'
import {digitalConfig, loadDigital, turnOffDigitalTimeout} from '@/config/digital-config'
import {switchConfig, loadSwitch, turnOffSwitchTimeout, handleSwitch} from '@/config/switch-config'

export default {
    data () {
        return {
            digitalConfig,
            switchConfig,
            handleSwitch
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
        turnOffTimeout () {
            turnOffDigitalTimeout()
            turnOffSwitchTimeout()
        },
        goFirst () {
            this.turnOffTimeout()
            this.$router.push('/')
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
            }).catch(_ => {
                this.$set(digitalConfig.digitalSet[key], 'disabled', true)
            })
        }
    },
    beforeDestroy () {
        this.turnOffTimeout()
    },
    mounted () {
        this.loadData()
    }
}
</script>
<style scoped>
.digital-row, .switch-row {
    margin-bottom: 20px;
}
</style>
