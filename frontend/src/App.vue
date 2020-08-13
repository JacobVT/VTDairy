<template>
  <v-app v-on:scroll="handleScroll" id="dairy">
    <v-app-bar
      app
      color="primary"
      elevate-on-scroll
    >
      <!-- Show home icon and label when user is NOT on main landing page -->
       <!-- <v-btn icon dark>
        <v-icon>mdi-home</v-icon>
      </v-btn> -->
      <v-toolbar-title class="f-martel white--text">Van Tol Dairy</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            v-on="on"
          >Recipes</v-btn>
        </template>
        <span>Still in development!</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            v-on="on"
          >Games</v-btn>
        </template>
        <span>Still in development!</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            v-on="on"
          >Contact us</v-btn>
        </template>
        <span>Still in development!</span>
      </v-tooltip>
    </v-app-bar>

    <v-main>
      <v-container>
        <!-- Title -->
        <v-row justify="center" align="end" class="pb-5" style="height: 55vh">
          <v-col class="text-center" cols="12">
            <h5 class="f-dancing h5-size" > Welcome to the</h5>
            <h6 class="f-martel h6-size stroke" style=" color: skyblue"> Van Tol Dairy </h6>
          </v-col>
        </v-row>

        <!-- Transition -->
        <v-row style="height: 90vh" align="start" justify="center">
          <v-expand-x-transition>
            <v-divider v-if="scrolled" class="divider"></v-divider>
          </v-expand-x-transition>
          <span
            v-if="scrolled"
            class="fade-in"
          >
            Who are we?
          </span>
        </v-row>
        
        <!-- Slide -->
        <v-row id="slides"
        justify="center" align="center"
        v-observe-visibility="visibilityChanged">
          <v-fade-transition>
            <v-slide-group
              v-if="cardVisible"
              v-model="currentSlide"
            >
             <v-slide-item
                v-for="(slide, i) in slides"
                :key="i"
                v-slot:default="{ active, toggle }"
              >
                <v-card
                  class="ma-5"
                  height="400"
                  width="300"
                  @mouseenter="toggle"
                  @mouseleave="toggle"
                >
                  <v-img
                    class="white--text align-start"
                    height="400px"
                    :src="require('./assets/' + slide.image)"
                  >
                    <v-card-title class="card-title-overlay f-martel">{{slide.title}}</v-card-title>
                    <v-expand-transition>
                      <v-card-text v-if="active"  class="card-title-overlay" style="height: 380px">{{slide.text}}</v-card-text>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-fade-transition>
        </v-row>
      </v-container>
    <v-fab-transition>
      <v-btn
        v-if="!scrolled"
        fab
        class="thing"
        color="rgba(0, 0, 0, 0.5)"
        fixed
        large
        dark
        bottom
        right
        href="#slides"
      >
        <v-icon>mdi-chevron-double-down</v-icon>
      </v-btn>
    </v-fab-transition>

      <!-- <div class="hideme text--black">Fade In</div>
      <div style="height: 500px"/> -->
      
      <!-- fade in text + carousel -->
      <!-- add clickable cow, add any logic and screen effects to the landing page -->
    
    </v-main>
  </v-app>
</template>

<script>
//import Recipes from "./components/Recipes.vue";

export default {
  name: 'App',

  components: {
    //Recipes
  },

  computed: {
  },

  data: () => ({
    loaded: false,
    scrolled: false,
    cardVisible: false,
    currentSlide: null,
    slides: [
      {
        title: "Read Our Story",
        text: "Learn about...",
        image: "owners.jpg",
      },
      {
        title: "Explore Recipes",
        text: "Learn about...",
        image: "swing.jpg",
      },
      {
        title: "Play Games",
        text: "Learn about...",
        image: "jump.jpg",
      },
    ],

  }),

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY != 0;
    },
    visibilityChanged(isVisible) {
      this.cardVisible = isVisible;
    }
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
<style scoped>
#dairy {
  background: rgb(255, 254, 241)
}
html {
  scroll-behavior: smooth;
}
.divider {
  border-width: 2px;
}
.f-dancing {
  font-family: 'Dancing Script', cursive;
  /* font-size: 5rem; */
}
.f-martel {
  font-family: 'Martel', serif;
  /* font-size: 6rem; */
}
.stroke {
  -webkit-text-stroke: 2px white;
}
.h5-size {
  font-size: 5rem;
}
.h6-size {
  font-size: 8rem;
}
.card-title-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
.fade-in {
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