<template>
	<view class="page">
		<checkbox-group @change="selected">
			<block v-for="dept in list" :key="dept.id">
				<view class="list-title">{{ dept.deptName }}（{{ dept.count }}人）</view>
				<view class="item" v-for="member in dept.members" :key="member.userId">
					<view class="key">{{ member.name }}</view>
					<checkbox class="value" :value="member.userId" :checked="member.checked"></checkbox>
				</view>
			</block>
		</checkbox-group>
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
		onShow: function() {
			this.loadData(this);
		},
		methods: {
			loadData: function(ref) {
				ref.ajax(ref.url.searchUserGroupByDept, 'POST', { keyword: ref.keyword }, function(resp) {
					let result = resp.data.result;
					ref.list = result;
					for (let dept of ref.list) {
						for (let member of dept.members) {
							if (ref.members.indexOf(member.userId + '') != -1) {
								member.checked = true;
							} else {
								member.checked = false;
							}
						}
					}
				});
			},
		}
	}
</script>

<style lang="less">
	@import url("members.less");
</style>
