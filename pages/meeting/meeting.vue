<template>
	<view class="page">
		<view class="header">
			<input type="text" class="title" v-model="title" placeholder="输入会议标题" placeholder-class="title-placeholder" />
			<image src="../../static/icon-18.png" mode="widthFix" class="edit-icon"></image>
		</view>
		<view class="attr">
			<view class="list">
				<view class="item">
					<view class="key">日期</view>
					<picker v-if="canEdit" mode="date" :value="date">
						<view class="uni-input">{{ date }}</view>
					</picker>
					<text v-if="!canEdit" class="value">{{ date }}</text>
				</view>
				<view class="item">
					<view class="key">开始时间</view>
					<picker v-if="canEdit" mode="time" :value="start">
						<view class="uni-input">{{ start }}</view>
					</picker>
					<text v-if="!canEdit" class="value">{{ start }}</text>
				</view>
				<view class="item">
					<view class="key">结束时间</view>
					<picker v-if="canEdit" mode="time" :value="end">
						<view class="uni-input">{{ end }}</view>
					</picker>
					<text v-if="!canEdit" class="value">{{ end }}</text>
				</view>
				<view class="item">
					<view class="key">会议类型</view>
					<picker v-if="canEdit" :value="typeIndex" :range="typeArray">{{ typeArray[typeIndex] }}</picker>
					<text v-if="!canEdit" class="value">{{ typeArray[typeIndex] }}</text>
				</view>
				<view class="item" v-if="typeArray[typeIndex] == '线下会议'">
					<view class="key">地点</view>
					<view class="value">{{ place }}</view>
				</view>
			</view>
			<view>
				<text class="desc">{{ desc }}</text>
			</view>
		</view>
		<view class="members">
			<view class="number">参会者（{{ members.length }}人）</view>
			<view class="member">
				<view class="user" v-for="one in members" :key="one.id">
					<image :src="one.photo" mode="widthFix" class="photo"></image>
					<text class="name">{{ one.name }}</text>
				</view>
				<view class="add">
					<image src="../../static/icon-19.png" mode="widthFix" class="add-btn"/>
				</view>
			</view>
		</view>
		<button class="btn">保存</button>
		<uni-popup ref="popupPlace" type="dialog">
			<uni-popup-dialog mode="input" title="编辑文字内容" :value="place" placeholder="输入会议地点"/>
		</uni-popup>
		<uni-popup ref="popupDesc" type="dialog">
			<uni-popup-dialog mode="input" title="编辑文字内容" :value="desc" placeholder="输入会议内容"/>
		</uni-popup>
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
				members: [
					{id:1, name:"张强", photo:"https://images.zsxq.com/FmX9p9uake_IB-NdPEwFYgaw0mMn?e=1740758399&token=kIxbL07-8jAj8w1n4s9zv64FuZZNEATmlU_Vm6zD:csBmcu876rvNIMuX0D7nzs5FkQM="},
					{id:2, name:"张强", photo:"https://images.zsxq.com/FmX9p9uake_IB-NdPEwFYgaw0mMn?e=1740758399&token=kIxbL07-8jAj8w1n4s9zv64FuZZNEATmlU_Vm6zD:csBmcu876rvNIMuX0D7nzs5FkQM="},
					{id:3, name:"张强", photo:"https://images.zsxq.com/FmX9p9uake_IB-NdPEwFYgaw0mMn?e=1740758399&token=kIxbL07-8jAj8w1n4s9zv64FuZZNEATmlU_Vm6zD:csBmcu876rvNIMuX0D7nzs5FkQM="},
					{id:4, name:"张强", photo:"https://images.zsxq.com/FmX9p9uake_IB-NdPEwFYgaw0mMn?e=1740758399&token=kIxbL07-8jAj8w1n4s9zv64FuZZNEATmlU_Vm6zD:csBmcu876rvNIMuX0D7nzs5FkQM="},
					{id:5, name:"张强", photo:"https://images.zsxq.com/FmX9p9uake_IB-NdPEwFYgaw0mMn?e=1740758399&token=kIxbL07-8jAj8w1n4s9zv64FuZZNEATmlU_Vm6zD:csBmcu876rvNIMuX0D7nzs5FkQM="},
					{id:6, name:"张强", photo:"https://images.zsxq.com/FmX9p9uake_IB-NdPEwFYgaw0mMn?e=1740758399&token=kIxbL07-8jAj8w1n4s9zv64FuZZNEATmlU_Vm6zD:csBmcu876rvNIMuX0D7nzs5FkQM="},
				],
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
