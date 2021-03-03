<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll" 
    :probeType="3" @scroll="contentScroll" :pullUpload="true" @pullingUp="loadMore">
  		<home-swiper :banners="banners"/>
  		<recommend-view :recommends="recommends" />
  		<feature-view/>
  		<tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" />
  		<goods-list :goods="goods[currentType].list"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
	</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import TabControl from 'components/content/tabControl/TabControl';
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper';
  import RecommendView from './childComps/RecommendView';
  import FeatureView from './childComps/FeatureView'

  import {getHomeMultiData,getHomeGoods} from 'network/home';
export default {

  name: 'Home',
  components:{
    NavBar,
	 HomeSwiper,
	 RecommendView,
	 FeatureView,
	 TabControl,
	 GoodsList,
   Scroll,
   BackTop
  },
  data () {
    return {
    	banners:[],
    	recommends:[],
    	goods:{
    		'pop':{page:0,list:[]},
    		'new':{page:0,list:[]},
    		'sell':{page:0,list:[]},
    	},
      currentType:'pop',
      isShowBackTop:false,
      saveY:0
    }
  },
  created(){
  	// 1.请求多个数据
  	this.getHomeMultiData()
  	// 2.请求home商品数据
  	this.getHomeGoods('pop')
  	this.getHomeGoods('new')
  	this.getHomeGoods('sell')

  },
  mounted(){
     // 3.监听goodsListItem中图片加载完成
     const refresh=this.debounce(this.$refs.scroll.refresh,50);

    this.$bus.$on('homeItemImageLoad',()=>{
      refresh();
      
    })
    
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.refresh();
  },
  deactivated(){
    this.saveY=this.$refs.scroll.scroll.y;

  },
  methods:{
     /*
       事件监听相关的方法
     */
    // 防抖函数
    debounce(func,delay){
      let timer = null;
      return function(...args){
        if (timer) clearTimeout(timer)
        timer = setTimeout(()=>{
          func.apply(this,args)
        },delay)  
      }
      


    },
    tabClick(index){
      switch(index){
        case 0:this.currentType='pop';break;
        case 1:this.currentType='new';break;
        case 2:this.currentType='sell';break;
      }
    },
    backClick(){
      // better-scroll 滚动条(坐标,时间)
      this.$refs.scroll.scrollTo(0,0,500);
    },
    // 监听滚动条位置
    contentScroll(position){
      this.isShowBackTop = -(position.y)>1000;
    },
    // 滚动条下拉加载更多
    loadMore(){
      this.getHomeGoods(this.currentType);
    },
     /*
       网络监听相关的方法
     */
  	getHomeMultiData(){
  		getHomeMultiData().then(res=>{
  		
  		this.banners=res.data.banner.list;
  		this.recommends=res.data.recommend.list;
  		})
  	},
  	getHomeGoods(type){
  		const page=this.goods[type].page+1;
  		getHomeGoods(type,page).then(res=>{
  			this.goods[type].list.push(...res.data.list);
  			this.goods[type].page += 1;
        this.$refs.scroll.scroll.finishPullUp();

  		})
  	}

  }
};
</script>

<style scoped>
	#home{
		padding-top: 44px;
    position: relative;
    /*height:810vh;*/
    height: 100vh;
	}
	.home-nav{
		background-color: var(--color-tint);
		color: #fff;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
	}
	.tab-control{
		position: sticky;
		top: 44px;
		z-index: 9;
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