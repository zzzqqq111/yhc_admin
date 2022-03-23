<template>
  <div>
    <div class="loginBox">
      <img
        src="https://pre-zxhj.zxhj618.com/assets/images/%E7%BC%96%E7%BB%84@2x.png"
        class="leftImg"
      />
      <div class="rightBox">
        <h3>登录</h3>
        <el-form
          :rules="rules"
          ref="formLabelAlign"
          label-position="left"
          label-width="70px"
          :model="formLabelAlign"
        >
          <el-form-item label="登录名:" required prop="username">
            <el-input v-model="formLabelAlign.username"></el-input>
          </el-form-item>
          <el-form-item label="密码:" required prop="password">
            <el-input
              v-model="formLabelAlign.password"
              show-password
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="submitForm('formLabelAlign')"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { login, getUserInfo } from "@/api/login";
export default {
  name: "login",
  data() {
    return {
      formLabelAlign: {
        username: "",
        password: "",
        client: "ZXHJ",
      },
      rules: {
        username: [
          { required: true, message: "请输入登录名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loginForm();
          this.getAccountData();
        } else {
          return false;
        }
      });
    },
    // 登录
    async loginForm() {
      await login(this.formLabelAlign).then((data) => {
        window.localStorage.setItem(
          "admin_permiss",
          JSON.stringify(data.permissionValues)
        );
        this.$store.commit("COMMIT_TOKEN", {
          token: data.token,
        });
        this.$router.push("/home");
      });
    },
    // 获取当前登录人信息
    async getAccountData() {
      await getUserInfo().then((data) => {
        this.$store.commit("USER_INFO", {
          token: data,
        });
      });
    },
  },
};
</script>

<style lang="less">
.loginBox {
  display: flex;
  height: 100vh;
  .leftImg {
    width: 50%;
  }
  .rightBox {
    width: 300px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
