import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#a43229',
				grass: '#BFF0A5',
				accent: '#88A379',
				sky: '#8DF0E1',
				earth: '#BD7F66'
			},
		},
	},
});