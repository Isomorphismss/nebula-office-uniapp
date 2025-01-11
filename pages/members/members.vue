<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						id:1,
						deptName:"管理部",
						count:2,
						members:[
							{userId:10,name:"张浩",checked:true},
							{userId:11,name:"许丽丽",checked:false}
						],
					},
					{
						id:2,
						deptName:"技术部",
						count:3,
						members:[
							{userId:12,name:"陈婷",checked:false},
							{userId:13,name:"陈军",checked:false},
							{userId:14,name:"刘洋",checked:false}
						],
					},
				],
				members: []
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	@import url("members.less");
</style>
