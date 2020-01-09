import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function createStore(req) {
	return new Vuex.Store({
		
		state: {
			running_on_host:false,
			blink: false,
			run_blinker:true,
		},

		mutations: {
			SET_BLINK: function(state,bool) {
				state.blink = bool;		
			},
			SET_RUN_BLINKER: function(state,bool) {
				state.run_blinker = bool;		
			},
		},

		actions: {
			fetchInitialState: async function(context,data) {
				var _this = this;
				var blinkinterval = setInterval( function() {
					if(context.state.run_blinker) {
						context.commit('SET_BLINK',!context.state.blink);
					} 
				},1000);
			},
			toggleBlinker: function(context,data) {
				context.commit('SET_RUN_BLINKER',!context.state.run_blinker);
			}
		},
	});
}

export const store = createStore()
export const useStore = () => store