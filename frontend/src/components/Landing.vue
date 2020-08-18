<template v-on:scroll="handleScroll">
	<v-container>
		<!-- Title -->
		<v-row justify="center" align="center" class="pb-5" style="height: 85vh">
			<v-col class="text-center" cols="12">
				<h5 class="f-dancing h5-size"> Welcome to the</h5>
				<h6 class="f-martel h6-size stroke dairy-title"> Van Tol Dairy </h6>
			</v-col>
		</v-row>
		<div v-if="!scrolledOnce" style="height: 100vh"></div>

		<!-- Transition -->
		<div>
			<v-row justify="center" align="end">
				<v-expand-x-transition>
					<v-divider v-if="scrolledOnce" class="divider"></v-divider>
				</v-expand-x-transition>
			</v-row>
			<v-row justify="center" class="mt-5 mb-5">
				<h5 v-if="scrolledOnce" class="fade-in f-dancing h4-size">
					Who are we?
				</h5>
			</v-row>
			<v-row justify="center" class="mt-5 ml-5">
				<h1 v-if="scrolledOnce" class="slow-fade-in f-roboto-slab h1-size text-xs-left paragraph">
					Glad you asked!
					On this site, you can learn the answer to this question and much more. We are dedicated to sharing
					knowledge and enjoyment with everyone who visits. <br /><br />
					<strong> To continue, just click one of the options below! </strong>
				</h1>
			</v-row>
		</div>

		<!-- Slide -->
		<v-row v-if="scrolledOnce" class="fade-in" justify="center" align="start">
			<v-slide-group v-model="currentSlide" class="fade-in">
				<v-slide-item v-for="(slide, i) in slides" :key="i" v-slot:default="{ active, toggle }">
					<v-card class="ma-5" height="400" width="300" @mouseenter="toggle" @mouseleave="toggle">
						<a>
							<v-img class="white--text align-start" height="400px" :src="require('../assets/' + slide.image)" @click="$router.push(slide.link)">
								<v-card-title class="card-title-overlay f-martel">{{slide.title}}</v-card-title>
								<v-expand-transition>
									<v-card-text v-if="active" class="card-title-overlay" style="height: 400px">
										{{slide.text}}</v-card-text>
								</v-expand-transition>
							</v-img>
						</a>
					</v-card>
				</v-slide-item>
			</v-slide-group>
		</v-row>
		<v-fab-transition>
			<v-btn v-if="!scrolled" fab class="thing" color="rgba(0, 0, 0, 0.5)" fixed large dark bottom right readonly>
				<v-icon>mdi-chevron-double-down</v-icon>
			</v-btn>
		</v-fab-transition>
	</v-container>
</template>

<script>
	export default {
		name: 'Landing',

		data: () => ({
			loaded: false,
			scrolled: false,
			scrolledOnce: false,
			cardVisible: false,
			currentSlide: null,
			slides: [{
					title: "Read Our Story",
					text: "Discover the origins of the Van Tol Dairy. Learn about who we are and why we love what we do.",
					image: "owners.jpg",
					link: "/story",
				},
				{
					title: "Explore Recipes",
					text: "Coming Soon",
					image: "swing.jpg",
					link: "/",
				},
				{
					title: "Play Games",
					text: "Coming Soon",
					image: "jump.jpg",
					link: "/"
				},
			],

		}),

		created() {
			window.addEventListener('scroll', this.handleScroll);
			window.scrollTo(0,0);
		},

		methods: {
			handleScroll() {
				this.scrolled = window.scrollY != 0;
				this.scrolledOnce = true;
			},
			visibilityChanged(isVisible) {
				this.cardVisible = isVisible;
			}
		},

		destroyed() {
			window.removeEventListener('scroll', this.handleScroll);
		},
	};
</script>