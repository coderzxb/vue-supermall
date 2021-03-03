<template>
	<div class="cart-list-item">
      <div class="product-selector">
        <van-checkbox v-model="product.checked" @change="handleCheckedItem"
        checked-color="rgb(255,129,152)"></van-checkbox>
      </div>
        <div class="product-img">
          <img :src="product.image" alt="商品图片"/>
        </div>
        <div class="product-info">
            <div class="product-title">{{ product.title }}</div>
            <div class="product-desc">商品描述: {{ product.desc }}</div>
          <div class="product-bottom">
            <div class="product-price left">¥{{ product.price }}</div>
            <div class="product-count right">x{{ product.count }}</div>
          </div>
        </div>
    </div>
</template>

<script>
export default {

  name: 'CartListItem',

  data () {
    return {
     
    }
  },
  props:{
  	product:{
  		type:Object,
  		default(){
  			return {}
  		}
  	}
  },
  methods:{
    handleCheckedItem() {
      let result = this.$store.state.cartList.filter(item => item.checked);
      this.checkedAll = result.length > 0 && 
      result.length === this.$store.state.cartList.length;
    }
  }
};
</script>

<style lang="css" scoped>
.cart-list-item{
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #cccccc;

}
.product-img img{
  width: 96px;
  height: 112px;
  margin-left: 4px;
  border-radius: 5px;
}
.product-selector{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12%;
}
.product-info{
  font-size: 17px;
  position: relative;
  overflow: hidden;
  width: 89%;
  padding: 5px 10px;
  color: #333333;
}
.product-title{
  font-size: 16px;
  margin:8px 10px 12px 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.product-desc{
  font-size: 15px;
  margin:8px 10px 12px 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.product-bottom{
  margin-top: 10px;
  position: absolute;
  bottom:16px;
  left: 9%;
  right: 23px;
}
.product-price{
  font-size: 18px;
  color: #ff5777;
}
.product-count{
  font-weight: 600;
}

</style>