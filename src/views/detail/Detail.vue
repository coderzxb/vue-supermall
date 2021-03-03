<template>
	<div id="detail">
		<detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-image-info :images-info="detailInfo" @imgLoad="imgLoad"/>
      <detail-params-info ref="param" :param-info="itemParams"/>
      <detail-comment-info ref="comment" :rate-info="commentInfo" @commentLoad="commentLoad"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
	</div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailImageInfo from './childComps/DetailImageInfo.vue'
import DetailParamsInfo from './childComps/DetailParamsInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'


import Scroll from 'components/common/scroll/Scroll.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

import {getDetail,Goods,Shop,getRecommend} from 'network/detail'
import {debounce} from 'common/tools.js'

export default {

  name: 'Detail',

  data () {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      itemParams:{},
      commentInfo:{},
      recommends:[],
      topTitleY:[],
      getTitleY:null,
      currentIndex:0,
      isShowBackTop:false

    }
  },
  created(){
    // 1.保存传入的 iid
    this.iid=this.$route.params.iid;

    // 2.根据 iid 请求详情数据
    getDetail(this.iid).then(res=>{
      // 1.详情页顶部轮播图数据
      //console.log(res);
      const data=res.result;
      this.topImages=data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 4.获取下面的图片展示数据
      this.detailInfo = data.detailInfo;

      // 5.取出商品的参数信息
      this.itemParams = data.itemParams;

      // 6.获取买家评论信息
      this.commentInfo = data.rate;

    }),

    // 3.请求详情推荐数据
    getRecommend().then(res=>{
      // console.log(res);
      this.recommends = res.data.list;
    }),
    // 详情页点击标题实现跳转
    this.getTitleY=debounce(()=>{
      this.topTitleY=[];
      this.topTitleY.push(0);
      this.topTitleY.push(this.$refs.param.$el.offsetTop);
      this.topTitleY.push(this.$refs.comment.$el.offsetTop);
      this.topTitleY.push(this.$refs.recommend.$el.offsetTop);
    },120)

  },
  components:{
  	DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  mounted(){
      const refresh=debounce(this.$refs.scroll.refresh,100);

      this.$bus.$on('detailItemImageLoad',()=>{ 
          refresh();           
      })

  },
  methods:{
    imgLoad(){
       this.$refs.scroll.refresh();
       this.getTitleY(); 
    },
    titleClick(index){
      // 点击导航标题进行better-scroll跳转
      this.$refs.scroll.scrollTo(0,-this.topTitleY[index],400)
      
    },
    contentScroll(position){
      // 1.获取 Y 值
      const positionY = -position.y;

      // 2.positionY和主题中值进行对比
      let length=this.topTitleY.length;
      for (let i=0;i<length;i++) {
        if (this.currentIndex!==i&&((i<length-1&&positionY>=this.topTitleY[i]
          &&positionY<this.topTitleY[i+1]) || (i===length-1&&positionY>=this.topTitleY[i]))) {
          this.currentIndex=i;
          this.$refs.nav.currentIndex=this.currentIndex;
        }
      }
        // 详情页回到顶部按钮（位置）
        this.isShowBackTop = -(position.y)>3500;
    },
    commentLoad(){
       this.$nextTick(function () {
          this.$refs.scroll.refresh();
       })
      
    },
    backClick(){
       this.$refs.scroll.scrollTo(0,0,500);
    },
    addCart(){
      // 1.购物车需要展示的信息
      const product={};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.iid = this.iid;
      product.price = this.goods.realPrice;

      // 2.将商品加入购物车中
      //this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product).then(res=>{
        this.$toast('欢迎选购！'+res);
      });

    }
    
  }
};
</script>

<style lang="css" scoped>
#detail{
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
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