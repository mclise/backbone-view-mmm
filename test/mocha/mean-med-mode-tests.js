var chai = require('chai');
var Backbone = require('backbone');
var expect = chai.expect;

var Calc = require('../../calculator/model/calc');

describe('Mean, Median, Mode', function(){
  beforeEach(function(){
    this.calc = new Calc({});
    var testNums = '2 5 17 3 6 2 2';
    this.calc.findAnswer(testNums);
  })
  it('should calculate and assign mean to model', function(){
    expect(this.calc.get('mean')).to.equal(37 / 7);
  })
  it('should calculate and assign median to model', function(){
    expect(this.calc.get('median')).to.equal(3);
  })
  it('should calculate and assign mode to model', function(){
    expect(this.calc.get('mode')).to.equal(2);
  })
})