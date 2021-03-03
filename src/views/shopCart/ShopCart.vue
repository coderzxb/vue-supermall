<template>
	<div class="shop-cart" >
		<!-- 导航 -->
		<nav-bar class="nav-bar">
			<div slot="center">购物车({{cartLength}})</div>
		</nav-bar>

		<!-- 商品列表 -->

		  <cart-list ref="list"/>
   
		<!-- 底部汇总 -->
    <div class="bottom-bar">  
      <label> 
        <van-checkbox v-model="checkedAll" @click="handleCheckedAll" 
        checked-color="rgb(255,129,152)" class="checkedAll">
          全选
        </van-checkbox>
      </label> 
        <div class="bottom-count">
          <span>共计: {{totalPrice}}</span>
        </div>
        <div class="handle-count" @click="clacClick">
          <span>去结算 ({{checkLength}})</span>
        </div>
    </div>

	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import CartList from './childComps/CartList.vue'

export default {

  name: 'ShopCart',

  data () {
    return {
      checkedAll:false
    }
  },
  components:{
  	NavBar,
  	CartList
    
  },
  created() {
    //  每次刷新页面获取本地存储购物车数据
    // let list = JSON.parse(localStorage.getItem("cartList")) || [];
    //   if (list) {
    //     this.$store.setCartList(list);
    //   }
  },    
  computed:{
  	cartLength(){
  		return this.$store.state.cartList.length;
    },
    totalPrice(){
      return this.$store.state.cartList
        .filter(item => item.checked)
        .reduce((prev, item) => prev + item.price * item.count, 0)
        .toFixed(2);
    
    },
    isSelectAll(){
       // 显示全选状态
      return !(this.$store.state.cartList
      .filter(item => !item.checked).length);
    },
    checkLength(){
        // 去结算长度
        return this.$store.state.cartList.filter(item => item.checked).length;
    }
    
  },
  methods: {
    handleCheckedAll(){
      this.$refs.list.cartList.forEach(item => (item.checked = this.checkedAll));
      
    },
    clacClick(){
      if (this.checkLength==0||this.cartLength==0) {
        this.$toast('请选择购买的商品')
      }else{
        this.$toast('结算成功')
      }
    }
  }
};
</script>

<style  scoped>
.shop-cart{
  width: 100%;
  height: 100%;
}
.nav-bar{
	background-color: var(--color-tint);
	color: #fff;
}
.bottom-bar{
    width: 100%;
    display: flex;
    height:40px;
    position: absolute;
    left: 0;
    bottom:49px;
    background-color: #f5f5f5;
}
.checkedAll{
  
  font-size: 15px;
  width: 60px;
  height: 36px;
  line-height: 40px;
  border-radius: 10px;
}

.bottom-count{
  display: flex;
  line-height: 40px;
  margin-left: 5px;
}
.handle-count{
  display: flex;
  background-color: rgb(255,164,6);
  position: absolute;
  right: 0;
  
}
.handle-count span{
  width: 90px;
  text-align: center;
  line-height: 40px;
  color:#fff;
}
</style>