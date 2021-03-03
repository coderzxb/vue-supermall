<template>
	<div class="back-top">
		<img src="~assets/img/common/top.png" alt="">
	</div>
</template>

<script>
export default {

  name: 'BackTop',
  data () {
    return {

    }
  }
};
</script>

<style scoped>
	.back-top{
		position: fixed;
		right: 8px;
		bottom: 50px;

	}
	.back-top img{
		width: 42px;
		height: 42px;
		/*border-radius: 50%;*/
		/*border: 1px solid var(--color-tint);*/
	}
</style>