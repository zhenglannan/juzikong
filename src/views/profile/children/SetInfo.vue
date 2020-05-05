<template>
  <el-row>
    <el-col :span="24">
      <div class="card">
        <el-tabs :tab-position="tabPosition">
          <el-tab-pane label="基本信息">
            <el-form :model="form" :rules="rules" ref="Form">
              <el-form-item label="头像" :label-width="formLabelWidth" prop="file">
                <el-upload
                  action
                  class="avatar-uploader"
                  :show-file-list="false"
                  :before-upload="beforeupload"
                  :on-change="handlePictureCardPreview"
                  accept="image/png, image/gif, image/jpg, image/jpeg"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <img v-else :src="adminInfo.avatar" class="avatar" />
                  <div slot="tip" class="el-upload__tip">点击头像可更换</div>
                </el-upload>
              </el-form-item>

              <el-form-item label="昵称" :label-width="formLabelWidth" prop="name">
                <el-input v-model="name" autocomplete="off" placeholder="用户卡片将展示此昵称（必填）"></el-input>
              </el-form-item>
              <el-form-item label="签名" :label-width="formLabelWidth">
                <el-input
                  type="textarea"
                  v-model="form.intro"
                  autocomplete="off"
                  placeholder="设置个性签名，更好的展示自己"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="resetForm('Form')">撤销</el-button>
                <!-- <el-button type="primary" @click="setDialogFormVisible(false)">确 定</el-button> -->
                <el-button type="primary" @click="onSubmit('Form')">确 定</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="更改密码">
            <changePwd></changePwd>
          </el-tab-pane>
          <el-tab-pane label="设置标签">设置标签</el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { updateInfo } from "network/session";
import changePwd from "content/changePwd/changePwd";
export default {
  name: "SetInfo",
  data() {
    return {
      tabPosition: "left",
      form: {
        // name: '',
        intro: ""
      },
      name: "",
      files: null,
      rules: {
        // name: [{ required: true, message: "必填项", trigger: "blur" }]
      },
      imageUrl: "",
      formLabelWidth: "120px"
    };
  },
  components: {
    changePwd
  },

  methods: {
    ...mapActions(["getAdmin"]),

    beforeupload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    // on-change钩子函数
    handlePictureCardPreview(file, fileList) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.files = file.raw;
      // this.$refs['file'].clearValidate('file');
      // console.log(file.raw);
      // console.log(fileList);
    },
    // 取消===重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.setDialogFormVisible(false);
    },
    // 提交表格并验证
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // formData保存表单带有文件数据
          let formData = new FormData();
          formData.append("name", this.name);
          formData.append("intro", this.form.intro);
          formData.append("file", this.files);
          updateInfo(formData).then(res => {
            console.log(res);
            if (res.data.status === 1) {
              this.getAdmin();
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  computed: {
    ...mapState(["adminInfo"])
  },
  created() {
    this.name = this.adminInfo.user_name;
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #dbdbdb;
  margin: 30px auto 20px;
  padding: 8px 0;
  background-color: #fff;
  border-radius: 3px;
  flex-direction: row;
  flex-grow: 1;
  justify-content: stretch;
  max-width: 935px;
  overflow: hidden;
  width: 100%;
}
.avatar-uploader img {
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader img:hover {
  border-color: #409eff;
}
/* .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
} */
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>