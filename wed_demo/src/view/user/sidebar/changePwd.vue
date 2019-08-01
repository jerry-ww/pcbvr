<template>
  <div class="ResetPWd">
    <div class="ResetPWd_formline">修改密码</div>
    <div class="ResetPWd_formline">
      <label class="ResetPWd_cell">原始密码：</label>
      <el-input placeholder="请输入密码" v-model="input1" show-password></el-input>
    </div>
    <div class="ResetPWd_formline">
      <label class="ResetPWd_cell">新密码：</label>
      <el-input placeholder="请输入密码" v-model="input2" show-password></el-input>
    </div>
    <div class="ResetPWd_formline">
      <label class="ResetPWd_cell">确认密码：</label>
      <el-input placeholder="请输入密码" v-model="input3" show-password></el-input>
    </div>
    <div class="ResetRWd_button">
      <el-button type="danger" round>确认修改</el-button>
    </div>
  </div>
</template>
<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.11.0/lib/index.js">
</script>
<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: ""
    };
  }
};
</script>
<style scoped>
</style>