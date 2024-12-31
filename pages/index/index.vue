<template>
	<view class="page">
		<swiper circular="true" duration="1000" interval="8000" class="swiper">
			<swiper-item>
				<image mode="widthFix" src="https://static-1334177744.cos.na-ashburn.myqcloud.com/img%2Fbanner%2Fswiper-1.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image mode="widthFix" src="https://static-1334177744.cos.na-ashburn.myqcloud.com/img%2Fbanner%2Fswiper-2.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image mode="widthFix" src="https://static-1334177744.cos.na-ashburn.myqcloud.com/img%2Fbanner%2Fswiper-3.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image mode="widthFix" src="https://static-1334177744.cos.na-ashburn.myqcloud.com/img%2Fbanner%2Fswiper-4.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image mode="widthFix" src="https://static-1334177744.cos.na-ashburn.myqcloud.com/img%2Fbanner%2Fswiper-5.jpg"></image>
			</swiper-item>
		</swiper>
		<view class="notify-container">
			<view class="notify-title">
				<image src="../../static/icon-1.png" mode="widthFix" class="notify-icon"></image>
				消息提醒
			</view>
			<view class="notify-content">你有{{ unreadRows }}条未读消息</view>
			<image src="../../static/icon-2.png" mode="widthFix" class="more-icon"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	@import url("index.less");
</style>
