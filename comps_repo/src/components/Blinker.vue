<template>
	<div>
		<h2>blinker component made with composition API in external dir resolved by webpack alias</h2>
		<h1 v-if="blink_state.blink">BLINK :)</h1>
		<h1 v-else>WAITING BLINK :(</h1>
		<button v-on:click="toggleBlinker()"><span v-if="blinktoggler_state.run_blinker">pause</span><span v-else>start</span></button>
	</div>
	
</template>

<script>
	import Vue from 'vue';
	import VueCompositionApi from "@vue/composition-api";

	Vue.use(VueCompositionApi);
	

	import { useStore } from '@/store';
	
	import useBlink from '@alt_src/src/components/use/useBlink';
	import useBlinktoggler from '@alt_src/src/components/use/useBlinktoggler';
	 

	export default {
		name: 'blinker',
		props: ['test'],
		setup(props, {parent}) {
			//var start = window.performance.now();
			//console.log(parent);
			var store = useStore();

			
			
			const {blink_state, testFunc} = useBlink(store,props);
			const {blinktoggler_state , toggleBlinker} = useBlinktoggler(store,testFunc);


			return {
				blink_state,
				blinktoggler_state,

				toggleBlinker
				
			}

		}
	}

  	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h2 {
		color: grey;
		border-top:1px solid black;
	}

</style>
