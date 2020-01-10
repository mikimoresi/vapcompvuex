
import { computed,reactive } from '@vue/composition-api';

export default function useBlink(store) {
	
	
	var store_state =  store.state;

	const blink = computed(() => store_state.blink);
	
	var blink_state = reactive({
		blink :blink
	});

	function testFunc () {
		console.log('testFunc');
	}

	return {blink_state,testFunc};

}


