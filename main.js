import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

let baseUrl = "http://Redacted/emos-wx-api"

Vue.prototype.url={
	register:baseUrl+"/user/register",
	login:baseUrl+"/user/login",
	checkin: baseUrl + "/checkin/checkin",
	createFaceModel: baseUrl + "/checkin/createFaceModel",
	validCanCheckIn: baseUrl + "/checkin/validCanCheckIn",
	searchTodayCheckin: baseUrl + "/checkin/searchTodayCheckin",
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
					console.log("ajax返回的token为：", token)
					uni.setStorageSync("token", token)
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

Vue.prototype.checkPermission = function(perms) {
	let permission = uni.getStorageSync("permission")
	let result = false;
	for (let one of perms) {
		if (permission.indexOf(one) != -1) {
			result = true;
			break;
		}
	}
	return result;
}
