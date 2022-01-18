<template>
  <div class="vue-tempalte">
    <form>
      <h3>Sign In</h3>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" v-model="form.email" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="form.password" class="form-control form-control-lg" />
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
</template>

<script>
export default {
  data() {
    return {
        form:{
            email: null,
            password: null
        }
    };
  },
  methods: {
    login() {
        console.log(this.form);
    },
  },
};
</script>
