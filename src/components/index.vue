<template>
  <div class="wrap">
    <div class="img"></div>

    <div class="goBuy">
      <router-link to="/goodsDetail">立即购买</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  margin-top: 0px;
}
.img {
  width: 100%;
  height: 5.53rem;
  background: url("../assets/logo.png") no-repeat;
  background-size: 100%;
}

div .goBuy {
  width: 100%;
  height: 0.5rem;
  background-color: #eea835 !important;
  position: fixed;
  bottom: 0px;
  font-size: 0.17rem;
  color: #ffffff !important;

  line-height: 0.47rem;
  font-family: PingFang-SC-Bold;
  text-align: center;
}
</style>




