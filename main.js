let dct = {
	1: "I",
	2: "II",
	3: "III",
	4: "IV",
	5: "V",
	6: "VI",
	7: "VII",
	9: "IX",
	10: "X",
	40: "XL",
	50: "L",
	100: "C",
	500: "D",
	900: "CM",
	1000: "M"
}

function convert(n) {
	res = "";

	Object.keys(dct).reverse().forEach(key => {
		while(n>=key) {
			res += dct[key];
			n -= key;
		}	
	})

	return res
}

function sum(addends) {
	let res = 0;
	for (let i = 0; i < addends.length; i++) {
		res += addends[i];
	}
	return convert(res)

}

function diff(addends) {
	let res = addends[0];
	for (let i = 1; i < addends.length; i++) {
		res -= addends[i];
	}
	return convert(res)
}

module.exports = {
	convert,
	sum,
	diff
}