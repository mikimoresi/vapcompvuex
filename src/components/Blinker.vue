<template>
	<div>
		<h2>blinker component made with composition API</h2>
		<h1 v-if="blink_state.blink">BLINK :)</h1>
		<h1 v-else>WAITING BLINK :(</h1>
		<button v-on:click="toggleBlinker()"><span v-if="blinktoggler_state.run_blinker">pause</span><span v-else>start</span></button>
	</div>
	
</template>

<script>

	
	import { useStore } from '@/store';
	
	import useBlink from '@/components/use/useBlink';
	import useBlinktoggler from '@/components/use/useBlinktoggler';

	


	

	export default {
		name: 'blinker',
		setup(props, {root}) {
			//var start = window.performance.now();

			var store = useStore();
			
			const blink_state = useBlink(store);
			const {blinktoggler_state , toggleBlinker} = useBlinktoggler(store);

			
			//var store = useStore();
			//var store_state =  store.state;
			//
			//
			//const blink = computed(() => store_state.blink);
			//const run_blinker = computed(() => store_state.run_blinker);
			//
			//var state = reactive({
			//	blink :blink,
			//	run_blinker:run_blinker
			//});
//
			//function toggleBlinker () {
			//	store.dispatch('toggleBlinker');
			//}
			//var end1 = window.performance.now();
			//window.mapTime = window.mapTime ? window.mapTime+(end1-start):0+(end1-start)
			//console.log('time '+(window.mapTime));
			

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
