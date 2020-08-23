<template>
  <v-app id="dairy">
    <v-app-bar
      app
      color="primary"
      elevate-on-scroll
    >
      <v-btn
        icon
        class="btn-fix"
        dark
        to="/"
        active-class
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-toolbar-title class="dairy-title hidden-sm-and-down white--text">
        Van Tol Dairy
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div
        v-for="item in appBarLinks"
        :key="item.title"
      >
        <v-tooltip
          v-if="item.inDev"
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="white"
              :text="$vuetify.breakpoint.mdAndUp"
              :icon="$vuetify.breakpoint.smAndDown"
              v-bind="attrs"
              :to="item.link"
              v-on="on"
            >
              <span v-if="$vuetify.breakpoint.mdAndUp"> {{ item.title }} </span>
              <v-icon v-else>
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </template>
          <span>Still in development!</span>
        </v-tooltip>
        <v-btn
          v-else
          color="white"
          :text="$vuetify.breakpoint.mdAndUp"
          :icon="$vuetify.breakpoint.smAndDown"
          :to="item.link"
        >
          <span v-if="$vuetify.breakpoint.mdAndUp"> {{ item.title }} </span>
          <v-icon v-else>
            {{ item.icon }}
          </v-icon>
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

  data: () => {
    return {
      appBarLinks: [
        {
          title: 'Story',
          link: '/story',
          icon: 'mdi-book-open-variant',
          inDev: false,
        },
        {
          title: 'Recipes',
          link: '/',
          icon: 'mdi-silverware',
          inDev: true,
        },
        {
          title: 'Games',
          link: '/',
          icon: 'mdi-google-controller',
          inDev: true,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
  @import './styles/custom_fonts.scss';
</style>

<style>
#dairy {
  background: rgb(255, 254, 241)
}
.dairy-title {
  color: skyblue;
}
.v-btn:before {
    background-color: unset !important;
}
.divider {
  border-width: 2px;
}
.card-title-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
.paragraph {
  max-width: 1000px;
}
.screen-height {
  height: 87vh;
}

/* Text */
.primary--text {
  color: #a43229;
}
.h1-size {
  font-size: 1.5rem;
}
.h4-size {
  font-size: 4rem;
}
.h5-size {
  font-size: 5rem;
}

/* Fade Animation */
.fade-in {
animation: fadeIn ease 2s;
-webkit-animation: fadeIn ease 2s;
-moz-animation: fadeIn ease 2s;
-o-animation: fadeIn ease 2s;
-ms-animation: fadeIn ease 2s;
}
.slow-fade-in {
animation: fadeIn ease 5s;
-webkit-animation: fadeIn ease 5s;
-moz-animation: fadeIn ease 5s;
-o-animation: fadeIn ease 5s;
-ms-animation: fadeIn ease 5s;
}
@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-moz-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-o-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-ms-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}
</style>
