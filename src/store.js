import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function createStore(req) {
	return new Vuex.Store({
		
		state: {
			running_on_host:false,
			blink: false,
		},

		mutations: {
			SET_BLINK: function(state,bool) {
				state.blink = bool;		
			},
		},

		actions: {
			fetchInitialState: async function(context,data) {
				var _this = this;
				setInterval( function() {
					context.commit('SET_BLINK',!context.state.blink);
				},1000);
			},
		},
	});
}

export const store = createStore()
export const useStore = () => store