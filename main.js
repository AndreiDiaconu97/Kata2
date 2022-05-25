// class Roman {

// }

let dct = {
	0: "",
	1: "I",
	2: "II",
	3: "III",
	4: "IV",
	5: "V",
	6: "VI",
	7: "VII",
	9: "IX",
	10: "X",
	50: "L"
}

function convert(n) {
	res = "";
	while(n!= 0 && n%50 == 0) {
		res += dct[50];
		n -= 50;
	}	
	while(n>= 10) {
		res += dct[10];
		n -= 10;
	}
	console.log(res, n);
	res += dct[n];

	return res
}

function sum(addends) {
	let res = 0;
	for (let i = 0; i < addends.length; i++) {
		res += addends[i];
	}
	return convert(res)

}

module.exports = {
	convert,
	sum
}