<template>
  <div class="change_pwd">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
      <el-form-item label="原密码" prop="pass">
        <el-input class="pwd_input" v-model="ruleForm.pass" placeholder="请输入原密码" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newpass">
        <el-input class="pwd_input" v-model="ruleForm.newpass" placeholder="请输入新密码" id="newkey" type="password"></el-input>
      </el-form-item>
      <el-form-item label="重复新密码" prop="checknewpass">
        <el-input
          v-model="ruleForm.checknewpass"
          placeholder="请再次输入新密码"
          id="newkey1"
          type="password"
          class="pwd_input"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="grid-content bg-purple btn">
      <el-button type="primary" @click="changePwd('ruleForm')">保存</el-button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    var validate_password = (rule, value, callback) => {
      if(this.ruleForm.checknewpass){
        if(!value){
          callback(new Error("请确认您的密码"))
        }else if(!(value===this.ruleForm.checknewpass)){
          callback(new Error("两次输入的密码不一致"))
        }else{
          callback()
        }
      }else{
        if(!value){
          callback(new Error("密码不能为空"))
        }else{
          callback()
        }
      }
    };
    var validateConfirmpwd = (rule, value, callback) => {
      if(this.ruleForm.newpass){
        if(!value){
          callback(new Error("请确认您的密码"))
        }else if(!(value === this.ruleForm.newpass)){
          callback(new Error("两次输入的密码不一致"))
        }else{
          callback()
        }
      }else{
        if(!value){
          callback(new Error("密码不能为空"))
        }else{
          callback()
        }
      }
    };
    return {
      ruleForm: {
          pass: '',
          newpass: '',
          checknewpass: '',
        },
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
            required:true,
            validator: validate_password,
            trigger: ['blur','change']
          }
        ],
        checknewpass: [
          {
            required:true,
            validator: validateConfirmpwd,
            trigger: ['blur','change']
          }
        ]
      },
    }
  },
  methods: {
    changePwd(ruleForm) {
      // var obj = {
      //   username: this.username,
      //   oldpwd: this.ruleForm.pass,
      //   newpwd: this.ruleForm.newpass
      // };
      let oldPwd = this.ruleForm.pass;
      let newPwd = this.ruleForm.newpass;
      console.log(oldPwd);
      $.ajax({
        type: "post", // 提交方式
        url: "http://49.234.154.17:5555/modify/password.php",
        data: {"pwd":oldPwd,"new_pwd":newPwd},
        dataType: "json", // 服务器端返回的数据类型
        success: function(data) {
          if (data.code == 200) {
            alert("修改成功");
          } else {
            alert("修改失败");
          }
        }
      });
    }
  }
}

</script>
<style scoped>
.change_pwd{
  width: 500px;
  margin: auto;
}
.btn{
  margin-left: 230px;
  /* transform:translateX(-20%); */
}


</style>