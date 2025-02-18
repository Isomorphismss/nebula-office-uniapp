<template>
	<view>
		<camera device-position="front" flash="off" class="camera" @error="error" v-if="showCamera"></camera>
		<image mode="widthFix" class="image" :src="photoPath" v-if="showImage"></image>
		<view class="operate-container">
			<button type="primary" class="btn" @tap="clickBtn" :disabled="!canCheckin">{{ btnText }}</button>
			<button type="warn" class="btn" @tap="afresh" :disabled="!canCheckin">重拍</button>
		</view>
		<view class="notice-container">
			<text class="notice">注意事项</text>
			<text class="desc">拍照签到的时候，必须要拍摄自己的正面照片，侧面照片会导致无法识别。另外，拍照的时候不要戴墨镜或者帽子，避免影响拍照签到的准确度。</text>
		</view>
	</view>
</template>

<script>
	var QQMapWX = require('../../lib/qqmap-wx-jssdk.min.js');
	var qqmapsdk;
	export default {
		data() {
			return {
				canCheckin: true,
				photoPath: '',
				btnText: '拍照',
				showCamera: true,
				showImage: false
			}
		},
		onLoad: function() {
			const app = getApp();
			qqmapsdk = new QQMapWX({
				key: app.globalData.QQMAP_KEY // 这样密钥不会暴露在代码里
			});
		},
		// onShow: function() {
		// 	let that = this;
		// 	that.ajax(that.url.validCanCheckIn, 'GET', null, function(resp) {
		// 		console.log("现在不可以进行考勤！");
		// 		let msg = resp.data.msg;
		// 		if (msg != '可以考勤') {
		// 			setTimeout(function() {
		// 				uni.showToast({
		// 					title: msg,
		// 					icon: 'none'
		// 				});
		// 			}, 1000);
		// 			that.canCheckin = false;
		// 		}
		// 	});
		// },
		methods: {
			clickBtn: function() {
				let that = this;
				if (that.btnText == '拍照') {
					let ctx = wx.createCameraContext();
					ctx.takePhoto({
						quality: 'high',
						success: function(resp) {
							console.log("拍摄的照片地址为：", resp.tempImagePath);
							that.photoPath = resp.tempImagePath;
							that.showCamera = false;
							that.showImage = true;
							that.btnText = '签到';
						}
					});
				} 
				else {
					uni.showLoading({
						title: '签到中请稍后'
					});
					
					setTimeout(function() {
						uni.hideLoading();
					}, 30000);
					
					uni.getLocation({
					    type: 'wgs84',
					    success: function(resp) {
					        let latitude = resp.latitude;
					        let longitude = resp.longitude;
					        console.log("小程序返回的经度为：", latitude);
					        console.log("小程序返回的纬度为：", longitude);
					
					        // 使用 uni.request 直接调用腾讯地图 API
					        uni.request({
					            url: `https://apis.map.qq.com/ws/geocoder/v1/`,
					            method: 'GET',
					            data: {
					                location: `${latitude},${longitude}`, // 格式：lat,lng
					                key: getApp().globalData.QQMAP_KEY // 替换为你的开发密钥
					            },
					            success: function(resp) {
					                if (resp.statusCode === 200 && resp.data.status === 0) {
					                    console.log(resp.data.result);
					                    let address = resp.data.result.address;
					                    let addressComponent = resp.data.result.address_component;
					                    let nation = addressComponent.nation;
					                    let province = addressComponent.province;
					                    let city = addressComponent.city;
					                    let district = addressComponent.district;
					
										// debug
										console.log('Check-in URL:', that.url.checkin);
										console.log('Token:', uni.getStorageSync('token'));
										console.log('Photo Path:', that.photoPath);
										console.log('Form Data:', {
										    address: address,
										    country: nation,
										    province: province,
										    city: city,
										    district: district
										});
					
					                    // 上传签到信息
					                    uni.uploadFile({
					                        url: that.url.checkin,
					                        filePath: that.photoPath,
					                        name: 'photo',
					                        header: {
					                            token: uni.getStorageSync('token')
					                        },
					                        formData: {
					                            address: address,
					                            country: nation,
					                            province: province,
					                            city: city,
					                            district: district
					                        },
					                        success: function(resp) {
					                            console.log("已进入checkin API的回调函数");
					                            if (resp.statusCode == 500 && resp.data == '不存在人脸模型') {
													console.log("不存在人脸模型");
					                                uni.hideLoading();
					                                uni.showModal({
					                                    title: '提示信息',
					                                    content: 'EMOS系统中不存在你的人脸识别模型，是否用当前这张照片作为人脸识别模型？',
					                                    success: function(res) {
					                                        if (res.confirm) {
					                                            // 上传头像图片
																console.log("开始调用createFaceModel API来创建新的人脸模型");
					                                            uni.uploadFile({
					                                                url: that.url.createFaceModel,
					                                                filePath: that.photoPath,
					                                                name: 'photo',
					                                                header: {
					                                                    token: uni.getStorageSync('token')
					                                                },
					                                                success: function(resp) {
					                                                    if (resp.statusCode == 500) {
																			console.log("人脸模型创建失败，原因为：", resp.data);
					                                                        uni.showToast({
					                                                            title: resp.data,
					                                                            icon: 'none'
					                                                        });
					                                                    } else if (resp.statusCode == 200) {
																			console.log("人脸模型创建成功！");
					                                                        uni.showToast({
					                                                            title: '人脸建模成功',
					                                                            icon: 'none'
					                                                        });
					                                                    }
					                                                }
					                                            });
					                                        }
					                                    }
					                                });
					                            } else if (resp.statusCode == 200) {
					                                let data = JSON.parse(resp.data);
					                                let code = data.code;
					                                let msg = data.msg;
					                                if (code == 200) {
														console.log("找到人脸模型，签到成功！");
					                                    uni.hideLoading();
					                                    // 签到成功
					                                    uni.showToast({
					                                        title: '签到成功',
					                                        complete: function() {
					                                            // 跳转到签到结果统计页面
																uni.navigateTo({
																	url: '../checkin_result/checkin_result'
																});
					                                        }
					                                    });
					                                }
					                            } else if (resp.statusCode == 500) {
													console.log("后端执行异常：", resp.data);
					                                uni.showToast({
					                                    title: resp.data,
					                                    icon: 'none'
					                                });
					                            }
					                        }
					                    });
					                } else {
					                    console.error('经纬度逆运算失败，原因为：', resp.data);
					                }
					            },
					            fail: function(error) {
					                console.error('腾讯地图经纬度逆运算API调用失败，原因为：', error);
					            }
					        });
					    }
					});
				}
			},
			afresh: function() {
				this.showCamera = true;
				this.showImage = false;
				this.btnText = '拍照';
			}
		}
	}
</script>

<style lang="less">
	@import url("checkin.less");
</style>
