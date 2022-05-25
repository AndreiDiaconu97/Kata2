const test = require('node:test');
const assert = require('node:assert');
const {convert} = require('./main');

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
