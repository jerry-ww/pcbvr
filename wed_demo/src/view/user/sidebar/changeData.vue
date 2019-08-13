<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="昵称：">
      <el-input v-model="form.username" placeholder></el-input>
    </el-form-item>

    <el-form-item label="性别">
      <el-select class="selectbo" v-model="form.gender" placeholder="请选择">
        <el-option
          v-for="item in form.option"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="生日">
      <el-date-picker class="selectbo" v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>

    <el-form-item label="居住地">
      <el-cascader
        class="selectbo"
        size="large"
        :options="form.option1"
        v-model="form.region"
        @change="handleChange"
      ></el-cascader>
    </el-form-item>

    <el-form-item label="QQ号">
      <el-input v-model="form.QQ" placeholder></el-input>
    </el-form-item>

    <el-form-item label="微信">
      <el-input v-model="form.WeChat" placeholder></el-input>
    </el-form-item>

    <el-form-item label="手机号">
      <el-input v-model="form.phone" placeholder type="phone"></el-input>
    </el-form-item>

    <el-form-item label="个人简介">
      <el-input v-model="form.description" placeholder></el-input>
    </el-form-item>

    <el-form-item>
      <el-button class="button1" type="primary" round @click="submitForm('form')">提交</el-button>
    </el-form-item>

    <el-form-item>
      <img
        id="choosePic"
        src="https://ssl-avatar.720static.com/@/avatar/3e2jOzhvsv3/69b0862fdd50dd63c609ccdccc727f47.jpeg?imageMogr2/thumbnail/270"
        width="135"
        height="135"
        style="border-radius: 50%; vertical-align: middle; background-color: rgb(244, 244, 244);"
      />
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
      >
        <el-button size="small" type="primary" @click="upPic(this,event)">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
      form: {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
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
        description: ""
      }
    };
  },

  methods: {
    handleChange(value) {
      var ctt = CodeToText[value[0]] + CodeToText[value[1]];
      console.log(ctt);
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    submitForm(form) {
      var obj = {
        username: this.form.username,
        gender: this.form.gender,
        date: this.form.date,
        region: this.form.region,
        QQ: this.form.QQ,
        WeChat: this.form.WeChat,
        phone: this.form.phone,
        description: this.form.description
      };

      $.ajax({
        type: "post", // 提交方式
        url: "接口",
        data: {
          username: username,
          gender: gender,
          date: date,
          region: region,
          QQ: QQ,
          WeChat: WeChat,
          phone: phone,
          description: description
        },
        dataType: "json", // 服务器端返回的数据类型
        success: function(data) {
          // console.log(data);
          if (data.code == 200) {
            close_logpop();
            alert("提交成功");
            close_logpop();
          } else {
            alert("提交失败");
          }
        }
      });
    },
    upPic(target, e) {
      var src = e.target || window.event.srcElement;
      var filename = src.value;
      var imgName = filename.substring(filename.lastIndexOf("\\") + 1);
      var ext, idx;
      if (imgName == "") {
        alert("请选择需要上传的图片！");
        return;
      } else {
        idx = imgName.lastIndexOf(".");
        if (idx != -1) {
          ext = imgName.substr(idx + 1).toUpperCase();
          ext = ext.toLowerCase();
          if (ext != "jpg" && ext != "png") {
            alert("只能上传.jpg .png类型的文件！");
            return;
          }
        } else {
          alert("只能上传.jpg .png类型的文件！");
          target.value = "";
          return;
        }
      }
      var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
      var fileSize = 0;
      if (isIE && !target.files) {
        var filePath = target.value;
        var fileSystem = new ActiveXObject("Scription.FileSystemObject");
        var file = fileSystem.GetFile(filePath);
        fileSize = file.size;
      } else {
        fileSize = target.file[0].size;
      }

      if (fileSize > 1024 * 1024) {
        alert("图片过大不能上传！");
        return;
      }

      checkImgPX(target, 240, 300, target.files[0]);
    },
    checkImgPX(ths, width, height, file) {
      var objUrl = getObjectURL(file);
      var img = null;
      img = document.createElement("img");
      document.body.insertAdjacentElement("beforeend", img);
      img.style.visibility = "hidden";
      img.src = objUrl;
      var imgwidth = 0;
      var imgheight = 0;
      if (img.complete) {
        //判断是否图片在本页面完成加载
        imgwidth = img.offsetWidth;
        imgheight = img.offsetHeight;
      } else {
        img.onload = function() {
          //待图片加载后获取宽和高
          imgwidth = img.offsetWidth;
          imgheight = img.offsetHeight;
          alert(imgwidth + "," + imgheight);
          if (imgwidth != width || imgheight != height) {
            alert("必须是240像素*300像素的图片");
            ths.value = "";
            return;
          } else {
            console.log("objUrl=" + objUrl);
            if (objUrl) {
              //图片预览展示
              var element = document.getElementById("choosePic");
              alert(objUrl);
              element.src = "objUrl";
            }
          }
        };
      }
    },
    getObjectURL(file) {
      var url = null;
      if (window.createObjectURL != undefined) {
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    }
  }
};
</script>
<style scoped>
/*
.baseform {
  min-height: 672px;
  background: #fff;
  -webkit-box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
}
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

</style>