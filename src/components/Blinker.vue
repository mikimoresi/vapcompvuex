<template>
	<div>
		<h2>blinker component made with composition API</h2>
		<h1 v-if="blink">BLINK :)</h1>
		<h1 v-else>WAITING BLINK :(</h1>
	</div>
	
</template>

<script>

	import Vue from 'vue';
	import VueCompositionApi from "@vue/composition-api";

	Vue.use(VueCompositionApi);
	import { useStore } from '@/store';
	
	import { computed } from '@vue/composition-api';
	

	export default {
		name: 'blinker',
		setup(props,{root}) {
			
			var store =  useStore().state;
			
			
			const blink = computed(() => store.blink);
			

			return {
				blink
				
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
