<template>
  <div class="home">
    <md-app>
      <md-app-toolbar v-if="isUserLoggedIn" class="md-primary">
        <div class="md-toolbar-row">
          <md-tabs class="md-primary" md-sync-route>
            <md-tab id="tab-training" md-label="Training" to="/training"></md-tab>
            <md-tab id="tab-presets" md-label="Presets" to="/presets"></md-tab>
            <md-tab id="tab-measurements" md-label="Measurements" to="/measurements"></md-tab>
            <md-tab id="tab-progress" md-label="Progress" to="/progress"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-toolbar class="md-primary" v-if="!isUserLoggedIn">
        <h3 class="md-title">Siluets</h3>
      </md-app-toolbar>
    </md-app>
    <div v-if="!isUserLoggedIn" class="login-form">
      <form class="md-layout">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
          <md-card-header>
            <div class="md-title">Users</div>
          </md-card-header>

          <md-card-content>
            <md-field>
              <label for="email">Email</label>
              <md-input v-model="email" name="email" id="email" autocomplete="email" />
              <span class="md-error">The first name is required</span>
              <span class="md-error">Invalid first name</span>
            </md-field>

            <md-field>
              <label for="password">Password</label>
              <md-input v-model="password" type="password" name="password" id="password" autocomplete="password" />
              <span class="md-error">The first name is required</span>
              <span class="md-error">Invalid first name</span>
            </md-field>

            <md-button class="md-primary" @click="login()">Login</md-button>
            <md-button class="md-accent" @click="register()">Register</md-button>
          </md-card-content>
        </md-card>
      </form>
    </div>

    <router-view v-if="isUserLoggedIn"></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { USER_LOGGED_CHECK, USER_LOGIN, USER_REGISTER } from "@/store/actions.type";
import { SET_EMAIL, SET_PASSWORD } from "@/store/mutations.type";


export default {
  name: "home",
  computed: {
    ...mapGetters(["isUserLoggedIn"]),
    email: {
      get: function() {
        return this.$store.getters.email;
      },
      set: function(value) {
        this.$store.commit(SET_EMAIL, value);
      }
    },
    password: {
      get: function() {
        return this.$store.getters.password;
      },
      set: function(value) {
        this.$store.commit(SET_PASSWORD, value);
      }
    }
  },
  mounted() {
    this.$store.dispatch(USER_LOGGED_CHECK);
  },
  methods: {
    login: function() {
      this.$store.dispatch(USER_LOGIN)
    },
    register: function() {
      this.$store.dispatch(USER_REGISTER)
    }
  }
};
</script>

<style lang="scss" scoped>
.login-content {
  width: 200px;
  height: 200px;
}
.content {
  width: 100%;
  max-height: calc(100vh - 60px);
}
.md-layout {
  text-align: center;
}
.login-form {
  margin: 0 auto;
}
</style>