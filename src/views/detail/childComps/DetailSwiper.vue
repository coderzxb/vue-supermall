<template>
		<swiper class="slide-show">
			<swiper-item v-for="(item,index) in topImages" :key="index">
				<img :src="item" alt="">
			</swiper-item>
		</swiper>		
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {

  name: 'DetailSwiper',

  data () {
    return {

    }
  },
  props:{
  	topImages:{
  		type:Array,
  		default(){
  			return []
  		}
  	}
  },
  components:{
  	Swiper,
  	SwiperItem
  }
};
</script>

<style lang="css" scoped>
	.slide-show{
		height: 320px;
		overflow: hidden;
	}
</style>