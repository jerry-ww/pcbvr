<template>
  <div class="baseform">
    <div>
      <div class="block111">
        <label class>昵称：</label>
        <el-input v-model="inputN" placeholder></el-input>
        <label class>用户ID：</label>
        <span>????</span>
      </div>
    </div>

    <div class="block111">
      <span class="demonstration">性别</span>
      <el-select class="selectbo" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>

    <div class="block111">
      <span class="demonstration">生日</span>
      <el-date-picker class="selectbo" v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
    </div>

    <div class="block111">
      <label class>居住地</label>
      <el-cascader
        class="selectbo"
        size="large"
        :options="options2"
        v-model="selectedOptions"
        @change="handleChange"
      ></el-cascader>
    </div>

    <div class="block111">
      <panel>QQ号</panel>
      
      <el-input v-model="inputQ" placeholder></el-input>
    
    </div>

    <div class="block111">
      
      <panel>微信号</panel>
      <el-input v-model="inputW" placeholder></el-input>
 
    </div>

    <div class="block111">
     
      <panel>手机号</panel>
      <el-input v-model="inputS" placeholder></el-input>
     
    </div>
    <div class="block111">
      <panel>个人简介</panel>
      <el-input v-model="inputS" placeholder></el-input>
    </div>
    <div>
      <el-button class="button1" type="primary" round>提交</el-button>
    </div>

    <div class="picture">
      <img
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
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>
</template>


<script src="http://cdn.bootcss.com/jquery/1.9.1/jquery.min.js"></script> <script src="kuCity.js"></script>


<script>
import { provinceAndCityData, CodeToText } from "element-china-area-data";

export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: "",
      options1: [
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
      value: "",
      options2: provinceAndCityData,
      selectedOptions: [],
      inputN: "",
      inputQ: "",
      inputW: "",
      inputS: ""
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
    }
  }
};
</script>
<style scoped>
.baseform {
  min-height: 672px;
  background: #fff;
  -webkit-box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
}
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
.block111 {
  width: 400px;
  padding-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
}
div {
  display: block;
}



</style>