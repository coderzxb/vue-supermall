<template>
	<div class="login">
		<div class="user-pic">
      		<van-image :src="defaultPic" class="user-pic-img" fit="cover" round/>
    	</div>
    	<div class="user-info">
    		<span>登录/注册</span><br>
			<img src="~assets/img/profile/phone.svg">
			<span class="text">暂无绑定手机号</span>
    	</div>
    	<div class="login-right">
      		<img alt="右箭" src="~assets/img/profile/login-right.png"/>
    	</div>
	</div>
</template>

<script>
export default {

  name: 'Login',

  data () {
    return {
    	defaultPic:require('assets/img/profile/avatar.svg')
    }
  }
};
</script>

<style lang="css" scoped>
.login {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 130px;
  padding: 0 20px;
  background-color: #ff8198;
}

.user-pic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
}
.user-info{
	color: #fff;
	font-size: 17px;
	margin-left: 25px;
}
.user-info img{
	width: 20px;
	height: 20px;
	margin-top: 15px;
}
.user-info .text{
	font-size: 16px;

}
.login-right img{	
	width: 32px;
	height: 32px;
	margin-left: 45px;
}
</style>