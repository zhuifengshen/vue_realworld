<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <!-- <a href="/login">Have an account?</a> -->
            <router-link to="login">Have an account?</router-link>
          </p>

          <ul v-if="err_msg" class="error-messages">
            <li>{{ err_msg }}</li>
          </ul>

          <form @submit.prevent="onRegisterSubmit">
            <fieldset class="form-group">
              <input
                v-model="user.username"
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.email"
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from '@/api/user'

export default {
  name: 'RegisterIndex',
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
      err_msg: '',
    }
  },
  methods: {
    async onRegisterSubmit() {
      if (this.user.username.trim().length < 4) {
        this.err_msg = '请输入有效用户名，至少4位以上'
        return
      } else if (
        !/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(
          this.user.email.trim()
        )
      ) {
        this.err_msg = '请输入有效邮箱'
        return
      } else if (this.user.password.trim().length < 8) {
        this.err_msg = '请输入有效密码，至少8位以上'
        return
      }

      try {
        const { status, data } = await register(this.user)
        console.log(data)
        // 记录登录状态：将登录成功获取的用户数据存储到 Vuex 容器中
        this.$store.commit('setUser', data.user)
        // 跳转到首页
        this.$router.push({ name: 'home' })
      } catch (err) {
        this.err_msg = err.response.data.errors
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
