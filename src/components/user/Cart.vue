<template>
	<div class="cart_page">
		<table>
			<thead>
				<tr>
					<th style="width: 8%;">
						<!-- <i
							:class="
								checkAll
									? 'iconfont icon-yduifuxuankuangxuanzhong'
									: 'iconfont icon-yduifuxuankuang'
							"
						></i> -->
					</th>
					<th style="width: 30%;">礼品信息</th>
					<th>兑换分数</th>
					<th>数量</th>
					<th>小计 (鸡腿)</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in cartList" :key="item.id">
					<td>
						<!-- <i
							:class="
								checkList[index]
									? 'iconfont icon-yduifuxuankuangxuanzhong'
									: 'iconfont icon-yduifuxuankuang'
							"
						></i> -->
					</td>
					<td>
						<section>
							<img
								width="84"
								:src="imgUrl + item.coverImg"
								alt="列表图片"
							/>
							<div class="info">
								<h5>{{ item.title }}</h5>
								<p>{{ item.versionDescription }}</p>
							</div>
						</section>
					</td>
					<td>{{ item.coin }}鸡腿</td>
					<td>
						<div class="step">
							<span>-</span>
							<input
								type="text"
								disabled
								v-model="stepNum[index]"
							/>
							<span>+</span>
						</div>
					</td>
					<td>{{ item.coin }}鸡腿</td>
					<td>
						<span class="del" @click="deleteShopCart(item.id)"
							>删除</span
						>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="total">
			总计：<span>{{ totalPrice }}鸡腿</span>
		</div>
		<div class="submit">提交</div>
	</div>
</template>
<script>
import { reqGetCartList, reqDeleteCart } from "@/request/api";

export default {
	data() {
		return {
			//购物车数量
			stepNum  : [],
			// 全选
			checkAll : false,
			// 单选按钮数组
			checkList: [],
			cartList : []
		};
	},
	created() {
		this.getCartList();
	},
	methods: {
		// 获取购物车列表
		async getCartList() {
			const { data: cartList } = await reqGetCartList();
			this.cartList = cartList;
			console.log(this.cartList);
			//将cartList中的total数量存入stepNum
			this.cartList.forEach((item) => {
				this.stepNum.push(item.total);
			});
			console.log(this.stepNum);
		},
		// 删除购物车
		deleteShopCart(id) {
			this.$confirm("确定删除该商品吗？", "提示", {
				confirmButtonText: "确定",
				cancelButtonText : "取消",
				type             : "warning"
			})
				.then(async() => {
					const data = await reqDeleteCart(id);
					console.log(data);
					if (data.code === 0) {
						this.$message({
							type   : "success",
							message: "删除成功!"
						});
						this.cartList = this.cartList.filter(
							(item) => item.id !== id
						);
					}
				})
				.catch(() => {
					this.$message({
						type   : "info",
						message: "已取消删除"
					});
				});
			this.getCartList();
		}
	},
	computed: {
		// 计算总价
		totalPrice() {
			let total = 0;
			this.cartList.forEach((item) => {
				total += item.coin * item.total;
			});
			return total;
		}
	}
};
</script>
<style lang="scss" scoped>
.cart_page {
	background: #fff;
	table {
		width: 100%;
		border: 1px solid #e6e6e6;
		box-sizing: border-box;
		color: #666;
		border-collapse: collapse;
		font-size: 14px;
		thead {
			background: #f2f2f2;
			th {
				padding: 19px 0;
				.iconfont {
					cursor: pointer;
				}
				.icon-yduifuxuankuangxuanzhong {
					color: #0a328e;
				}
			}
		}
		tbody {
			tr {
				td {
					vertical-align: middle;
					text-align: center;
					padding: 19px 0;
					table-layout: fixed; // td的宽度固定，不随内容变化
					.iconfont {
						cursor: pointer;
					}
					.icon-yduifuxuankuangxuanzhong {
						color: #0a328e;
					}
					section {
						padding-left: 20px;
						display: flex;
						box-sizing: border-box;
						img {
							margin-right: 12px;
						}
						.info {
							padding-top: 20px;
							flex: 1;
							overflow: hidden;
							box-sizing: border-box;
							text-align: left;
							h5 {
								overflow: hidden;
								color: #333;
								font-size: 18px;
								white-space: nowrap;
								text-overflow: ellipsis;
								margin-bottom: 20px;
							}
							p {
								color: #666;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
						}
					}
					.step {
						width: 106px;
						height: 32px;
						margin: auto;
						span {
							float: left;
							width: 30px;
							height: 32px;
							display: block;
							border: solid 1px #d1d1d1;
							font-size: 20px;
							box-sizing: border-box;
							font-weight: normal;
							font-stretch: normal;
							line-height: 30px;
							letter-spacing: 0px;
							color: #999999;
							text-align: center;
							cursor: pointer;
							background: #fff;
						}
						input {
							box-sizing: border-box;
							width: 46px;
							height: 32px;
							float: left;
							text-align: center;
							font-size: 14px;
							line-height: 23px;
							letter-spacing: 0px;
							color: #666666;
							border: 0;
							border-top: 1px solid #d1d1d1;
							border-bottom: 1px solid #d1d1d1;
							background: #fff;
						}
					}
					.del {
						border: 1px solid #ececec;
						border-radius: 4px;
						padding: 5px 10px;
						cursor: pointer;
						&:hover {
							color: #fff;
							background: #0a328e;
						}
					}
				}
			}
		}
	}
	.total {
		padding: 30px 0;
		text-align: right;
		font-size: 22px;
		span {
			font-weight: bold;
			color: #fd604d;
		}
	}
	.submit {
		width: 175px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-family: SourceHanSansSC-Light;
		font-size: 18px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #ffffff;
		cursor: pointer;
		background-color: #0a328e;
		float: right;
	}
}
</style>
