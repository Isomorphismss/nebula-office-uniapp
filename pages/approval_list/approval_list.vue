<template>
	<view class="page" v-if="checkPermission(['WORKFLOW:APPROVAL'])">
		<uni-segmented-control :current="current" :values="items" 
		@clickItem="onClickItem" style-type="button" active-color="#3474FF" />
		<!--第一个选项卡-->
		<view v-if="current == 0" class="list">
			<view class="item" v-for="one in list" :key="one.id">
				<view class="left">
					<image :src="one.photo" mode="widthFix" class="photo"></image>
					<view class="name">{{ one.name }}</view>
					<view class="desc">（发起）</view>
				</view>
				<view class="center">
					<view class="title">{{ one.sameDept ? '本部门' : '跨部门' }}{{ one.type }}申请</view>
					<view class="attr">日期：{{ one.date }}</view>
					<view class="attr">时长：{{ one.hours >= 1 ? one.hours : '小于1' }}小时</view>
					<view class="status">状态：待审批</view>
				</view>
				<view class="right"><button class="btn" @tap="toPage(one.processType,one.id,one.taskId)">审批</button></view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		components: {
			uniSegmentedControl
		},
		data() {
			return {
				page: 1,
				length: 20,
				list: [],
				isLastPage: false,
				items: ['待审批', '已审批'],
				current: 0
			}
		},
		onShow: function() {
			this.page = 1;
			this.isLastPage = false;
			this.list=[]
			uni.pageScrollTo({
				scrollTop: '0'
			});
			this.loadData(this);
		},
		onReachBottom: function() {
			if (this.isLastPage) {
				return;
			}
			this.page = this.page + 1;
			this.loadData(this);
		},
		methods: {
			onClickItem: function() {
				
			},
			loadData: function(ref) {
				//查询未审批的任务
				let type;
				if (ref.current == 0) {
					type = '待审批';
				} else {
					type = '已审批';
				}
				let data = {
					type: type,
					page: ref.page,
					length: ref.length,
					code: ref.code,
					token: uni.getStorageSync("token")
				};
				ref.ajax(ref.url.searchUserTaskListByPage, 'POST', data, function(resp) {
					let result = resp.data.result;
					if (result == null || result.length == 0) {
						ref.isLastPage = true;
						ref.page = ref.page - 1;
						if (ref.page > 1) {
							uni.showToast({
								icon: 'none',
								title: '已经到底了'
							});
						}
					}
					let list = [];
					for (let i in result) {
						let one = result[i];
						if (one.type == 1) {
							one.type = '线上会议';
						} else {
							one.type = '线下会议';
						}
						if (ref.current == 1 && one.processStatus == '已结束') {
							list.push(Number(one.lastUser));
						}
					}
					if (ref.current == 1 && list.length > 0) {
						//TODO 查询发起人与审批人的信息
					} else {
						ref.list = result;
					}
				})
			},
			toPage: function(processType, id, taskId) {
				let url = '../approval/approval?processType=' + processType + '&id=' + id;
				if (taskId != null && taskId != "") {
					url += '&taskId=' + taskId;
				}
				uni.navigateTo({
					url: url
				});
			}
		}
	}
</script>

<style lang="less">
	@import url("approval_list.less");
</style>
