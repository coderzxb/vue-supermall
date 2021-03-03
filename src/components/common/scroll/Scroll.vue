<template>
	<div ref="wrapper" class="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {

  name: 'Scroll',
  data () {
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpload:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{       
      click:true,
      probeType:this.probeType,  //0,1默认,3实施监听！
      pullUpload:this.pullUpload
    })
    // this.scroll.scrollTo(0,0)
    
    // 2.监听滚动的位置
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position);
    })

    // 3.监听上拉加载更多事件
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp');
    })
  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll&&this.scroll.scrollTo(x,y,time);
    },
    refresh(){
      
      this.scroll&&this.scroll.refresh();
    }
  }
 
};

</script>
<style scoped>
  .wrapper{
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }
</style>