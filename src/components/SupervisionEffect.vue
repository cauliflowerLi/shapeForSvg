<script>
import ShapeForSve from "@/components/ShapeForSvg.vue";

export default {
  name: "SupervisionEffect",
  components: {ShapeForSve}
}
</script>

<template>
  <ShapeForSve
      class="box"
      :width="516"
      :height="283"
  >
    <template #header>监督成效</template>
    <div class="wrapper">我是内容</div>
  </ShapeForSve>
</template>

<style scoped>
.box{
  margin-bottom:25px;
  margin-left:24px;
}
</style>