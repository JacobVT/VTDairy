<template v-on:scroll="handleScroll">
	<v-container fluid no-gutter>
	<v-row justify="center" align="center" class="pb-5">
		<v-col class="text-center" cols="12">
			<h6 class="f-martel h6-size stroke dairy-title" > Our Story </h6>
		</v-col>
	</v-row>
	<v-row class="mb-5" justify="center">
			<v-divider class="divider"></v-divider>
	</v-row>
	<v-parallax
		src="../assets/brothers.jpg"
		height="700"
	>
		<div class="fill-height bottom-gradient">
			<v-container no-gutters>

			</v-container>
		</div>
	</v-parallax>
	</v-container>
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

</style>