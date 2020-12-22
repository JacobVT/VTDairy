<template>
  <div id="login">
    <PasswordReset
      v-if="showPasswordReset"
      @close="togglePasswordReset()"
    ></PasswordReset>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-container>
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
          >
            <h1 class="dairy-important text-center">
              Sign In
            </h1>
            <h3 class="dairy-paragraph text-center red--text">
              {{ errorMsgs }}
            </h3>
          </v-col>
          <v-col
            class="pa-0"
            cols="10"
            sm="5"
            md="4"
          >
            <v-text-field
              v-model.trim="email"
              label="Email"
              color="blue"
              :rules="emailRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            class="pa-0"
            cols="10"
            sm="5"
            md="4"
          >
            <v-text-field
              v-model.trim="password"
              color="blue"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="showPassword ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              required
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            class="pa-0"
            cols="10"
            sm="5"
            md="4"
          >
            <v-row justify="end">
              <v-col>
                <v-btn
                  block
                  color="primary"
                  @click="login()"
                >
                  Sign In
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- <v-row justify="center">
          <v-col
            cols="10"
            sm="5"
            md="4"
            class="text-center"
          >
            <v-btn
              block
              color="white"
              height="48px"
            >
              <v-avatar> <img src="../assets/btn_google.png"></v-avatar>
              Sign In with Google
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            cols="10"
            sm="5"
            md="4"
          >
            <v-btn
              block
              dark
              color="blue"
              height="48px"
            >
              <v-avatar class="mr-1">
                <v-img
                  src="../assets/f_logo_RGB-White_58.png"
                  max-height="32"
                  max-width="32"
                ></v-img>
              </v-avatar>
              Sign In with Facebook
            </v-btn>
          </v-col>
        </v-row> -->
        <v-row justify="center">
          <v-col
            cols="10"
            sm="5"
            md="4"
          >
            <v-row
              justify="center"
              align="center"
              no-gutters
            >
              <span> Don't have an account? </span>
              <v-btn
                text
                :block="$vuetify.breakpoint.smAndDown"
                color="blue"
                to="/register"
              >
                Join Now
              </v-btn>
            </v-row>
            <v-row justify="center">
              <v-btn
                text
                color="blue"
                class="pa-0"
                @click="togglePasswordReset()"
              >
                Forgot Password?
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import PasswordReset from '@/components/PasswordReset';

export default {
  name: 'Login',

  components: {
    PasswordReset,
  },

  data: () => {
    return {
      showPassword: false,
      showPasswordReset: false,
      valid: false,
      errorMsgs: '',
      email: '',
      emailRules: [
        (v) => {
          return !!v || 'Email is required';
        },
      ],
      password: '',
      passwordRules: [
        (v) => {
          return !!v || 'Password is required';
        },
      ],
    };
  },

  methods: {
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },
    async login() {
      this.$refs.form.validate();
      if (!this.valid) {
        return;
      }
      const res = await this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      });
      if (res) {
        this.errorMsgs = 'The email or password is invalid';
      }
    },
  },

};
</script>

<style>

</style>
