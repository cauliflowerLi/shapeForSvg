<script>
import ShapeForSve from "@/components/ShapeForSvg.vue";

export default {
  name: "DataCenter",
  components: {ShapeForSve}
}
</script>

<template>
  <ShapeForSve
      class="box"
      :width="516"
      :height="247"
  >
    <template #header>数据中心</template>
    <div class="wrapper">我是内容</div>
  </ShapeForSve>
</template>

<style scoped>
.box{
  margin-left:24px;
  .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>