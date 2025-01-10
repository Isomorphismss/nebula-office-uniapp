<template>
	<view class="page">
		<image src="../../static/logo-3.jpg" mode="widthFix" class="logo"></image>
		<view class="add">
			<image src="../../static/icon-17.png" mode="widthFix" class="icon"></image>
			<text>创建会议</text>
		</view>
		<view v-for="one in list" :key="one.date">
			<view class="list-title">{{ one.date }}</view>
			<view class="item" v-for="meeting in one.list" :key="meeting.id">
				<view class="header">
					<view class="left">
						<image v-if="meeting.type == '线上会议'" src="../../static/icon-11.png" mode="widthFix" class="icon"></image>
						<image v-if="meeting.type == '线下会议'" src="../../static/icon-12.png" mode="widthFix" class="icon"></image>
						<text>{{ meeting.type }}</text>
						<text :class="meeting.status == '未开始' ? 'blue' : 'red'">（{{ meeting.status }}）</text>
					</view>
					<view class="right">
						<text>编辑</text>
					</view>
				</view>
				<view class="content">
					<view class="title">{{ meeting.title }}</view>
					<view class="attr">
						<view class="timer">
							<image src="../../static/icon-14.png" mode="widthFix" class="icon"></image>
							<text>{{ meeting.start }} ~ {{ meeting.end }}</text>
						</view>
						<view class="creator">
							<image src="../../static/icon-15.png" mode="widthFix" class="icon"></image>
							<text>{{ meeting.name }}</text>
						</view>
						<view class="place" v-if="meeting.type == '线下会议'">
							<image src="../../static/icon-16.png" mode="widthFix" class="icon"></image>
							<text>{{ meeting.place }}</text>
						</view>
					</view>
					<view class="desc">{{ meeting.desc }}</view>
					<button class="btn" v-if="meeting.type == '线上会议'">进入</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page: 1,
				length: 20,
				list: [
					{
						date: '2021年02月08日',
						list: [
							{ id: 1, date: '2021/02/08', start: '08:30', end: '10:30', type: '线上会议', name: '张爽',place:"网络会议室", status:"未开始",title:'年终大会', desc:"年终总结大会" },
							{ id: 2, date: '2021/02/08', start: '08:30', end: '10:30', type: '线上会议', name: '张爽',place:"网络会议室", status:"未开始",title:'年终大会', desc:"年终总结大会" }
						]
					},
					{
						date: '2021年02月09日',
						list: [
							{ id: 3, date: '2021/02/09', start: '08:30', end: '10:30', type: '线上会议', name: '张爽',place:"网络会议室", status:"未开始",title:'年终大会', desc:"年终总结大会" }
						]
					}
				],
				isLastPage: false
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	@import url("meeting_list.less");
</style>
