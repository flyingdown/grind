<template>
    <div>
        <el-dialog title="设置" :visible="visibleOrNot" fullscreen :before-close="handleClose">
            <el-row>
                <el-col class="digital-col" :span="key!=='id' ? 4 : 0" v-for="(val, key, index) in digitalSet" :key="index">
                    <el-input-number v-if="key!=='id'" v-model="val.value" controls-position="right" :disabled="val.disabled" :controls="val.controls" :ref="'digitalInput' + key" @blur="digitalBlur(key)" @dblclick.native="handleDigital(key, $event)"></el-input-number>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="switch-col" :span="key!=='id' ? 2 : 0" v-for="(val, key, index) in switchSet" :key="index">
                    <el-checkbox-button v-if="key!=='id'" v-model="switchSet[key].value" :checked="val.value" @change="handleSwitch(key, val.value)">{{val.value}}</el-checkbox-button>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>
<script>
import {getDigital, getSwitch, patchDigital, patchSwitch} from '@/api/dataset'

export default {
    data () {
        return {
            digitalSet: {},
            switchSet: {},
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
                this.$store.commit('updateSetVisible', false)
            }).catch(_ => {})
        },
        loadDigital () {
            getDigital({'ordering': 'id'}).then((value) => {
                let val = value.data.results[0]
                for (let i in val) {
                    this.$set(this.digitalSet, i, {
                        label: i,
                        value: val[i],
                        controls: false,
                        disabled: true
                    })
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        loadSwitch () {
            getSwitch({'ordering': '-id'}).then((value) => {
                let val = value.data.results[0]
                for (let i in val) {
                    this.$set(this.switchSet, i, {
                        label: i,
                        value: i === 'id' ? val[i] : val[i] > 0
                    })
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        handleSwitch(key, val) {
            console.log(key + ':' + val)
            let sw = {}
            sw[key] = val
            patchSwitch({
                'id': this.switchSet.id.value,
                'switch': sw
            }).then((value) => {
                console.log(value)
            }).catch((err) => {
                console.log(err)
            })
        },
        loadData () {
            this.loadDigital()
            this.loadSwitch()
        },
        handleDigital (key, event) {
            this.$set(this.digitalSet[key], 'disabled', false)
            this.$set(this.digitalSet[key], 'controls', true)
        },
        digitalBlur (key) {
            this.$confirm('确认提交？').then(_ => {
                this.$set(this.digitalSet[key], 'disabled', true)
                this.$set(this.digitalSet[key], 'controls', false)
                let digital = {}
                digital[key] = this.digitalSet[key].value
                console.log(key + ':' + this.digitalSet[key].value)
                patchDigital({
                    'id': this.digitalSet.id.value,
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
        this.loadData()
    }
}
</script>
<style scoped>
.digital-col, .switch-col {
    margin-bottom: 20px;
}
</style>
