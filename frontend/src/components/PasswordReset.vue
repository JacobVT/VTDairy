<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="400"
  >
    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn
            icon
            @click="$emit('close')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-title>
        Reset Password
      </v-card-title>
      <v-card-text v-if="!success">
        <v-row>
          <v-col>
            Enter your email to reset your password
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              v-model.trim="email"
              label="Email"
              color="blue"
              :error-messages="errorMsgs"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-else>
        Success! Check your email for a reset link.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          :disabled="success"
          @click="resetPassword()"
        >
          Reset
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { auth } from '@/firebase';

export default {
  name: 'PasswordReset',
  data() {
    return {
      dialog: 'true',
      email: '',
      success: false,
      errorMsgs: [],
    };
  },
  methods: {
    async resetPassword() {
      this.errorMsg = '';
      try {
        await auth.sendPasswordResetEmail(this.email);
        this.success = true;
      } catch (err) {
        this.errorMsgs = [err.message];
      }
    },
  },
};
</script>
