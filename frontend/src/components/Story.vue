<template v-on:scroll="handleScroll">
	<div id="app">
		<v-container fluid class="fade-in">
			<v-row justify="center" align="center">
				<v-col cols="6">
					<v-card class="picture-frame rotate-1" elevation="16" tile>
						<v-img src="../assets/brothers.jpg">
						</v-img>
					</v-card>
				</v-col>
				<v-col cols="5">
					<span class="f-martel h6-size stroke dairy-title"> Our Story </span> <br/>
					<span class="f-roboto-slab h1-size">
						One word to describe Van Tol Dairy is <span class="text-decoration-underline">family</span>. We are a family owned organic dairy farm in Southwest Washington. Our dairy was established in 1976 when Gerrit, who comes from a long line of dairy farmers, moved up from Southern California to get established on his own. He and his wife, Nellie had four children, Jeff, Carrie, Katie and Gerrit. Tragically she died in a car accident and two years later Gerrit married Karen. They had two more children Levi and Jacob. 
					</span>
				</v-col>
			</v-row>
			<v-row justify="center" align="center">
				<v-col cols="5">
					<span class="f-roboto-slab h1-size">
						All six children live close by and take pride in being raised on a dairy farm. Jeff does most of the management of the farm and several of the other kids and grandkids stay connected in various ways. There is always plenty of work to be done on the farm: milking cows, bucking hay, cleaning pens and taking care of the animals and the land.
					</span>
				</v-col>
				<v-col cols="6">
					<v-card class="picture-frame rotate-2" elevation="16" tile>
						<v-img src="../assets/brownie.jpg">
						</v-img>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
		<v-parallax src="../assets/cows.jpg" height="800">
			<v-container>
				<v-row justify="center">
					<v-col cols="6" class="card-title-overlay pa-5" dark>
						<span class="f-dancing h5-size"> Teaming Up With Nature </span> <br/>
						<span class="f-roboto-slab h1-size">
							Van Tol Dairy was <span class="text-decoration-underline">certified organic</span> in 2005 and we became a part of Organic Valley Coop. Gerrit’s observation is, <strong>“The cows are healthy if they eat healthy grass. If you don’t have healthy grass, you don’t have healthy soil, and you can’t have healthy soil if you poison it year after year with chemicals”</strong>.<br/><br/>
							Our family enjoys nature’s theater each day as we witness a vast array of diversity of life. It’s not uncommon to see owls, hawks, bald eagles, bats, coyotes, herons, ducks and geese. Thankfully we have yet to see a bear or cougar on our property!
						</span>
					</v-col>
				</v-row>
			</v-container>
		</v-parallax>
		<v-container class="mt-5 mb-5">
			<v-row class="screen-height" justify="center" align="center">
				<v-col cols="9"> 
					<span class="f-roboto-slab h4-size">
						Family is of the utmost importance.<br/> The dairy wouldn’t be what it is today without the strong bond we share and the capable hands involved.
					</span> <span class="f-dancing h1-size"> (The End. Thanks for reading!) </span>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: 'Story',

		created () {
			window.scrollTo(0,0);
		},

		data: () => ({
		}),

		methods: {
			handleScroll() {

			},
		},
	};
</script>
<style scoped>
.picture-frame {
	padding: 48px !important;
	margin: 32px;
}
.rotate-1 {
	transform: rotate(-4deg);
}
.rotate-2 {
	transform: rotate(3deg);
}
.v-parallax >>> .v-parallax__image-container {
	filter: blur(3px);
  -webkit-filter: blur(3px);
}
</style>