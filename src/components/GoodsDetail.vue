<template>
  <div class="wrapper">
    <div class="img"></div>
    <div class="price-msg">
      <div class="price-wrapper">
        <span class="price">￥ 1080</span>
        <span class="origin-price">原价：￥1280</span>
      </div>
      <div class="line">
        <div class="line-content"></div>
      </div>
      <div class="present">
        <span class="present-num-text">当前剩余数量</span>
        <span class="present-num">80</span>
      </div>
    </div>

    <div class="title">
      晓豆包家庭版彩色打印机 文档打印 照片打印 移动联
      网控制打印 家庭专用打印机
    </div>

    <div class="add-text">
      <span></span> 家里没有照片纸？加购同步配送~
    </div>
    <div class="add-detail">
      <div class="add-detail-goods">
        <div class="add-detail-icon">
          <img src="../assets/0031E039-E602-4B11-A439-4F6F65B139DA@2x.png" alt>
        </div>
        <div class="add-detail-goods-msg">
          <img src="../assets/logo.png" alt>
          <span class="span1">晓豆包专用相纸</span>
          <span class="span2">规格：50张</span>
          <span class="span3">￥12.9</span>
          <span class="span4">市场价:￥19.9</span>
        </div>
      </div>
      <div class="add-detail-goods">
        <div class="add-detail-icon"></div>
        <div class="add-detail-goods-msg"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.wrapper {
  width: 100%;
}

.img {
  height: 3.75rem;
  background: url("../assets/logo.png") no-repeat;
  background-size: 100%;
}

.price-msg {
  display: flex;
  height: 0.6rem;
}

.price-wrapper {
  height: 100%;
  width: 2.7rem;
  flex: 230;
}

.price {
  display: block;
  margin-left: 0.1rem;
  width: 0.96rem;
  height: 0.4rem;
  line-height: 0.4rem;
  color: rgba(229, 28, 35, 1);
  font-size: 0.27rem;
  text-align: center;
  font-family: PingFang-SC-Bold;
}

.origin-price {
  display: block;
  margin-left: 0.1rem;
  width: 0.77rem;
  height: 0.17rem;
  line-height: 0.17rem;
  color: #666666;
  font-size: 0.12rem;
  text-align: center;
  font-family: PingFang-SC-Medium;
  text-decoration: line-through;
}

.present {
  height: 100%;
  flex: 102;
}

.present-num-text {
  display: block;
  margin-top: 0.07rem;
  margin-right: 0.15rem;
  margin-left: 0.15rem;
  margin-bottom: 0.05rem;
  width: 0.72rem;
  height: 0.17rem;
  line-height: 0.17rem;
  color: rgba(51, 51, 51, 1);
  font-size: 0.12rem;
  text-align: center;
  font-family: PingFang-SC-Medium;
}
.present-num {
  display: block;
  width: 0.21rem;
  height: 0.24rem;
  margin-left: 0.34rem;
  line-height: 0.17rem;
  color: rgba(51, 51, 51, 1);
  font-size: 0.17rem;
  text-align: center;
  font-family: PingFang-SC-Bold;
}

.line {
  flex: 10;
}

.line-content {
  margin-top: 0.15rem;
  height: 0.3rem;
  width: 0.02rem;
  border-left: 0.01rem solid rgba(153, 153, 153, 1);
}

.title {
  width: 3.75rem;
  height: 0.75rem;
  padding: 0.09rem 0.11rem;
  line-height: 0.21rem;
  color: rgba(51, 51, 51, 1);
  font-size: 0.15rem;
  text-align: left;
  font-family: PingFang-SC-Bold;
  box-sizing: border-box;
  border-bottom: 0.13rem solid #f5f5f5;
}

.add-text {
  width: 3.75rem;
  height: 0.47rem;
  font-size: 0.15rem;
  line-height: 0.21rem;
  border-bottom: 0.01rem solid #f5f5f5;
  left: 20px;
  color: rgba(51, 51, 51, 1);
  text-align: left;
  font-family: PingFang-SC-Medium;
}

.add-text span {
  display: inline-block;
  width: 0.05rem;
  height: 0.15rem;
  background-color: #f5b545;
  margin-left: 0.09rem;
  margin-top: 0.18rem;
  margin-left: 0.05rem;
}

.add-detail {
  width: 3.88rem;
  height: 2.02rem;
  display: flex;
  border-bottom: 0.13rem solid #f5f5f5;
  box-sizing: border-box;
  justify-content: space-around;
}

.add-detail-goods {
  flex: 1;

  .add-detail-goods-msg {
    float: right;
    width: 1.3rem;
    height: 100%;
    img {
      width: 1.3rem;
      height: 0.9rem;
    }
    .span1 {
      display: block;

      height: 0.2rem;
      line-height: 0.2rem;
      color: rgba(51, 51, 51, 1);
      font-size: 0.14rem;
      text-align: left;
      font-family: PingFang-SC-Bold;
    }
    .span2 {
      display: block;

      height: 0.17rem;
      line-height: 0.17rem;
      color: rgba(102, 102, 102, 1);
      font-size: 0.12rem;
      text-align: left;
      font-family: PingFang-SC-Medium;
    }
    .span3 {
      display: block;
      width: 0.37rem;
      height: 0.17rem;
      line-height: 0.17rem;
      color: rgba(229, 28, 35, 1);
      font-size: 0.12rem;
      text-align: left;
      font-family: PingFang-SC-Bold;
    }
    .span4 {
      display: block;
      width: 76px;
      height: 17px;
      line-height: 17px;
      color: rgba(102, 102, 102, 1);
      font-size: 12px;
      text-align: left;
      font-family: PingFang-SC-Medium;
    }
  }
}
.add-detail-icon {
  float: left;
  position: relative;
  width: 0.4rem;
  height: 100%;
  img {
    position: absolute;
    padding-left: 0.18rem;
    padding-top: 0.15rem;
    width: 0.18rem;
    height: 0.18rem;
  }
}
</style>

