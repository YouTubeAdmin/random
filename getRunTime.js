// DESCRIPTION : returns time taken (in miliseconds) to run said code

/******** BEGIN CODE ********/

function getRunTime(a, ...b) {
	var e, f;
	console.log('%c----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------', 'color: #fff; font-weight: bold;');
	console.group('Run-Time Test:');
	console.groupCollapsed('Running Code');
	if (typeof a === "function") {
		f = (function(f, a, b) {
			let original = new Date().getTime();
			(a).apply(this, b);
			return (new Date().getTime()) - original;
		})(f, a, b);
	}
	else {
		f = (function(a) {
			let original = new Date().getTime();
			a;
			return (new Date().getTime()) - original;
		})(a);
	}
	console.groupEnd();
	console.groupCollapsed('Data');
	e = ((typeof a == 'function') ? `(${a})(${(function() { var val = []; for (var i in b) { if (i == "0") { if(typeof b[i] == 'string') val = `"${b[i]}"`; else val = b[i] } else { if(typeof b[i] == 'string') val = `
		$ {
			val
		}, "${ b[i] }"
		`; else val = `
		$ {
			val
		}, $ {
			b[i]
		}
		` } } return val; })()})` : a);
	console.info('Item run: %o\nRun-Time (%cms%c): %c%d', e.toString().replace(/\n/g, ''), 'color: #d2c057;', 'color: unset;', 'color: #9980ff;', f);
	console.groupEnd();
	console.groupEnd();
	console.log('%c----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------', 'color: #fff; font-weight: bold;');
	return {
		"item": a,
		"arguments": ((typeof a == 'function') ? b : null),
		"output": ((typeof a == 'function') ? ((a).apply(this, b)) : a),
		"delay": f,
		"UOT": 'milliseconds'
	};
}

/******** END CODE ********/

/*
THE FORMAT :
	checkBuffer( [Object | Array | Function | String | (Anything else that would not throw an error)] , [Arguments (Optional)] )
	
	NOTE :
		If you choose to test a Function;
			[a] The constructor (idealy in parenthesis) of the function
			[b] The Arguments (normally found in parenthesis) of the function
*/
