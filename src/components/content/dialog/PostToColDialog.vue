<template>
  <el-dialog title="发布新句子" :visible.sync="dialogFormVisible" :close-on-click-modal='false'>
    <el-form :model="form" :rules="rules" ref="Form">
      <el-form-item prop="content">
        <el-input type="textarea" v-model="form.content" placeholder="和世界分享你喜欢的句子"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="3">
          <el-checkbox v-model="checked">原创</el-checkbox>
        </el-col>
        <el-col :span="10">
          <el-form-item label="作者" :label-width="formLabelWidth">
            <el-input v-model="form.referAuthorName" placeholder="请输入作者" :disabled="checked"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10" :push="1">
          <el-form-item label="出处" :label-width="formLabelWidth">
            <el-input v-model="form.referWorkName" placeholder="请输入出处" :disabled="checked"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="标签(多个标签用逗号分割)">
        <el-input v-model="form.tags" placeholder="请输入标签"></el-input>
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
import { postToCollection } from "network/session";

export default {
  name: "PostToColDialog",
  data() {
    return {
      form: {
        content: "",
        referAuthorName: "",
        referWorkName: "",
        tags: ""
      },
      formLabelWidth: "50px",
      checked: false,
      rules: {
        content: [{ required: true, message: "必填项", trigger: "blur" }]
      },
      // postFormVisible: this.dialogFormVisible
    };
  },
  props: {
    collection: Object,
    dialogFormVisible: Boolean
  },
  methods: {
    // ...mapMutations(["setDialogFormVisible"]),
    ...mapActions(["getAdmin"]),
    // 提交表格并验证
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
         this.$emit('childClose');//子组件向外部传播一个childClose事件
          // formData保存表单带有文件数据
          postToCollection(this.collection._id,this.form).then(res => {
            console.log(res);
            // 刷新管理员信息
            if (res.data.status === 1) {
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
     this.$emit('childClose');//子组件向外部传播一个childClose事件
    }
  },
  computed: {
    // ...mapState(["dialogFormVisible"]),
  }
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
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