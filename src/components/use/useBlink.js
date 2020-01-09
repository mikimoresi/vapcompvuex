
import { computed,reactive } from '@vue/composition-api';

export default function useBlink(store) {
	
	
	var store_state =  store.state;

	const blink = computed(() => store_state.blink);
	
	var state = reactive({
		blink :blink
	});

	return state;

}


