<template v-on:scroll="handleScroll">
  <div id="app">
    <v-container
      fluid
      class="fade-in"
    >
      <v-row
        class="mb-5 mt-5"
        justify="space-around"
        align="center"
      >
        <v-col
          cols="12"
          lg="6"
          order="2"
          order-lg="1"
        >
          <v-card
            :class="$vuetify.breakpoint.mdAndDown ? 'picture-frame' : 'picture-frame rotate-1 mr-5 ml-5'"
            elevation="16"
            tile
          >
            <v-img
              src="../assets/brothers.jpg"
              lazy-src="../assets/ph_brothers.jpg"
              style="max-width: 100%; max-height: 100%"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="primary"
                    size="96"
                    width="8"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          lg="6"
          order="1"
          order-lg="2"
        >
          <span class="dairy-title"> Our Story </span> <br />
          <span class="dairy-paragraph">
            One word to describe Van Tol Dairy is <span class="text-decoration-underline">family</span>.
            We are a family owned organic dairy farm in Southwest Washington.
            Our dairy was established in 1976 when Gerrit, who comes from a long line of dairy farmers,
            moved up from Southern California to get established on his own.
            He and his wife, Nellie had four children, Jeff, Carrie, Katie and Gerrit.
            Tragically she died in a car accident and two years later Gerrit married Karen.
            They had two more children Levi and Jacob.
          </span>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="12"
          lg="6"
        >
          <div :class="$vuetify.breakpoint.mdAndDown ? 'dairy-paragraph' : 'dairy-paragraph mr-5 ml-5'">
            All six children live close by and take pride in being raised on a dairy farm.
            Jeff does most of the management of the farm and several of the other kids and grandkids stay connected in various ways.
            There is always plenty of work to be done on the farm:
            milking cows, bucking hay, cleaning pens and taking care of the animals and the land.
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="6"
        >
          <v-card
            :class="$vuetify.breakpoint.mdAndDown ? 'picture-frame' : 'picture-frame rotate-2 mr-5'"
            elevation="16"
            tile
          >
            <v-img
              src="../assets/brownie.jpg"
              lazy-src="../assets/ph_brownie.jpg"
              style="max-width: 100%; max-height: 100%"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="primary"
                    size="96"
                    width="8"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div style="max-height: 800px; background-color: #88A379">
      <v-parallax
        src="../assets/cows.jpg"
        height="800"
      >
        <v-container>
          <v-row justify="center">
            <v-col
              cols="12"
              md="10"
              class="card-title-overlay pa-5"
              dark
            >
              <span class="dairy-script"> Teaming Up With Nature </span> <br />
              <span class="dairy-paragraph">
                Van Tol Dairy was
                <span class="text-decoration-underline">
                  certified organic
                </span>
                in 2005 and we became a part of Organic Valley Coop.
                Gerrit’s observation is,
                <strong>“The cows are healthy if they eat healthy grass.
                  If you don’t have healthy grass, you don’t have healthy soil,
                  and you can’t have healthy soil if you poison it year after year with chemicals”
                </strong>.<br /><br />
                Our family enjoys nature’s theater each day as we witness a vast array of diversity of life.
                It’s not uncommon to see owls, hawks, bald eagles, bats, coyotes, herons, ducks and geese.
                Thankfully we have yet to see a bear or cougar on our property!
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </div>
    <v-container class="mt-5 mb-5">
      <v-row
        class="screen-height"
        justify="center"
        align="center"
      >
        <v-col cols="11">
          <span class="dairy-important">
            Family is of the utmost importance.<br />
            The dairy would not be what it is today without the strong bond we share and the capable hands involved.
          </span> <span class="dairy-script size-h5"> (The End. Thanks for reading!) </span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Story',

  data: () => {
    return {
    };
  },

  created() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.picture-frame {
	padding: 5% !important;
}
.rotate-1 {
	transform: rotate(-2deg);
}
.rotate-2 {
	transform: rotate(2deg);
}
.v-parallax >>> .v-parallax__image-container {
	filter: blur(3px);
  -webkit-filter: blur(3px);
}
.full-width {
	width: 100% !important;
}
</style>
