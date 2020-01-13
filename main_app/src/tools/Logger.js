function perf(msg) {
	
	if(window) {
		if(window.performance) {
			if(!window.lpstart) {
				window.lpstart = window.performance.now();
			} else {
				var end1 = window.performance.now();
				var time = end1-window.lpstart;
				console.log('perf time '+(time)+(msg?' ___('+msg+')':''));
				window.lpstart = window.performance.now();
			}
		}
	}
}


exports.perf = perf;

