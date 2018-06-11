<template>
    <div>
        <el-dialog title="提示" :visible="visibleOrNot"  fullscreen :before-close="handleClose">
            <span>Export</span>
        </el-dialog>
    </div>
</template>
<script>
export default {
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
        }
    },
}
</script>
<style>

</style>
