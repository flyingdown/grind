<template>
    <div>
        <el-dialog title="提示" :visible="visibleOrNot"  fullscreen :before-close="handleClose">
            <vue-highcharts :options="options" ref="spline4"></vue-highcharts>
        </el-dialog>
    </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import { options, asyncData } from '@/config/chart-config'

export default {
    components: {
        VueHighcharts
    },
    mounted () {
        this.$refs.spline1.addSeries(asyncData)
    },
    computed: {
        visibleOrNot () {
            return this.$store.state.detailChartVisible
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
                this.$store.commit('updateDetailChartVisible', false)
            }).catch(_ => {})
        }
    },
}
</script>

<style>

</style>
