<template>
	<div class="my-pay">
			<div class="save-item">
				<p>
					0.00
					<span>元</span>
				</p>
				<p>我的余额</p>
			</div>
			<div class="save-item">
				<p>
					0
					<span>个</span>					
				</p>
				<p>我的优惠</p>
			</div>
			<div class="save-item">
				<p>
					0
					<span>分</span>
				</p>
				<p>我的积分</p>
			</div>
	</div>
</template>

<script>
export default {

  name: 'MyPay',
  data () {
    return {

    }
  }
};
</script>

<style lang="css" scoped>
.my-pay{
	width: 100%;
	height: 95px;
	border-bottom: 7px solid #f5f5f5;
	display: flex;
}

.save-item{
	display: flex;
 	align-items: center;
	flex: 1;	
	flex-direction: column;
  	justify-content: center;
  	height: 85px;
}

.my-pay .save-item:nth-of-type(1),
.my-pay .save-item:nth-of-type(2) {
  border-right: 1px solid #eeeeee;
}
.save-item p:first-child{
	font-size: 24px;
  	font-weight: 700;
  	margin-bottom: 3px;
  	color: #ff5f3e;
}
.save-item p:last-child {
  font-size: 14px;
  color: #666666;
}
.save-item p:first-child span{
	font-size: 14px;
  	font-weight: normal;
  	margin-left: 3px;
  	color: #666666;
}
</style>