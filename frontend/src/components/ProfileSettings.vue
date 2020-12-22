<template>
  <v-list
    dense
  >
    <v-list-item
      link
      to="/manage"
    >
      <v-list-item-icon>
        <v-icon>
          mdi-cog
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title> Manage Account </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item
      link
      @click="logout()"
    >
      <v-list-item-icon>
        <v-icon>
          mdi-logout
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title> Log Out </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'ProfileSettings',

  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
