<template>
	<nav class="top-bar">
		<div class="warp">
			<div class="left">欢迎来到叩丁狼积分商城</div>
			<div class="right">
				<ul>
					<li>
						<img :src="userInfo.headImg" alt="" />
						<span>用户名：{{ userInfo.nickName }}</span>
					</li>
					<li>我的鸡腿：{{ userInfo.coin }}</li>
					<li>获取鸡腿</li>
					<li>叩丁狼官网</li>
					<li class="btn" @click="login" v-show="!isLogined">登录</li>
					<li class="cart-btn" v-show="isLogined"  @click="$router.push('/user/cart')">
						<img
							class="cart-img"
							src="../assets/img/cart.png"
							alt=""
						/>
						<span>购物车</span>
						<b>{{ cartTotal }}</b>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
import { reqQrcodeLogin } from "@/request/api";
export default {
	name: "TopBar",
	data() {
		return {};
	},
	// watch: {
	// 	"$route.path": {
	// 		deep: true,
	// 		handler(newVal, oldVal) {
	// 			let sessionToken = sessionStorage.getItem("token");
	// 			this.setLoginStatus(Boolean(sessionToken));
	// 		}
	// 	}
	// },
	methods: {
		...mapMutations({
			setIsShowLoginModal: "isShowLoginModal/setIsShowLoginModal",
			setLoginStatus     : "loginStatus/setLoginStatus",
			initUserInfo       : "userInfo/initUserInfo"
		}),
		...mapActions({ asyncGetUserInfo: "userInfo/asyncGetUserInfo" }),
		login() {
			// 触发登录弹窗
			this.setIsShowLoginModal(true);
		}
	},
	computed: {
		...mapState({
			isLogined: (state) => state.loginStatus.isLogined,
			cartTotal: (state) => state.userInfo.cartTotal,
			userInfo : (state) => state.userInfo.userInfo
		})
	},
	created() {
		this.$nextTick().then(async() => {
			//扫码登录
			let loginCode = this.$route.query.code;
			if (loginCode) {
				const res = await reqQrcodeLogin({ code: loginCode });
				console.log(res);
				if (res.code === 0) {
					this.$message.success("登录成功");
					sessionStorage.setItem("token", res["x-auth-token"]);
					this.setLoginStatus(true);
					//清除地址栏code
					await this.$router.push("/home");
					//获取用户信息
					await this.asyncGetUserInfo();
				}
				else if (res.code === 400) {
					this.$message.error(res.msg);
					this.setIsShowLoginModal(true);
				}
				else if (res.code === 407) {
					this.$message.warning("请使用手机号绑定登录微信");
					sessionStorage.setItem("loginUuid", res.uuid);
					this.setIsShowLoginModal(true);
				}
			}
			else {
				//正常登陆
				let sessionToken = sessionStorage.getItem("token");
				this.setLoginStatus(Boolean(sessionToken));
				if (sessionToken) {
					//有登录获取用户信息
					await this.asyncGetUserInfo();
				}
				else {
					//没有登录,初始化用户信息
					await this.initUserInfo();
				}
			}
		});
	}
};
</script>

<style scoped lang="scss">
.top-bar {
	width: 100%;
	height: 40px;
	background-color: #242b39;
	color: #fffefe;
	.warp {
		display: flex;
		justify-content: space-between;
		.left {
			line-height: 40px;
		}
		.right {
			ul {
				display: flex;
				width: 660px;
				justify-content: space-evenly;
				li {
					line-height: 40px;
					margin-left: 20px;
					cursor: pointer;
					display: flex;
					align-items: center;
					img {
						height: 35px;
						margin-right: 5px;
						border-radius: 50%;
					}
				}
				.btn {
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #f5a623;
					padding: 0 10px;
					width: 70px;
					text-align: center;
					font-size: 14px;
				}
				.cart-btn {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 120px;
					height: 40px;
					background: #0a328e;
					cursor: pointer;
					margin-right: 0;
					b {
						width: 20px;
						background: #fd604d;
						border-radius: 11px;
						text-align: center;
						line-height: 20px;
					}
					.cart-img {
						width: 20px;
						height: 20px;
						margin-right: 0px;
						border-radius: 0;
					}
					span {
						margin-left: 8px;
						margin-right: 6px;
					}
				}
			}
		}
	}
}
</style>
