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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: "无名氏",
				photo: "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
				deptName: "管理部",
				address: "辽宁省大连市",
				status: "正常",
				risk: "中风险",
				checkinTime: "08:25",
				date: "2020年12月1日",
				attendanceTime: "08:30",
				closingTime: "09:30",
				checkinDays: 201,
				weekCheckin: [
					{type:"工作日",day:"周一",status:"缺勤"},
					{type:"工作日",day:"周二",status:"迟到"},
					{type:"工作日",day:"周三",status:"正常"},
					{type:"工作日",day:"周四",status:"正常"},
					{type:"工作日",day:"周五",status:"正常"},
					{type:"休息日",day:"周六",status:""},
					{type:"休息日",day:"周日",status:""}
				]
			};
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	@import url("checkin_result.less");
</style>
