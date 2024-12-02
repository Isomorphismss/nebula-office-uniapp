<template>
	<view>
		<view>{{username}}</view>
		<view v-for="one in tel">{{one}}</view>
		<view v-if="age>=18">
			<button @tap="signUp()">我要报名</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:"Scott",
				tel:['13312345678','18612345678'],
				age:20
			}
		},
		methods: {
			signUp:function(){
				uni.showToast({
					title:"点击了报名按钮"
				})
			}
		}
	}
</script>

<style>

</style>
