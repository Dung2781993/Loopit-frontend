<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav
      class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
    >
      <div class="container">
        <a
          class="navbar-brand float-left"
          href="https://www.loopit.co/"
          target="_blank"
        >
          Loopit
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item" v-if="!isLogged">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item" v-if="!isLogged">
            <router-link class="btn btn-outline-primary" to="/"
              >Sign up</router-link
            >
          </li>
          <li class="nav-item" v-if="isLogged">
            <a href="#" @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="ui text container" style="margin-top: 7em">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLogged: this.checkIfIsLogged(),
    };
  },
  methods: {
    logout() {
      
    },
    checkIfIsLogged() {
      let token = localStorage.getItem("token");
      if (token) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
