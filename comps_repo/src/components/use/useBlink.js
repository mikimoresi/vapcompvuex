
import { computed,reactive,onMounted } from '@vue/composition-api';

export default function useBlink(store,props) {
	console.log(props);
	console.log(this);
	var store_state =  store.state;

	//const blink = computed(() => store_state.blink);
	const blink = computed(
		function() {
			return  store_state.blink;
		}
	);
	
	var blink_state = reactive({
		blink :blink
	});

	function testFunc () {
		console.log('testFunc');
	}

	

	return {blink_state,testFunc};

}


