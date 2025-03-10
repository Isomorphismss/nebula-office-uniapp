import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

const globalData = getApp().globalData;

Vue.prototype.globalData = globalData;

Vue.prototype.code = globalData.CODE	

Vue.prototype.url = {
	register: globalData.BASE_URL + "/user/register",
	login: globalData.BASE_URL + "/user/login",
	checkin: globalData.BASE_URL + "/checkin/checkin",
	createFaceModel: globalData.BASE_URL + "/checkin/createFaceModel",
	validCanCheckIn: globalData.BASE_URL + "/checkin/validCanCheckIn",
	searchTodayCheckin: globalData.BASE_URL + "/checkin/searchTodayCheckin",
	searchUserSummary: globalData.BASE_URL + "/user/searchUserSummary",
	searchMonthCheckin: globalData.BASE_URL + "/checkin/searchMonthCheckin",
	refreshMessage: globalData.BASE_URL + "/message/refreshMessage",
	searchMessageByPage: globalData.BASE_URL + "/message/searchMessageByPage",
	searchMessageById: globalData.BASE_URL + "/message/searchMessageById",
	updateUnreadMessage: globalData.BASE_URL + "/message/updateUnreadMessage",
	deleteMessageRefById: globalData.BASE_URL + "/message/deleteMessageRefById",
	searchMyMeetingListByPage: globalData.BASE_URL + "/meeting/searchMyMeetingListByPage",
	searchUserGroupByDept: globalData.BASE_URL + "/user/searchUserGroupByDept",
	searchMembers: globalData.BASE_URL + "/user/searchMembers",
	insertMeeting: globalData.BASE_URL + "/meeting/insertMeeting",
	searchMeetingById: globalData.BASE_URL + "/meeting/searchMeetingById",
	updateMeetingInfo: globalData.BASE_URL + "/meeting/updateMeetingInfo",
	deleteMeetingById: globalData.BASE_URL + "/meeting/deleteMeetingById",
	searchUserTaskListByPage: globalData.WORKFLOW_URL + "/workflow/searchUserTaskListByPage",
	approvalMeeting: globalData.WORKFLOW_URL + "/workflow/approvalMeeting",
	selectUserPhotoAndName: globalData.BASE_URL + "/user/selectUserPhotoAndName",
	genUserSig: globalData.BASE_URL + "/user/genUserSig",
	searchRoomIdByUUID: globalData.BASE_URL + "/meeting/searchRoomIdByUUID",
	searchUserMeetingInMonth: globalData.BASE_URL + "/meeting/searchUserMeetingInMonth"
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

Date.prototype.format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}

Vue.prototype.checkNull = function(data, name) {
	if (data == null) {
		uni.showToast({
			icon: "none",
			title: name + "不能为空"
		})
		return true
	}
	return false
}

Vue.prototype.checkBlank = function(data, name) {
	if (data == null || data == "") {
		uni.showToast({
			icon: "none",
			title: name + "不能为空"
		})
		return true
	}
	return false
}

Vue.prototype.checkValidName = function(data, name) {
	if (data == null || data == "") {
		uni.showToast({
			icon: "none",
			title: name + "不能为空"
		})
		return true
	} else if (!/^[\u4e00-\u9fa5]{2,15}$/.test(data)) {
		uni.showToast({
			icon: "none",
			title: name + "内容不正确"
		})
		return true
	}
	return false
}

Vue.prototype.checkValidTel = function(data, name) {
	if (data == null || data == "") {
		uni.showToast({
			icon: "none",
			title: name + "不能为空"
		})
		return true
	} else if (!/^1[0-9]{10}$/.test(data)) {
		uni.showToast({
			icon: "none",
			title: name + "内容不正确"
		})
		return true
	}
	return false
}

Vue.prototype.checkValidEmail = function(data, name) {
	if (data == null || data == "") {
		uni.showToast({
			icon: "none",
			title: name + "不能为空"
		})
		return true
	} else if (!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(data)) {
		uni.showToast({
			icon: "none",
			title: name + "内容不正确"
		})
		return true
	}
	return false
}

Vue.prototype.checkValidStartAndEnd = function(start, end) {
	let d1 = new Date("2000/01/01 " + start + ":00");
	let d2 = new Date("2000/01/01 " + end + ":00");
	if (d2.getTime() <= d1.getTime()) {
		uni.showToast({
			icon: "none",
			title: "结束时间必须大于开始时间"
		})
		return true
	}
	return false
}

Vue.prototype.tencent = {
	trtc: {
		appid: "000000"
	}
}
