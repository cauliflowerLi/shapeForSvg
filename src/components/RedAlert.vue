<script>
import ShapeForSve from "@/components/ShapeForSvg.vue";
export default {
  name: "RedAlert",
  components:{ShapeForSve}
}
</script>

<template>
  <ShapeForSve
      class="box"
      :width="822"
      :height="699"
  >
    <template #header>红色预警</template>
    <div class="wrapper">我是内容</div>
  </ShapeForSve>
</template>

<style scoped>
.box{
  margin-left:24px;
}
</style>