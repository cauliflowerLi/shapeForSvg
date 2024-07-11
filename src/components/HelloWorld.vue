<template>
  <div class="screen-wrapper">
    <div class="header-wrapper">
      <div class="light-point"></div>
    </div>
    <div class="column-wrapper">
      <div class="column column">
        <BasicInfo/>
        <SupervisionEffect/>
        <DataCenter/>
      </div>
      <div class="column column">
        <AlertStatic/>
        <RedAlert/>
      </div>
      <div class="column column"></div>
    </div>
  </div>
</template>

<script>
import BasicInfo from "@/components/BasicInfo.vue";
import SupervisionEffect from "@/components/SupervisionEffect.vue";
import DataCenter from "@/components/DataCenter.vue";
import RedAlert from "@/components/RedAlert.vue";
import AlertStatic from "@/components/AlertStatic.vue";
export default {
  name: 'HelloWorld',
  components:{BasicInfo,SupervisionEffect,DataCenter,RedAlert,AlertStatic},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screen-wrapper{
  height: 100%;
  background: #000000;
  position: relative;
}
.screen-wrapper .header-wrapper{
  position: absolute;
  top:0;
  width:100%;
  height:94px;
  background: url("@/assets/screen/img_top.png") no-repeat center center;
  background-size:100% auto;
}
.screen-wrapper .light-point{
  position: absolute;
  bottom:0;
  width:100%;
  background: url("@/assets/screen/img_light.png") no-repeat center 7px;
  background-size:auto 100%;
  height:52px;
  pointer-events: none;
}
.screen-wrapper .column-wrapper{
  display: flex;
}
</style>
