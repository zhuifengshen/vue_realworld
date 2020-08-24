<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <!-- <a href="/register">Don't have an account?</a> -->
            <router-link to="register">Don't have an account?</router-link>
          </p>

          <ul
            v-if="err_msg"
            class="error-messages"
          >
            <li>{{ err_msg }}</li>
          </ul>

          <form @submit.prevent="onLoginSubmit">
            <!-- <fieldset class="form-group">
							<input class="form-control form-control-lg" type="text" placeholder="Your Name">
						</fieldset> -->
            <fieldset class="form-group">
              <input
                v-model="user.email"
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              >
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              >
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign in
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
	name: 'LoginIndex',
	data(){
		return {
			user: {
				email: '',
				password: ''
      },
      err_msg: ''
		}
	},
	methods: {
		async onLoginSubmit(){
			try{
				const { status, data } = await login(this.user)
        console.log(data)
				// 记录登录状态：将登录成功获取的用户数据存储到 Vuex 容器中
				this.$store.commit('setUser', data.user)
				
				// 跳转到首页
				this.$router.push({
					name: 'home'
				})
			}catch(err){
        this.err_msg = err.response.data.errors
				console.log(err)
			}
		}
	}
}
</script>

<style>
</style>
