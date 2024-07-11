<script>
import ShapeForSvg from "@/components/ShapeForSvg.vue";
export default {
  name: "BasicInfo",
  components:{ShapeForSvg}
}
</script>

<template>
  <ShapeForSvg
      class="box"
      :width="516"
      :height="381"
  >
    <template #header>基本信息</template>
    <div class="wrapper">我是内容</div>
  </ShapeForSvg>
</template>

<style scoped>
.box{
  margin-top:110px;
  margin-bottom:25px;
  margin-left:24px;
  .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>