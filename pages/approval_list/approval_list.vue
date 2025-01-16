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
				<view class="right"><button class="btn">审批</button></view>
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
		methods: {
			
		}
	}
</script>

<style lang="less">
	@import url("approval_list.less");
</style>
