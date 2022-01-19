<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <form>
          <h3>Sign In</h3>
          <div class="form-group">
            <label>Email address <span class="required-field">*</span></label>
            <input
              type="email"
              v-model="form.email"
              class="form-control form-control-lg"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label>Password <span class="required-field">*</span></label>
            <input
              type="password"
              v-model="form.password"
              class="form-control form-control-lg"
            />
          </div>
          <div class="form-group">
            <button
              @click="login"
              type="button"
              class="btn btn-info btn-block btn-submit"
            >
              Sign In
            </button>
          </div>

          <p class="forgot-password text-right mt-2 mb-4">
            <router-link to="/forgot-password">Forgot password ?</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    async login() {
      // if (this.formValidation()) {
      //   let formData = new FormData();
      //   formData.append("email", this.form.email);
      //   formData.append("password", this.form.password);
      //   let response = await AccountService.login(formData);
      //   if (response && response.data) {
      //     this.$message({
      //       message: "Congrats, login successfully",
      //       type: "success",
      //     });
      //     localStorage.setItem("token", response.data.access_token);
      //     this.$router.push({ name: "dashboard" });
      //   } else {
      //     this.$message.error(
      //       "The credentials that you've entered are incorrect."
      //     );
      //   }
      // }
    },
    formValidation() {
      if (this.form.email == null || this.form.email == "") {
        this.$message.error("Email is invalid");
        return false;
      }
      if (this.form.password == null || this.form.email == "") {
        this.$message.error("Password is invalid");
        return false;
      }
      return true;
    },
  },
};
</script>
