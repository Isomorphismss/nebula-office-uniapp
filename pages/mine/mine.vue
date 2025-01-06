<template>
	<view>
		我的
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue';
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				name: '',
				deptName: '',
				photo: ''
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	@import url("mine.less");
</style>
