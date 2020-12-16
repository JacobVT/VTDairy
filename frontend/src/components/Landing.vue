<template v-on:scroll="handleScroll">
  <v-container class="fade-in">
    <!-- Title -->
    <v-row
      justify="center"
      align="center"
      class="pb-5 screen-height"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h5 class="dairy-script">
          Welcome to the
        </h5>
        <h6 class="dairy-title">
          Van Tol Dairy
        </h6>
      </v-col>
    </v-row>
    <div
      v-if="!scrolledOnce"
      style="min-height: 100vh"
    ></div>

    <!-- Transition -->
    <div>
      <v-row
        justify="center"
        align="end"
      >
        <v-expand-x-transition>
          <v-divider
            v-if="scrolledOnce && $vuetify.breakpoint.mdAndUp"
            class="divider"
          ></v-divider>
        </v-expand-x-transition>
      </v-row>
      <v-row
        justify="center"
        class="mt-5 mb-5"
      >
        <h5
          v-if="scrolledOnce"
          class="fade-in dairy-script"
        >
          Who are we?
        </h5>
      </v-row>
      <v-row
        justify="center"
        class="mt-5 ml-5 mr-5"
      >
        <div
          v-if="scrolledOnce"
          class="slow-fade-in text-xs-left dairy-paragraph"
          style="max-width: 1020px;"
        >
          Glad you asked!
          On this site, you can learn the answer to this question and much more.
          We are dedicated to sharing
          knowledge and enjoyment with everyone who visits. <br /><br />
          To continue, just <span class="text-decoration-underline">click an option below</span>!
        </div>
      </v-row>
    </div>

    <!-- Slide -->
    <v-row
      v-if="scrolledOnce"
      class="fade-in"
      justify="center"
      align="start"
    >
      <v-slide-group
        v-model="currentSlide"
        class="fade-in"
      >
        <v-slide-item
          v-for="(slide, i) in slides"
          :key="i"
          v-slot="{ active, toggle }"
        >
          <v-card
            class="ma-5"
            height="400"
            width="300"
            @mouseenter="toggle"
            @mouseleave="toggle"
          >
            <a>
              <v-img
                class="white--text align-start"
                height="400px"
                :src="require('../assets/' + slide.image)"
                :lazy-src="require('../assets/ph_' + slide.image)"
                @click="$router.push(slide.link)"
              >
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="primary"
                      :size="$vuetify.breakpoint.smAndDown ? 32 : 64"
                    ></v-progress-circular>
                  </v-row>
                </template>

                <v-card-title
                  :class="`card-title-overlay dairy-title white--text ${$vuetify.breakpoint.smAndDown ? 'size-h6' : 'size-h5'}`"
                >
                  {{ slide.title }}
                </v-card-title>
                <v-expand-transition>
                  <v-card-text
                    v-if="active"
                    class="card-title-overlay"
                    style="height: 400px"
                  >
                    {{ slide.text }}</v-card-text>
                </v-expand-transition>
              </v-img>
            </a>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
    <v-fab-transition>
      <v-btn
        v-if="!scrolled"
        fab
        class="thing"
        color="rgba(0, 0, 0, 0.5)"
        fixed
        :large="$vuetify.breakpoint.mdAndUp"
        dark
        bottom
        right
        readonly
      >
        <v-icon>mdi-chevron-double-down</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
export default {
  name: 'Landing',

  data: () => {
    return {
      loaded: false,
      scrolled: false,
      scrolledOnce: false,
      cardVisible: false,
      currentSlide: null,
      slides: [{
        title: 'Read Our Story',
        text: 'Discover the origins of the Van Tol Dairy. Learn about who we are and why we love what we do.',
        image: 'owners.jpg',
        link: '/story',
      },
      {
        title: 'Explore Recipes',
        text: 'Coming Soon',
        image: 'swing.jpg',
        link: '/',
      },
      {
        title: 'Play Games',
        text: 'Coming Soon',
        image: 'jump.jpg',
        link: '/',
      },
      ],

    };
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
    window.scrollTo(0, 0);
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY !== 0;
      this.scrolledOnce = true;
    },
    visibilityChanged(isVisible) {
      this.cardVisible = isVisible;
    },
  },
};
</script>
