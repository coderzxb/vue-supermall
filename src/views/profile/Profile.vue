<template>
	<div class="profile">
		<nav-bar class="profile-nav">
			<div slot="center">我的档案</div>
		</nav-bar>
		<scroll class="content">
			<login/>
      <my-pay/>
      <profile-list/>
		</scroll>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'

import Login from './childComps/Login.vue'
import MyPay from './childComps/MyPay.vue'
import ProfileList from './childComps/ProfileList.vue'

export default {

  name: 'Profile',
  components:{
  	NavBar,
  	Scroll,
    Login,
    MyPay,
    ProfileList
  },
  data () {
    return {

    }
  }
};
</script>

<style lang="css" scoped>
.profile {
  width: 100%;
  height: 100%;

}
.profile-nav{
 	  font-weight: 600;
  	color: #fff;
  	background-color: #ff8198;
}
.content{
    overflow: hidden;
    position: absolute;
    /*height: calc(100%-49px);*/
    top: 44px;
    bottom:49px;
    left: 0;
    right: 0;
}
</style>