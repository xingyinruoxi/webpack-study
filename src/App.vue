<template>
  <div class="app">
    我是周林！！！！{{msg}}
    <img :src="pic" @click="picClickHandle" />
    <p>9999</p>
    <span class="rocket"></span>
    <p>
      <i class="fa fa-camera-retro fa-5x"></i> fa-lg
    </p>
  </div>
</template>

<script>
import pic from "./333.png";
import _ from "lodash";
export default {
  data() {
    return {
      msg: "msg",
      pic,
      objA: {
        name: "zhoulin",
      },
      objB: {
        age: "zhoulin",
      },
    };
  },
  created() {
    const { objA, objB } = this;

    console.log(_.assign(objA, objB));
  },
  methods: {
    async picClickHandle() {
      const data = await new Promise((resolve, reject) => {
        resolve({
          data: {
            code: 1000,
            msg: "haha",
          },
        });
      });
      console.log("data", data);
    },
  },
};
</script>

<style lang="less" scoped>
.app {
  background: #ddd;
  color: blue;
}
</style>
