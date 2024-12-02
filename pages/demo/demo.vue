<template>
	<view>
		<view>{{username}}</view>
		<view v-for="one in tel">{{one}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:"Scott",
				tel:['13312345678','18612345678']
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
