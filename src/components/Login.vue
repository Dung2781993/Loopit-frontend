<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="user.email"
            required
            type="text"
            class="form-control"
            name="email"
          />
          <div
            v-if="validation.isEmail"
            class="alert alert-danger"
            role="alert"
          >
            Email is required!
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="user.password"
            required
            type="password"
            class="form-control"
            name="password"
          />
          <div
            v-if="validation.isPassword"
            class="alert alert-danger"
            role="alert"
          >
            Password is required!
          </div>
        </div>
        <div class="form-group">
          <button
            class="btn btn-primary btn-block btn-submit"
            :disabled="loading"
          >
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
        <p class="forgot-password text-right mt-2 mb-4">
          <router-link to="/forgot-password">Forgot password ?</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import User from "../models/user";
export default {
  name: "Login",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
      validation: {
        isEmail: false,
        isPassword: false,
      },
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push({ name: "profile" });
    }
  },
  methods: {
    async handleLogin() {
      if (this.formValidation()) {
        this.loading = true;
        let response = await this.$store.dispatch("auth/login", this.user);
        console.log(response);
        if (response) {
          this.$message({
            message: "Congrats, login successfully",
            type: "success",
          });
          this.$router.push({ name: "car" });
        } else {
          this.loading = false;
          this.$message.error(
            "The credentials that you've entered are incorrect."
          );
        }
      }
    },
    formValidation() {
      if (this.user.email == "") {
        this.validation.isEmail = true;
        return false;
      }
      if (this.user.password == "") {
        this.validation.isPassword = true;
        return false;
      }
      this.validation.isEmail = false;
      this.validation.isPassword = false;
      return true;
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}
.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}
.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
