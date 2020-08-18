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
.f-dancing {
  font-family: 'Dancing Script', cursive;
}
.f-martel {
  font-family: 'Martel', serif;
}
.f-roboto-slab {
  font-family: 'Roboto Slab', serif;
}
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
.h6-size {
  font-size: 8rem;
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