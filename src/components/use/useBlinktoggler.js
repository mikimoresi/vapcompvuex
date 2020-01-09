
import { computed,reactive } from '@vue/composition-api';

export default function useBlinktoggler(store) {
	
	var store = store;
	var store_state =  store.state;

	const run_blinker = computed(() => store_state.run_blinker);

	function toggleBlinker () {
		store.dispatch('toggleBlinker');
	}
	
	var blinktoggler_state = reactive({
		run_blinker :run_blinker
	});

	return { blinktoggler_state, toggleBlinker};

}


