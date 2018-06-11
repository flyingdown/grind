<template>
    <div>
        <el-dialog title="请输入密码：" :visible="visibleOrNot" :before-close="handleClose">
            <el-input v-model="passwd" type="password" placeholder="请输入内容"></el-input>
            <span slot="footer" class="dialog-footer">
               <el-button @click="closeDialog('cancel')">取 消</el-button>
               <el-button type="primary" @click="closeDialog('confirm')">确 定</el-button>
             </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data () {
        return {
            passwd: ''
        }
    },
    computed: {
        visibleOrNot () {
            return this.$store.state.passwdVisible
        }
    },
    watch: {
        visibleOrNot (val, oldVal) {
            console.log(val + ":" + oldVal)
        }
    },
    methods: {
        closeDialog (target) {
            this.$store.commit('updatePasswdVisible', false)
            this.$emit('getPasswd', {
                value: this.passwd,
                target
            })
            this.passwd = ''
        },
        handleClose(done) {
            done()
            this.closeDialog()
        }
    },
}
</script>
<style>

</style>
