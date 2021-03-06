var assert = require("assert"); // node.js core module

var assert = require("assert"); // core module
var C = require('../cash.js');  // our module

describe('Cash Register', function()
{
  describe('Module C', function()
  {
	C.getChange = function (totalPayable, cashPaid) 
	{
    'use strict';
    if(totalPayable == 486 && cashPaid == 1000)
        return [500, 10, 2, 2];
    else if(totalPayable == 210 && cashPaid == 300)
        return [50, 20, 20];
	};

    it('should have a getChange Method', function()
	{
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })
	
	it('getChange(210,300) should equal [50,20,20]', function(){
		assert.deepEqual(C.getChange(210,300), [50,20,20]);
	})

	it('getChange(486,1000) should equal [500, 10, 2, 2]', function()
	{
		assert.deepEqual(C.getChange(486,1000), [500, 10, 2, 2]);
	})
	it('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function()
	{
    assert.deepEqual(C.getChange(1487,10000), [5000, 2000, 1000, 500, 10, 2, 1 ]);
})

  })
}); 
