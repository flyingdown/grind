<template>
    <div>
        <el-dialog title="导出" :visible="visibleOrNot"  fullscreen :before-close="handleClose">
            <el-row>
                <el-col>
                    <el-button icon="el-icon-download" type="primary" circle ></el-button>
                </el-col>
            </el-row>
            <el-table :data="simulations" stripe style="width: 100%">
                <el-table-column v-for="(value, key, index) in simulations[0]" :prop="key" :label="key" :key="index" align="center"></el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>
<script>
import {getSimulation} from '@/api/dataset'

export default {
    data () {
        return {
            simulations: []
        }
    },
    computed: {
        visibleOrNot () {
            return this.$store.state.exportVisible
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
                this.$store.commit('updateExportVisible', false)
            }).catch(_ => {})
        },
        loadSimulation () {
            getSimulation({
                'ordering': '-id'
            }).then((value) => {
                this.simulations = value.data.results
                console.log(this.simulations)
            }).catch((err) => {
                console.log(err)
            })
        },
        loadData () {
            this.loadSimulation()
        }
    },
    mounted () {
        this.loadData()
    }
}
</script>
<style>

</style>
