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
    <div v-if="!isUserLoggedIn">
      <form class="md-layout" @submit.prevent>
        <md-card class="md-layout-item md-size-50 md-small-size-100 login-form">
          <md-card-header>
            <div class="md-title">Login / Register</div>
          </md-card-header>

          <md-card-content>
            <md-field :class="getValidationClass('email')">
              <label for="email">Email</label>
              <md-input v-model="email" name="email" id="email" autocomplete="email" />
              <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
              <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
            </md-field>

            <md-field :class="getValidationClass('password')">
              <label for="password">Password</label>
              <md-input
                v-model="password"
                type="password"
                name="password"
                id="password"
                autocomplete="password"
              />
              <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
              <span
                class="md-error"
                v-else-if="!$v.form.password.minLength"
              >Password should have at least 5 characters</span>
            </md-field>

            <md-button type="submit" class="md-primary" @click="login()">Login</md-button>
            <md-button type="submit" class="md-accent" @click="register()">Register</md-button>
          </md-card-content>
        </md-card>
      </form>
    </div>

    <router-view v-if="isUserLoggedIn"></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  USER_LOGGED_CHECK,
  USER_LOGIN,
  USER_REGISTER
} from "@/store/actions.type";
import { SET_EMAIL, SET_PASSWORD } from "@/store/mutations.type";
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  name: "home",
  mixins: [validationMixin],
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
      if (this.validateForm()) {
        this.$store.dispatch(USER_LOGIN);
      }
    },
    register: function() {
      if (this.validateForm()) {
        this.$store.dispatch(USER_REGISTER);
      }
    },
    getValidationClass: function(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    validateForm: function() {
      this.$v.$touch();

      return this.$v.$invalid;
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(5)
      }
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
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>