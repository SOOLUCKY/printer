<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {
    // 请求示例
    this.$api.post(
      "user/login.do",
      {
        参数名: "参数值"
      },
      response => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response.data);
        } else {
          console.log(response.message);
        }
      }
    );
  }
};
</script>

<style lang="scss">
.hello {
  background-color: red;
  width: 1rem;
  height: 1rem;
}
</style>

