<template>
  <div id="manage">
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-container>
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
          >
            <h1 class="dairy-paragraph text-center">
              Profile Settings
            </h1>
          </v-col>
          <v-col>
            <v-row
              justify="center"
              align="center"
            >
              <v-col cols="12">
                <h3
                  v-if="errorMsgs !== ''"
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
            <v-row justify="center">
              <v-col
                class="pa-0 mt-2"
                cols="10"
                sm="5"
                md="4"
              >
                <v-btn
                  block
                  color="success"
                  @click="updateProfile()"
                >
                  Update Settings
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
                <v-btn
                  block
                  color="error"
                  @click="deleteProfile()"
                >
                  Delete Account
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Register',

  data: () => {
    return {
      errorMsgs: '',
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
    };
  },

  computed: {
    ...mapState(['userProfile']),
  },

  created() {
    this.fullname = this.userProfile.fullname || '';
    this.username = this.userProfile.username || '';
  },

  methods: {
    async deleteProfile() {
      if (confirm('Are you sure?')) {
        await this.$store.dispatch('deleteProfile', {});
      }
    },
    async updateProfile() {
      this.$refs.form.validate();
      if (!this.valid) {
        return;
      }
      const res = await this.$store.dispatch('updateProfile', {
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
