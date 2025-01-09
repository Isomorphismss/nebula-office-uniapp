<template>
	<view class="page">
		<uni-list>
			<uni-list-chat v-for="one in list" :title="one.senderName" 
			  :avatar="one.senderPhoto" :note="one.msg" badge-positon="left" 
			  :badge-text="one.readFlag ? '' : 'dot'" :key="one.id" link="navigateTo" 
			  :to="'../message/message?id=' + one.id + '&readFlag=' + one.readFlag + '&refId=' + one.refId">
				<view class="chat-custom-right">
					<text class="chat-custom-text">{{ one.sendTime }}</text>
				</view>
			</uni-list-chat>
		</uni-list>
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
				page: 1,
				length: 20,
				list: [
					{
						id:"601027486863f742e88b1b22",
						refId:"6010274d6863f742e88b1b23",
						senderName:"系统消息",
						senderPhoto:"https://static-1258386385.cos.ap-beijing.myqcloud.com/img/System.jpg",
						msg:"HelloWorld",
						readFlag:false,
						sendTime:"2021-01-26 22:29:28"
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
	@import url("message_list.less");
</style>
