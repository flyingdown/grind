<template>
    <div>
        <h1>模拟量导出</h1>
        <div>
            <el-row class="back">
                <el-col :push="20" :span="4">
                    <el-button type="primary" plain @click.native="goFirst">返回</el-button>
                </el-col>
            </el-row>
        </div>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-date-picker ref="datetimePicker" v-model="pickedTime" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd HH:mm:ss" @change="datetimePicked"></el-date-picker>
            </el-col>
            <el-col :span="3">
                <el-button icon="el-icon-download" type="primary" circle @click.native="exportSimulation"></el-button>
            </el-col>
        </el-row>
        <el-table :data="simulations" stripe style="width: 100%">
            <el-table-column v-for="(value, key, index) in simulations[0]" :prop="key" :label="key" :key="index" align="center"></el-table-column>
        </el-table>
    </div>
</template>
<script>
import {getSimulation} from '@/api/dataset'

export default {
    data () {
        return {
            pickedTime: null,
            simulations: []
        }
    },
    methods: {
        goFirst () {
            this.$router.push('/')
        },
        datetimePicked (val) {
            let request = {
                'ordering': '-id',
                'page_size': 10000
            }
            if(this.pickedTime) {
                request['min_date'] = this.pickedTime[0],
                request['max_date'] = this.pickedTime[1]
            }
            this.loadSimulation(request)
        },
        loadSimulation (request) {

            getSimulation(request).then((value) => {
                console.log(value)
                this.simulations = value.data.results
                console.log(this.simulations)
            }).catch((err) => {
                console.log(err)
            })
        },
        exportSimulation () {
            let request = {
                'export': 'export/xlsx/file'
            }
            if(this.pickedTime) {
                request['min_date'] = this.pickedTime[0],
                request['max_date'] = this.pickedTime[1]
            }
            getSimulation(request)
        },
        loadData () {
            let request = {
                'ordering': '-id'
            }
            this.loadSimulation(request)
        }
    },
    mounted () {
        this.loadData()
    }
}
</script>
<style>

</style>
