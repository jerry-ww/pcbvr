<template>
  <el-form class="baseform" ref="form" :model="form" label-width="80px">
    <el-form-item label="昵 称">
      <el-input class="name_input" v-model="form.username" placeholder></el-input>
    </el-form-item>

    <el-form-item label="性 别">
      <el-select class="selectbo" v-model="form.gender" placeholder="请选择">
        <el-option
          v-for="item in form.option"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="生 日">
      <el-date-picker class="selectbo" v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>

    <el-form-item label="居住地">
      <el-cascader class="selectbo" size="large" :options="form.option1" v-model="form.region"></el-cascader>
    </el-form-item>
    <!--@change="handleChange" -->
    <el-form-item label="QQ号">
      <el-input class="qq_input" v-model="form.QQ" placeholder="请输入qq号"></el-input>
    </el-form-item>

    <el-form-item label="微 信">
      <el-input class="wechat_input" v-model="form.WeChat" placeholder="请输入微信号"></el-input>
    </el-form-item>

    <el-form-item label="手机号">
      <el-input class="phone_input" v-model="form.phone" placeholder="请输入手机号" type="phone"></el-input>
    </el-form-item>

    <el-form-item label="个人简介">
      <el-input
        type="textarea"
        :rows="5"
        class="person_input"
        v-model="form.description"
        placeholder="介绍一下你自己吧"
      ></el-input>
    </el-form-item>
    
    <el-form-item class="btn">
      <el-button class="button1" type="primary" round @click="submitForm('form')">提交</el-button>
    </el-form-item>
    <el-form-item class= "imgbox">
      <el-upload
        class="avatar-uploader"
        :show-file-list="false"
        :auto-upload="false"
        :on-change="imgSaveToUrl"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
      <!-- <img v-show="imageUrl" :src="imageUrl" class="avatar" style="border-radius:20px ;border-radius:50%"/> -->
      <!-- <i v-show="!imageUrl" class="el-icon-plus avatar-uploader-icon" style="background-color: #efefef;border-radius:20px;border-radius:50%"></i>  -->
        <img v-if="imageUrl" :src="imageUrl" class="avatar" style="border-radius:20px ;border-radius:50%"/>
        <i v-else class="el-icon-plus avatar-uploader-icon" style="background-color: #efefef;border-radius:20px;border-radius:50%"></i>
      </el-upload>  
    </el-form-item>
    
  </el-form>
</template>


<script src="http://cdn.bootcss.com/jquery/1.9.1/jquery.min.js"></script> <script src="kuCity.js"></script>


<script>
import { provinceAndCityData, CodeToText } from "element-china-area-data";

export default {
  data() {
    return {
      imageUrl:"",

      //uid:"",
      form: {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        user_id:"",
        date: "",
        username: "",
        gender: "",
        option: [
          {
            value: "选项1",
            label: "男"
          },
          {
            value: "选项2",
            label: "女"
          },
          {
            value: "选项3",
            label: "保密"
          }
        ],
        option1: provinceAndCityData,
        region: [],
        QQ: "",
        WeChat: "",
        phone: "",
        description: "",
        img_base:""
      }
    };
  },
  mounted:function () {
    this.getUserData(this.form)
    this.imageUrl="http://49.234.154.17:5555/avatars/"+this.form.user_id;
    console.log(this.imageUrl);
    
    // this.form.username=form_data.name;
    // this.form.gender=form_data.sex;
    // this.form.data=form_data.birthday;
    // this.form.region=form_data.location;
    // this.form.QQ=form_data.qq;
    // this.form.WeChat=form_data.wechat;
    // this.form.phone=form_data.phone;
    // this.form.description=form_data.description;
    // console.log(this.form);
  },

  methods: {
    imgSaveToUrl(file){
      this.imageUrl=URL.createObjectURL(file.raw);
      let reader=new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onloadend = (e)=>{
        this.form.img_base=reader.result;
      }
    },
    // handleAvatarSuccess(res, file) {
    //   this.imageUrl = URL.createObjectURL(file.raw);
    // },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  
   submitForm(form) {
      var obj = {
        username: this.form.username,
        gender: this.form.gender,
        date: this.form.date,
        region: ""+this.form.region,
        QQ: this.form.QQ,
        WeChat: this.form.WeChat,
        phone: this.form.phone,
        description: this.form.description,
        img_base:this.form.img_base
      };
      var name = this.form.username;
      var sex = this.form.gender;
      var birthday = this.form.date;
      var location = ""+this.form.region;
      var qq = this.form.QQ;
      var wechat = this.form.WeChat;
      var description = this.form.description;

      $.ajax({
        type: "post", // 提交方式
        url: "http://49.234.154.17:5555/user_modify_info.php",
         data: {
          data:{
              // "name": this.form.username,
              // "sex": this.form.gender,
              // "birthday": this.form.date,
              // "location": this.form.region,
              // "qq": this.form.QQ,
              // "wechat": this.form.WeChat,
              // "description": this.form.description
              "name": obj.username,
              "sex": obj.gender,
              "birthday": obj.date,
              "location": obj.region,
              "qq": obj.QQ,
              "wechat": obj.WeChat,
              "description": obj.description,
              "avatar":obj.img_base
          }
        },
        xhrFields: {
          withCredentials: true // 这里设置了withCredentials
        },
        dataType: "json", // 服务器端返回的数据类型
        success: function(data) {
          // console.log(data);
          if (data.code == 200) {
            // close_logpop();
            alert("提交成功");
            // close_logpop();
          } else {
            alert("提交失败");
            console.log(obj)
          }
        }
      });
    },
    getUserData(form){
       $.ajax({
        type: "post", // 提交方式
        url: "http://49.234.154.17:5555/user_query.php",
        data: {},
        async: false,
        xhrFields: {
          withCredentials: true // 这里设置了withCredentials
        },
        dataType: "text",  // 服务器端返回的数据类型
        success: function(data) {
          var res=JSON.parse( data );
          if (res.code == 200) {
            form.username= res.user.name;
            form.gender= res.user.sex;
            form.date= res.user.birthday;
            form.region= res.user.location.split(',');
            form.QQ= res.user.qq;
            form.WeChat= res.user.wechat;
            form.phone= res.user.phone;
            form.description= res.user.description;
            form.user_id=res.user.uid;
            // console.log(user_id)
            // return user_id;
            // this.imageUrl="http://49.234.154.17:5555/avatars/"+res.user.uid+".jpg";
            // console.log(this.imageUrl);
          } else {
            alert("请求失败");
          }
        }
      });
      // this.imageUrl="http://49.234.154.17:5555/avatars/"+user_uid+".jpg";
      // console.log(this.imageUrl);
      // this.form.username=form_data.name;
      // this.form.gender=form_data.sex;
      // this.form.data=form_data.birthday;
      // this.form.region=form_data.location;
      // this.form.QQ=form_data.qq;
      // this.form.WeChat=form_data.wechat;
      // this.form.phone=form_data.phone;
      // this.form.description=form_data.description;
    }
  }
};
</script>
<style scoped>
.baseform {
  position: relative;
  width: 80%;
  margin: auto;
}

#choosePic {
  margin-left: 50%;
  transform: translateX(-50%);
}
.imgbox {
  position: absolute;
  right: 150px;
  top: 50px;
}
.el-upload__tip {
  line-height: 15px;
}

.name_input {
  width: 33%;
}

.qq_input {
  width: 78%;
}
.wechat_input {
  width: 78%;
}
.phone_input {
  width: 78%;
}
.person_input {
  width: 78%;
}
.btn {
  margin-left: 50%;
  transform: translateX(-50%);
}
/*
.block111 {
  width: 400px;
  padding-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
}
div {
  display: block;
}
*/
.picture {
  height: 180px;
  width: 180px;
  background: #f8f8f8;
  border: 1px solid #f8f8f8;
  border-radius: 4px;
  padding-top: 24px;
  text-align: center;
  position: relative;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>