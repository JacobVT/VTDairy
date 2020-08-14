<template>
  <v-app id="dairy">
    <v-app-bar
      app
      color="primary"
      elevate-on-scroll
    >
      <v-btn icon class="btn-fix" dark to="/" active-class>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-toolbar-title class="f-martel white--text">Van Tol Dairy</v-toolbar-title>

      <v-spacer></v-spacer>

      <div 
        v-for="item in appBarLinks" 
        :key="item.title" 
      >
        <v-tooltip 
          bottom
          v-if="item.inDev"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn 
              color="white"
              text
              v-bind="attrs"
              v-on="on"
              :to="item.link"
            > {{item.title}}
            </v-btn>
          </template>
          <span>Still in development!</span>
        </v-tooltip>
        <v-btn 
          color="white"
          text
          v-else
          :to="item.link"
        > {{item.title}}
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    appBarLinks: [
      {
        title: 'Story',
        link: '/story',
        inDev: false,
      },
      {
        title: 'Recipes',
        link: '/',
        inDev: true,
      },
      {
        title: 'Games',
        link: '/',
        inDev: true,
      },
    ],
  }),
};
</script>
<style scoped>
#dairy {
  background: rgb(255, 254, 241)
}
html {
  scroll-behavior: smooth;
}
.v-btn:before {
    background-color: unset !important;
}
</style>