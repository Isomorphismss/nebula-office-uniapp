import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

let baseUrl = "http://127.0.0.1:8080/emos-wx-api"
Vue.prototype.url={
	register:baseUrl+"/user/register"
}

Vue.prototype.ajax=function(url,method,data,fun){
	uni.request({
		"url":url,
		"method":method,
		"header":{
			token:uni.getStorageSync("token")
		},
		"data":data,
		success:function(resp){
			if(resp.statusCode==401){
				uni.redirectTo({
					url:"/pages/login/login.vue"
				})
			}
			else if(resp.statusCode==200&&resp.data.code==200){
				let data=resp.data
				if(data.hasOwnProperty("token")){
					let token=data.token
					console.log(token)
					uni.setStorageSync("token",token)
				}
				fun(resp)
			}
			else{
				uni.showToast({
					icon:"none",
					title:resp.data
				})
			}
		}
	})
}