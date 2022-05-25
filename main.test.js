const test = require('node:test');
const assert = require('node:assert');
const {convert} = require('./main');

test('should convert 1,2,3 to I,II,III', (t) => {
	assert.strictEqual(convert(1), "I");
	assert.strictEqual(convert(2), "II");
	assert.strictEqual(convert(3), "III");
});

