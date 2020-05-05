<template>
  <el-dialog title="编辑专辑" :visible.sync="editdialogVisible"  :close-on-press-escape='false'>
    <el-form :model="form" :rules="rules" ref="Form">
      <el-form-item label="专辑封面" :label-width="formLabelWidth" prop="file" ref="file">
        <el-upload
          action
          class="avatar-uploader"
          :show-file-list="false"
          :before-upload="beforeupload"
          :on-change="handlePictureCardPreview"
          accept="image/png, image/gif, image/jpg, image/jpeg"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <!-- <div slot="tip" class="el-upload__tip" v-show="!imageUrl">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
      </el-form-item>

      <el-form-item label="专辑名称" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" autocomplete="off" placeholder="为你的专辑取个名"></el-input>
      </el-form-item>
      <el-form-item label="专辑描述" :label-width="formLabelWidth">
        <el-input
          type="textarea"
          v-model="form.intro"
          autocomplete="off"
          placeholder="为你的专辑加上简单的介绍（可选）"
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="resetForm('Form')">取 消</el-button>
      <!-- <el-button type="primary" @click="setDialogFormVisible(false)">确 定</el-button> -->
      <el-button type="primary" @click="onSubmit('Form')">确 定</el-button>
    </div>
  </el-dialog> 
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { updateCollection } from "network/session";

export default {
  name: "EditCollectionDialog",
  data() {
    return {
      form: {
        name: this.collection.name,
        intro: this.collection.intro
      },
      files: null,
      rules: {
        name: [{ required: true, message: "必填项", trigger: "blur" }]
      },
      imageUrl: "",
      formLabelWidth: "120px",
      // editVisible:false
    };
  },
  props: {
    collection: Object,
    editdialogVisible:Boolean
  },
  methods: {
    // ...mapMutations(["setDialogFormVisible"]),
    ...mapActions(["getAdmin"]),
    // before-upload钩子函数
    beforeupload(file) {
      //  const typeArr = ['image/png', 'image/gif', 'image/jpeg', 'image/jpg'];
      //  const isJPG = typeArr.indexOf(file.raw.type) !== -1;
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error("上传头像图片只能是 JPG 格式!");
      // }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      // return isJPG && isLt2M;
      return isLt2M;
    },
    // on-change钩子函数
    handlePictureCardPreview(file, fileList) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.files = file.raw;
      // this.$refs['file'].clearValidate('file');
      // console.log(fileList);
    },
    // 提交时触发了before-upload函数??
    // 提交表格并验证
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
                   this.$emit('childClose');
          // formData保存表单带有文件数据
          let formData = new FormData();
          formData.append("name", this.form.name);
          formData.append("intro", this.form.intro);
          formData.append("file", this.files);
          updateCollection(this.collection._id,formData).then(res => {
            console.log(res);
            if (res.data.status === 1) {
              alert(res.data.message);
              this.getAdmin();
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 取消===重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
     this.$emit('childClose');
    }
  },
};
</script>

<style scoped>
.avatar-uploader img,
i {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader img,
i:hover {
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