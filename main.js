// class Roman {

// }

function convert(n) {
	if (n == 1) {
		return "I"
	}
	if (n == 2) {
		return "II"
	}
	if (n == 3) {
		return "III"
	}
	if (n == 5) {
		return "V"
	}
	if (n == 10) {
		return "X"
	}
	if (n == 6) {
		return "VI"
	}
	if (n == 4) {
		return "IV"
	}
}

function sum(addends) {
	let res = "";
	for (let i = 0; i < addends.length; i++) {
		res += convert(addends[i]);
	}

	return res
}

module.exports = {
	convert,
	sum
}