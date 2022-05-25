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
	40: "XL",
	50: "L",
	100: "C",
	500: "D",
	900: "CM",
	1000: "M"
}

function convert(n) {
	res = "";
	while(n>=1000) {
		res += dct[1000];
		n -= 1000;
	}	
	while(n>=900) {
		res += dct[900];
		n -= 900;
	}
	while(n>=500) {
		res += dct[500];
		n -= 500;
	}
	while(n>=100) {
		res += dct[100];
		n -= 100;
	}	
	while(n>=50) {
		res += dct[50];
		n -= 50;
	}	
	while(n>=40) {
		res += dct[40];
		n -= 40;
	}	
	while(n>= 10) {
		res += dct[10];
		n -= 10;
	}
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