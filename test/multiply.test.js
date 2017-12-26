var multiply = require('../src/multiply.js');
var expect = require('chai').expect;

describe('乘法函数的测试', function() {
	it('2 乘 2 应该等于 4', function() {
		expect(multiply(2, 2)).to.be.equal(4);
	});
});
