<template>
  <div class="app">
   Hellow,world!!!!{{msg}}
   <img :src="pic">
  </div>
</template>
<script>
import pic from './333.png'
export default {
    data(){
        return {
            msg:'msg',
            pic
        }
    }
}
</script>
<style lang="less" scoped>
.app{
    background:#ddd;
}
</style>