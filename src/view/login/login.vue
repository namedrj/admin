<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
import { getTableData, getExport } from "@/api/data";
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'handleLogOut'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        if (res.data.status == 0) {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('username', userName)
          localStorage.setItem('pid', 2)
          let token = localStorage.getItem('token');
          let username = localStorage.getItem('username')
          this.$router.push('/multilevel/level_2_1');
          // this.handleChannelInfo({ username, token }).then(res => {
          // })
        } else {
          this.handleLogOut()
        }
      })
      // this.handleLogin({ userName, password }).then(res => {
      //   this.getUserInfo().then(res => {
      //     this.$router.push({
      //       name: this.$config.homeName
      //     })
      //   })
      // })
    }
  }
}
</script>

<style>

</style>
