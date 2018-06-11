<template>
    <div>
        <el-dialog title="提示" :visible="visibleOrNot"  fullscreen :before-close="handleClose">
            <span>Set</span>
        </el-dialog>
    </div>
</template>
<script>
export default {
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
        }
    },
}
</script>
<style>

</style>
