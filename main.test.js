const test = require('node:test');
const assert = require('node:assert');
const { convert, sum, diff } = require('./main');

// test('', (t) => {
// 	assert.strictEqual();
// });

test('should convert 1,2,3 to I,II,III', (t) => {
	assert.strictEqual(convert(1), "I");
	assert.strictEqual(convert(2), "II");
	assert.strictEqual(convert(3), "III");
});

test('should convert 5,10 to V,X', (t) => {
	assert.strictEqual(convert(5), "V");
	assert.strictEqual(convert(10), "X");
});

test('should convert 6 to VI', (t) => {
	assert.strictEqual(convert(6), "VI");
});

test('should convert 4 to IV', (t) => {
	assert.strictEqual(convert(4), "IV");
});

test('should sum 10+10+5+1 = XXVI', (t) => {
	assert.strictEqual(sum([10, 10, 5, 1]), "XXVI");
});

test('should sum 39+11 = L', (t) => {
	assert.strictEqual(sum([39, 11]), "L");
});

test('should sum 4+3 = VII', (t) => {
	assert.strictEqual(sum([4, 3]), "VII");
});

test('should difference 500-149 = CCCLI', (t) => {
	assert.strictEqual(diff([500, 149]), "CCCLI");
});

test('should sum differences', (t) => {
	let tmp = [1000, (1000 - 100), (50 - 10), (5 - 1)];
	assert.strictEqual(sum(tmp), "MCMXLIV");
});







