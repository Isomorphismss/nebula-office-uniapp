<template>
	<view class="page">
		<view class="summary-container">
			<view class="user-info">
				<image :src="photo" mode="widthFix" class="photo"></image>
				<view class="info">
					<text class="username">{{ name }}</text>
					<text class="dept">隶属部门：{{ deptName == null ? '无' : deptName }}</text>
				</view>
			</view>
			<view class="date">{{ date }}</view>
		</view>
		<view class="result-container">
			<view class="left">
				<image src="../../static/icon-6.png" mode="widthFix" class="icon-timer"></image>
				<image src="../../static/icon-6.png" mode="widthFix" class="icon-timer"></image>
				<view class="line"></view>
			</view>
			<view class="right">
				<view class="row">
					<text class="start">上班（时间 {{ attendanceTime }}）</text>
				</view>
				<view class="row">
					<text class="checkin-time">签到时间（{{ checkinTime }}）</text>
					<text class="checkin-result other green" v-if="status == '正常'">{{ status }}</text>
					<text class="checkin-result other yellow" v-if="status == '迟到'">{{ status }}</text>
				</view>
				<view class="row">
					<image src="../../static/icon-7.png" mode="widthFix" class="icon-small"></image>
					<text class="desc">{{ address }}</text>
					<text class="checkin-result green" v-if="risk == '低风险'">{{ risk }}</text>
					<text class="checkin-result yellow" v-if="risk == '中风险'">{{ risk }}</text>
					<text class="checkin-result red" v-if="risk == '高风险'">{{ risk }}</text>
				</view>
				<view class="row">
					<image src="../../static/icon-8.png" mode="widthFix" class="icon-small"></image>
					<text class="desc">身份验证</text>
					<text class="checkin-result green">已通过</text>
				</view>
				<view class="row">
					<text class="end">下班（时间 {{ closingTime }}）</text>
				</view>
			</view>
		</view>
		<view class="checkin-report">
			<image src="../../static/big-icon-1.png" mode="widthFix" class="big-icon"></image>
			<view class="report-title">
				<text class="days">{{ checkinDays }}</text>
				<text class="unit">天</text>
			</view>
			<view class="sub-title">
				<text>累计签到</text>
				<view class="line"></view>
			</view>
			<view class="calendar-container">
				<view class="calendar" v-for="one in weekCheckin" :key="one">
					<image src="../../static/icon-9.png" mode="widthFix" class="calendar-icon" v-if="one.type != '节假日'"></image>
					<image src="../../static/icon-10.png" mode="widthFix" class="calendar-icon" v-if="one.type == '节假日'"></image>
					<text class="day">{{ one.day }}</text>
					<text class="result green" v-if="one.status == '正常'">正常</text>
					<text class="result yellow" v-if="one.status == '迟到'">迟到</text>
					<text class="result red" v-if="one.status == '缺勤'">缺勤</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: "",
				photo: "",
				deptName: "",
				address: "",
				status: "",
				risk: "",
				checkinTime: "",
				date: "",
				attendanceTime: "",
				closingTime: "",
				checkinDays: 0,
				weekCheckin: []
			};
		},
		onShow: function() {
			let that = this;
			that.ajax(this.url.searchTodayCheckin, 'GET', null, function(resp) {
				let result = resp.data.result;
				that.name = result.name;
				that.photo = result.photo;
				that.deptName = result.deptName;
				that.date = result.date;
				that.attendanceTime = result.attendanceTime;
				that.closingTime = result.closingTime;
				that.checkinTime = result.checkinTime;
				that.status = result.status;
				that.risk = result.risk;
				that.address = result.address;
				that.checkinDays = result.checkinDays;
				that.weekCheckin = result.weekCheckin;
			});
		}, 
		methods: {
			
		}
	}
</script>

<style lang="less">
	@import url("checkin_result.less");
</style>
