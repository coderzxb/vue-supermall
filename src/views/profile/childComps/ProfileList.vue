<template>
	<div class="profile-list">
		<div class="profile-list-item" @click="messageClick">
			<p>	
				<img src="~assets/img/profile/message.svg">
				<span>我的消息</span>
			</p>
		</div>
		<div class="profile-list-item" @click="pointerClick">
			<p>
				<img src="~assets/img/profile/pointer.svg">
				<span>积分商城</span>
			</p>
		</div>
		<div class="profile-list-item">
			<p>
				<img src="~assets/img/profile/vip.svg">
				<span>会员卡</span>
			</p>
		</div>
		<div class="profile-list-item" @click="cartClick">
			<p>
				<img src="~assets/img/profile/cart.svg">
				<span>我的购物车</span>
			</p>
		</div>
		<div class="profile-list-item">
			<p>
				<img src="~assets/img/profile/shopping.svg">
				<span>下载购物APP</span>
			</p>
		</div>
	</div>
</template>

<script>
export default {

  name: 'ProfileList',

  data () {
    return {

    }
  },
  methods:{
  	cartClick(){
  		this.$router.push('/shopCart');
  	},
  	messageClick(){
  		this.$toast('暂无消息');
  	},
  	pointerClick(){
  		this.$toast('您的积分：0');
  	}

  }
};
</script>

<style lang="css" scoped>
.profile-list{
	width: 100%;
	height: 100%;
}
.profile-list .profile-list-item{
	display: block;
	height:38px;
	line-height: 38px;
	margin-top: 5px;

}
.profile-list .profile-list-item p{
	margin-left: 20px;
	align-items: center;
	justify-content: center;
}

.profile-list .profile-list-item img{
	width: 23px;
	height:23px;
	position: relative;
	top: 6px;
}
.profile-list .profile-list-item span{
	margin-left: 12px;
}
.profile-list .profile-list-item:nth-of-type(3){
	border-bottom: 7px solid #f5f5f5;
	height:45px;
}
</style>