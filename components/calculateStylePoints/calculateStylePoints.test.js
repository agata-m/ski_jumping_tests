const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {

	it('should render correct sum if notes are all different', () => {
		const actual = calculateStylePoints([19.5, 19.0, 18.5, 18.0, 17.5]);
		const expected = 55.5;
		assert.equal(actual, expected);
	});

	it('should render correct sum if some notes are the same', () => {
		const actual = calculateStylePoints([ 19.0, 19.5, 19.0, 19.0, 19.0]);
		const expected = 57;
		assert.equal(actual, expected);
	});

});