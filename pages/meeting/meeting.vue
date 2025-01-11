<template>
	<view>
		
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
	export default {
		components: {
			uniPopup,
			uniPopupMessage,
			uniPopupDialog
		},
		data() {
			return {
				opt: null,
				id: null,
				uuid: null,
				canEdit: true,
				title: '',
				date: '',
				start: '',
				end: '',
				typeArray: ['线上会议', '线下会议'],
				typeIndex: 0,
				place: '',
				desc: '会议内容',
				members: [],
				instanceId: null
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	@import url("meeting.less");
</style>
