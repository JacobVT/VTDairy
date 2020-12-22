<template>
  <div id="app">
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
            <h1 class="dairy-script text-center">
              Welcome!
            </h1>
          </v-col>
          <v-col>
            <v-stepper
              v-model="step"
              style="background: rgb(255, 254, 241); box-shadow: none;"
            >
              <v-stepper-items>
                <v-stepper-content
                  step="1"
                  class="pt-0"
                >
                  <v-card
                    flat
                    color="rgb(255, 254, 241)"
                  >
                    <v-row
                      justify="center"
                      align="center"
                    >
                      <v-col>
                        <h3 class="dairy-paragraph text-center">
                          Choose a registration method:
                        </h3>
                      </v-col>
                    </v-row>
                    <v-row
                      justify="center"
                      align="center"
                    >
                      <v-col
                        cols="10"
                        sm="5"
                        md="4"
                      >
                        <v-btn
                          block
                          color="secondary"
                          height="48px"
                          outlined
                          @click="step=2"
                        >
                          <v-icon left>
                            mdi-email
                          </v-icon>
                          Sign up with Email
                        </v-btn>
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
                          @click="signInWithGoogle()"
                        >
                          <v-avatar> <img src="../assets/btn_google.png"></v-avatar>
                          Sign up with Google
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
                          Sign Up with Facebook
                        </v-btn>
                      </v-col>
                    </v-row> -->
                  </v-card>
                </v-stepper-content>

                <v-stepper-content
                  step="2"
                  class="pt-0"
                >
                  <v-card
                    flat
                    color="rgb(255, 254, 241)"
                  >
                    <v-row
                      justify="center"
                      align="center"
                    >
                      <v-col cols="12">
                        <h3
                          v-if="errorMsgs === ''"
                          class="dairy-paragraph text-center"
                        >
                          Please fill out the fields below to join:
                        </h3>
                        <h3
                          v-else
                          class="dairy-paragraph text-center red--text"
                        >
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
                          v-model.trim="fullname"
                          label="Full Name"
                          color="blue"
                          counter="24"
                          :rules="nameRules"
                          type="text"
                          required
                          @change="autogenUsername()"
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
                          v-model.trim="username"
                          label="Username"
                          color="blue"
                          counter="20"
                          :rules="usernameRules"
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
                          v-model.trim="email"
                          label="E-mail"
                          color="blue"
                          counter="32"
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
                          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="passwordRules"
                          :type="show ? 'text' : 'password'"
                          name="input-10-1"
                          label="Password"
                          required
                          @click:append="show = !show"
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
                          v-model.trim="password2"
                          color="blue"
                          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="password2Rules"
                          :type="show ? 'text' : 'password'"
                          name="input-10-1"
                          label="Re-enter Password"
                          required
                          @click:append="show = !show"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col
                        class="pa-0 mt-2"
                        cols="10"
                        sm="5"
                        md="4"
                      >
                        <v-btn
                          block
                          color="primary"
                          @click="register()"
                        >
                          Register
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col
                        class="pa-0 mt-2"
                        cols="10"
                        sm="5"
                        md="4"
                      >
                        <!-- <v-col
                            cols="12"
                            md="5"
                          >
                            <v-btn
                              color="secondary"
                              outlined
                              :block="$vuetify.breakpoint.smAndDown"
                            >
                              Sign in options
                            </v-btn>
                          </v-col> -->
                        <v-btn
                          text
                          color="blue"
                          class="pa-0"
                          to="/login"
                        >
                          Already have an account?
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Register',

  data: () => {
    return {
      errorMsgs: '',
      step: 2,
      show: false,
      valid: false,
      fullname: '',
      nameRules: [
        (v) => {
          return !!v || 'Name is required';
        },
        (v) => {
          return v.length <= 20 || 'Name must be less than 20 characters';
        },
      ],
      username: '',
      usernameRules: [
        (v) => {
          return !!v || 'Username is required';
        },
        (v) => {
          return v.length <= 20 || 'Username must be less than 20 characters';
        },
      ],
      email: '',
      emailRules: [
        (v) => {
          return !!v || 'E-mail is required';
        },
        (v) => {
          return v.length <= 32 || 'E-mail must be less than 32 characters';
        },
        (v) => {
          return /.+@.+/.test(v) || 'E-mail must be valid';
        },
      ],
      password: '',
      passwordRules: [
        (v) => {
          return !!v || 'Password is required';
        },
        (v) => {
          return v.length >= 7 || 'Password must be more than 6 characters';
        },
        (v) => {
          return v.length <= 32 || 'Password must be less than 32 characters';
        },
      ],
      password2: '',
    };
  },

  computed: {
    password2Rules() {
      return [(!!this.password && this.password2 === this.password) || 'Your passwords do not match'];
    },

  },

  methods: {
    autogenUsername() {
      if (!this.username) {
        this.username = this.fullname.replaceAll(' ', '').toLowerCase();
      }
    },
    async register() {
      this.$refs.form.validate();
      if (!this.valid) {
        return;
      }
      const res = await this.$store.dispatch('register', {
        email: this.email,
        password: this.password,
        fullname: this.fullname,
        username: this.username,
      });
      if (res) {
        switch (res) {
          case 'auth/invalid-email': {
            this.errorMsgs = 'E-mail address is invalid';
            break;
          }
          case 'auth/email-already-in-use': {
            this.errorMsgs = 'This e-mail is already in use';
            break;
          }
          default: {
            this.errorMsgs = '';
          }
        }
      }
    },
  },

};
</script>

<style>
</style>
