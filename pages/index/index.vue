<template>
	<view class="page">
		<swiper circular="true" duration="1000" interval="8000" class="swiper">
			<swiper-item>
				<image mode="widthFix" src="https://static-1334177744.cos.na-ashburn.myqcloud.com/img%2Fbanner%2Fswiper-1.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image mode="widthFix" src="https://static-1334177744.cos.na-ashburn.myqcloud.com/img%2Fbanner%2Fswiper-2.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image mode="widthFix" src="https://static-1334177744.cos.na-ashburn.myqcloud.com/img%2Fbanner%2Fswiper-3.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image mode="widthFix" src="https://static-1334177744.cos.na-ashburn.myqcloud.com/img%2Fbanner%2Fswiper-4.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image mode="widthFix" src="https://static-1334177744.cos.na-ashburn.myqcloud.com/img%2Fbanner%2Fswiper-5.jpg"></image>
			</swiper-item>
		</swiper>
		<view class="notify-container" @tap="toPage('消息提醒', '/pages/message_list/message_list')">
			<view class="notify-title">
				<image src="../../static/icon-1.png" mode="widthFix" class="notify-icon"></image>
				消息提醒
			</view>
			<view class="notify-content">你有{{ unreadRows }}条未读消息</view>
			<image src="../../static/icon-2.png" mode="widthFix" class="more-icon"></image>
		</view>
		<view class="nav-container">
			<view class="nav-row">
				<view class="nav" @tap="toPage('在线签到', '../checkin/checkin')">
					<image src="../../static/nav-1.png" mode="widthFix" class="icon"></image>
					<text class="name">在线签到</text>
				</view>
				<view class="nav">
					<image src="../../static/nav-2.png" mode="widthFix" class="icon"></image>
					<text class="name">员工健康</text>
				</view>
				<view class="nav">
					<image src="../../static/nav-3.png" mode="widthFix" class="icon"></image>
					<text class="name">在线请假</text>
				</view>
				<view class="nav">
					<image src="../../static/nav-4.png" mode="widthFix" class="icon"></image>
					<text class="name">公务出差</text>
				</view>
			</view>
			<view class="nav-row">
				<view class="nav">
					<image src="../../static/nav-5.png" mode="widthFix" class="icon"></image>
					<text class="name">员工日报</text>
				</view>
				<view class="nav">
					<image src="../../static/nav-6.png" mode="widthFix" class="icon"></image>
					<text class="name">我的加班</text>
				</view>
				<view class="nav">
					<image src="../../static/nav-7.png" mode="widthFix" class="icon"></image>
					<text class="name">付款申请</text>
				</view>
				<view class="nav">
					<image src="../../static/nav-8.png" mode="widthFix" class="icon"></image>
					<text class="name">费用报销</text>
				</view>
			</view>
			<view class="nav-row">
				<view class="nav">
					<image src="../../static/nav-9.png" mode="widthFix" class="icon"></image>
					<text class="name">公告通知</text>
				</view>
				<view class="nav" @tap="toPage('在线审批', '../approval_list/approval_list')">
					<image src="../../static/nav-10.png" mode="widthFix" class="icon"></image>
					<text class="name">在线审批</text>
				</view>
				<view class="nav">
					<image src="../../static/nav-11.png" mode="widthFix" class="icon"></image>
					<text class="name">物品领用</text>
				</view>
				<view class="nav">
					<image src="../../static/nav-12.png" mode="widthFix" class="icon"></image>
					<text class="name">采购申请</text>
				</view>
			</view>
		</view>
		<view class="calendar-container">
			<uni-calendar :insert="true" :lunar="true" :selected="calendar" @monthSwitch="changeMonth" />
		</view>
		<view class="meeting-container" v-for="one in meetingList" :key="one.id">
			<view class="meeting">
				<view class="row">
					<text class="title">{{ one.title }}</text>
					<text class="hours">时长：{{ one.hour == 0 ? 1 : one.hour }}小时</text>
				</view>
				<view class="row">
					<image src="../../static/icon-3.png" mode="widthFix" class="icon"></image>
					<text class="desc" space="emsp">日期：{{ one.date }} {{ one.start }}</text>
				</view>
				<view class="row">
					<image src="../../static/icon-4.png" mode="widthFix" class="icon"></image>
					<text class="desc">地点：{{ one.type == '线上会议' ? one.type : one.place }}</text>
				</view>
				<image :src="one.photo" class="photo"></image>
			</view>
		</view>
		<uni-popup ref="popupMsg" type="top">
			<uni-popup-message type="success" :message="'接收到' + lastRows + '条消息'" :duration="2000"/>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue';
	export default {
		components: {
			uniPopup,
			uniPopupMessage,
			uniPopupDialog,
			uniCalendar
		}, 
		data() {
			return {
				unreadRows: 0,
				lastRows: 0,
				timer: null,
				calendar: [
					{ date: '2021-02-15', info: '会议'},
					{ date: '2021-02-16', info: '会议'},
					{ date: '2021-02-17', info: '会议'}
				],
				meetingPage: 1,
				meetingLength: 20,
				meetingList: [
					{id:1,title:"测试会议1",hour:4,date:"2021/02/20",start:"08:50",type:"线上会议",photo:"https://static-1258386385.cos.ap-beijing.myqcloud.com/img/header/070920192833.jpg"},
					{id:2,title:"测试会议2",hour:4,date:"2021/02/20",start:"08:50",type:"线上会议",photo:"https://static-1258386385.cos.ap-beijing.myqcloud.com/img/header/070920192833.jpg"},
					{id:3,title:"测试会议3",hour:4,date:"2021/02/20",start:"08:50",type:"线上会议",photo:"https://static-1258386385.cos.ap-beijing.myqcloud.com/img/header/070920192833.jpg"},
					{id:4,title:"测试会议4",hour:4,date:"2021/02/20",start:"08:50",type:"线上会议",photo:"https://static-1258386385.cos.ap-beijing.myqcloud.com/img/header/070920192833.jpg"},
					{id:5,title:"测试会议5",hour:4,date:"2021/02/20",start:"08:50",type:"线上会议",photo:"https://static-1258386385.cos.ap-beijing.myqcloud.com/img/header/070920192833.jpg"}
				],
				isMeetingLastPage: false
			}
		},
		onLoad() {
			// 监听事件
			let that = this;
			uni.$on('showMessage', function() {
				that.$refs.popupMsg.open();
			});
			that.ajax(that.url.refreshMessage,"GET",null,function(resp){
				that.unreadRows=resp.data.unreadRows
				that.lastRows=resp.data.lastRows
				if (that.lastRows > 0) {
					uni.$emit("showMessage")
				}
			});
		},
		onUnload:function(){
			uni.$off("showMessage")
		},
		onShow:function(){
			let that = this
			that.timer = setInterval(function() {
				that.ajax(that.url.refreshMessage,"GET",null,function(resp){
					that.unreadRows=resp.data.unreadRows
					that.lastRows=resp.data.lastRows
					if (that.lastRows > 0) {
						uni.$emit("showMessage")
					}
				})
			}, 5000)
		},
		onHide:function(){
			let that=this
			clearInterval(that.timer)
		},
		methods: {
			toPage: function(name, url) {
				let flag = false;
				if (name == '在线审批') {
					flag = !this.checkPermission(['WORKFLOW:APPROVAL']);
				}
				if (flag) {
					uni.showToast({
						icon: 'none',
						title: '您不具备相关权限'
					});
				} else {
					uni.navigateTo({
						url: url
					});
				}
			}
		}
	}
</script>

<style lang="less">
	@import url("index.less");
</style>
