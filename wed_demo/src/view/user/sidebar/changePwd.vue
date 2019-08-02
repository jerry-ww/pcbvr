<template>
  <div id="app">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item label="原密码" prop="pass">
        <el-input v-model="ruleForm.pass" placeholder="请输入原密码" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newpass">
        <el-input v-model="ruleForm.newpass" placeholder="请输入新密码" id="newkey" type="password"></el-input>
      </el-form-item>
      <el-form-item label="重复新密码" prop="checknewpass">
        <el-input
          v-model="ruleForm.checknewpass"
          placeholder="请再次输入新密码"
          id="newkey1"
          type="password"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="grid-content bg-purple">
      <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.ruleForm.checknewpass !== "") {
          this.$refs.ruleForm.validateField("checknewpass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.newpass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {}, //修改密码的表单
      rules: {
        pass: [
          {
            required: true,
            trigger: "blur",
            message: "请输入密码"
          }
        ],

        newpass: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        checknewpass: [
          {
            validator: validatePass2,
            trigger: "blur"
          }
        ]
      },

      methods: {
        submitForm(ruleForm) {
          var obj = {
            username: this.username,
            oldpwd: this.ruleForm.pass,
            newpwd: this.ruleForm.newpass
          };

          $.ajax({
            type: "post", // 提交方式
            url: "接口",
            data: {
              "username":username,"oldpassword":oldpwd,"newpassword":newpwd
            },
            dataType: "json", // 服务器端返回的数据类型
            success: function(data) {
              // console.log(data);
              if (data.code == 200) {
                close_logpop();
                alert("修改成功");
                close_logpop();
              } else {
                alert("修改失败");
              }
            }
          });
        }
      }
    };
  }
};
</script>
<style scoped>
</style>