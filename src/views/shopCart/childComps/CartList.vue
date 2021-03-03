<template>
	<div class="cart-list">
		<scroll class="content" ref="scroll">
			<cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"/>
		</scroll>	
	</div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import CartListItem from './CartListItem'

export default {

  name: 'CartList',
  data () {
    return {
    	
    }
  },
  components:{
  	Scroll,
  	CartListItem
  },
  computed:{
  	cartList(){
  		return this.$store.state.cartList;
  	}
  },
  activated(){
  	this.$refs.scroll.refresh();
  }

};
</script>

<style lang="css" scoped>
.cart-list{
height: 100vh-44px;

}
.content{
    overflow: hidden;
    position: absolute;
    /*height: calc(100%-49px);*/
    top: 44px;
    bottom:89px;
    left: 0;
    right: 0;
}

</style>