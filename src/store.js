import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



export default function createStore(req) {
	//console.log(req);
	return new Vuex.Store({
		
		state: {
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

				context.commit('SET_BLINK',true);
				
				
			},

			
			
			
		},
		getters: {
			

			
		}
	});
}


import { getCurrentInstance } from '@vue/composition-api'

export function useStore() {
	  
	const vm = getCurrentInstance();
   	
  	return vm.$store

}

