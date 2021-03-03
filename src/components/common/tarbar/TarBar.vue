<template>
  <div id="tar-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TarBar",
    };
</script>



<style scoped>
  #tar-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;    
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }

</style>
