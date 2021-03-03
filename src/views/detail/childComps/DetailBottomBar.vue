<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="serviceText">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
       <div @click="collectClick">
        <i class="icon select" :class="isCollect?'active':''"></i>
        <span class="text" :class="isCollect?'activeText':''">{{colText}}</span>   
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>


export default {
  name: "DetailBottomBar",
  data() {
    return {
      isCollect:false,
      colText:'收藏'
    }
  },
  computed: {
    

  },
  methods: {
    collectClick(){
       if (!this.isCollect) {
        this.$toast("收藏成功");
        this.isCollect = true;
        this.colText = '已收藏';
      } else {
        this.$toast("已取消收藏");
        this.isCollect = false;
        this.colText = '收藏';
      }
    },
    addCart(){
      this.$emit('addCart');
    }
    
  }
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  z-index: 10;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  text-align: center;
}
.bar-item{
  flex: 1;
  display: flex;
}
.bar-item>div{
  flex: 1;
}
.bar-left .text{
  font-size: 13px;

}
.bar-left .serviceText{
  font-size: 13px;
  color:var(--color-tint);
}
.bar-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service{
  background-position: 0 -54px;
}
.bar-left .active{
   background-position: 0 -26px;
   /*已收藏：图标变化*/
}
.bar-left .activeText{
  color: rgb(255,184,0);
}

.bar-left .shop{
  background-position: 0 -98px;
}
.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 52px;
}
.bar-right .cart{
  background-color: #ffe817;
  color: #333;
  cursor: pointer;
}
.bar-right .buy{
  background-color: #f69;
  cursor: pointer;
}
</style>
