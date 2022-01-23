<template>
  <div class="App">
    <div class="vue-tempalte">
      <!-- Navigation -->
      <nav
        class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
      >
        <div class="container">
          <a class="navbar-brand float-left" href="/home"> Loopit </a>
          <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item" v-if="!currentUser">
              <router-link to="/login" class="nav-link">
                <font-awesome-icon class="icon-auth" icon="sign-in-alt" />Login
              </router-link>
            </li>
            <li class="nav-item" v-if="!currentUser">
              <router-link class="btn btn-outline-primary" to="/signup">
                <font-awesome-icon class="icon-auth" icon="user-plus" />Sign Up
              </router-link>
            </li>
            <li class="nav-item" v-if="currentUser">
              <router-link to="/car" class="nav-link"> Car </router-link>
            </li>
            <li class="nav-item" v-if="currentUser">
              <router-link to="/profile" class="nav-link">
                <font-awesome-icon class="icon-auth" icon="user" />
                {{ currentUser.user.name }}
              </router-link>
            </li>
            <li class="nav-item" v-if="currentUser">
              <a class="nav-link" href @click.prevent="logOut">
                <font-awesome-icon
                  class="icon-auth"
                  icon="sign-out-alt"
                />LogOut
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main -->

      <div class="ui text container" style="margin-top: 7em">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.go();
      this.$router.push("/login");
    },
  },
};
</script>
