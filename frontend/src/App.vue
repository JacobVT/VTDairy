<template>
  <v-app id="dairy">
    <v-app-bar
      app
      color="primary"
      hide-on-scroll
      :prominent="$vuetify.breakpoint.lgAndUp"
      :dense="$vuetify.breakpoint.lgAndUp"
    >
      <v-row
        class="ml-4"
        style="height: 100% !important; width: 64px; flex-grow: 0 !important;"
        align="center"
      >
        <v-btn
          to="/"
          large
          icon
          dark
        >
          <v-icon
            large
          >
            mdi-barn
          </v-icon>
        </v-btn>
      </v-row>
      <v-spacer></v-spacer>

      <!------ APP BAR (DESKTOP) ------>
      <v-toolbar-items v-if="$vuetify.breakpoint.lgAndUp">
        <!-- Sections -->
        <v-tooltip
          v-for="section in sections"
          :key="section.id"
          :disabled="!section.inDev"
          bottom
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
              <IconWithText
                :icon="section.icon"
                :text="section.name"
              >
              </IconWithText>
            </v-btn>
          </template>
          <span>In Development</span>
        </v-tooltip>
        <v-divider
          dark
          vertical
        ></v-divider>
        <!-- Account -->
        <v-btn
          v-if="!userIsLoggedIn"
          to="/login"
          text
          dark
          style="width: 128px; height: 100%;"
        >
          <IconWithText
            icon="mdi-account-cowboy-hat"
            text="Sign In"
          >
          </IconWithText>
        </v-btn>
        <v-row
          v-else
          class="pl-6 pr-2"
          align="center"
        >
          <v-menu
            offset-y
          >
            <template #activator="{ on, attrs }">
              <v-btn
                outlined
                large
                fab
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-avatar>
                  {{ userInitials }}
                </v-avatar>
              </v-btn>
            </template>
            <v-list two-line>
              <v-list-item>
                <v-list-item-avatar>
                  {{ userInitials }}
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ userProfile.username }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <ProfileSettings></ProfileSettings>
          </v-menu>
        </v-row>
      </v-toolbar-items>

      <!------ APP BAR (MOBILE) ------>
      <v-app-bar-nav-icon
        v-else
        dark
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <!------ NAV DRAWER (MOBILE) ------>
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
      <!-- Account -->
      <v-list-item
        v-if="!userIsLoggedIn"
        style="height: 56px"
      >
        <v-list-item-action>
          <v-btn
            block
            outlined
            to="/login"
          >
            Sign in
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-menu
        v-else
        offset-x
        left
      >
        <template #activator="{ on, attrs }">
          <v-list-item
            style="height: 56px"
            link
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-avatar class="mr-2">
              <v-avatar size="28">
                {{ userInitials }}
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-title> {{ userProfile.username }} </v-list-item-title>
          </v-list-item>
        </template>
        <ProfileSettings></ProfileSettings>
      </v-menu>
      <v-divider></v-divider>
      <!-- Sections -->
      <v-list dense>
        <v-tooltip
          v-for="section in sections"
          :key="section.id"
          left
          :disabled="!section.inDev"
        >
          <template #activator="{ on, attrs }">
            <v-list-item
              :to="section.inDev ? '' : section.id"
              link
              v-bind="attrs"
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

import { mapState } from 'vuex';
import IconWithText from '@/components/IconWithText';
import ProfileSettings from '@/components/ProfileSettings';
import { sectionsCollection } from './firebase';

export default {
  name: 'App',

  components: {
    IconWithText,
    ProfileSettings,
  },

  data: () => {
    return {
      drawer: false,
      sections: [],
    };
  },

  computed: {
    ...mapState(['userProfile']),
    userIsLoggedIn() {
      return Object.keys(this.userProfile).length > 1;
    },
    userInitials() {
      let initials = '';
      if (this.userIsLoggedIn) {
        initials = this.userProfile.fullname.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
      }
      return initials;
    },
  },

  firestore: {
    sections: sectionsCollection.orderBy('order', 'asc'),
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
