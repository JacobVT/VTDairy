<template>
  <v-app id="dairy">
    <v-app-bar
      app
      color="primary"
      :prominent="$vuetify.breakpoint.lgAndUp"
      :dense="$vuetify.breakpoint.lgAndUp"
    >
      <v-btn
        :text="$vuetify.breakpoint.lgAndUp"
        :icon="$vuetify.breakpoint.mdAndDown"
        to="/"
        dark
        class="ml-0 pl-0 mr-0 pr-0"
        :style="$vuetify.breakpoint.mdAndDown ? '' : 'width: 108px; height: 100%;'"
      >
        <v-icon v-if="$vuetify.breakpoint.mdAndDown">
          mdi-barn
        </v-icon>
        <v-col
          v-else
          cols="12"
        >
          <v-row
            width="100%"
            style="place-content: center; margin-bottom: 8px;"
          >
            <v-icon
              large
            >
              mdi-barn
            </v-icon>
          </v-row>
          <v-row
            width="100%"
            style="place-content: center"
          >
            <span
              class="body-1"
              style="font-weight: bold;"
            >
              Home
            </span>
          </v-row>
        </v-col>
      </v-btn>

      <v-spacer></v-spacer>

      <v-toolbar-items v-if="$vuetify.breakpoint.lgAndUp">
        <v-tooltip
          v-for="section in sections"
          :key="section.id"
          bottom
          :disabled="!section.inDev"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              :to="section.inDev ? '' : section.id"
              text
              dark
              style="width: 128px; height: 100%;"
              v-on="on"
            >
              <v-col
                cols="12"
              >
                <v-row
                  width="100%"
                  style="place-content: center; margin-bottom: 8px;"
                >
                  <v-icon
                    large
                  >
                    {{ section.icon }}
                  </v-icon>
                </v-row>
                <v-row
                  width="100%"
                  style="place-content: center"
                >
                  <span
                    class="body-1"
                    style="font-weight: bold;"
                  >
                    {{ section.name }}
                  </span>
                </v-row>
              </v-col>
            </v-btn>
          </template>
          <span>In Development</span>
        </v-tooltip>
      </v-toolbar-items>

      <v-app-bar-nav-icon
        v-else
        dark
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndDown"
      v-model="drawer"
      app
      right
      dark
      width="180"
      color="primary"
      overlay-color="primary"
      style="z-index: 6;"
    >
      <v-list-item style="height: 56px">
        <v-list-item-title class="dairy-title nav-title white--text">
          Van Tol Dairy
        </v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-tooltip
          v-for="section in sections"
          :key="section.id"
          left
          :disabled="!section.inDev"
        >
          <template #activator="{ on, attrs }">
            <v-list-item
              v-bind="attrs"
              :to="section.inDev ? '' : section.id"
              link
              v-on="on"
            >
              <v-list-item-icon class="mr-2">
                <v-icon>{{ section.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ section.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <span>In Development</span>
        </v-tooltip>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import { db } from './db';

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
      drawer: false,
      sections: [],
    };
  },

  firestore: {
    sections: db.collection('sections').orderBy('order', 'asc'),
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
.nav-title {
  font-size: 18px !important;
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
