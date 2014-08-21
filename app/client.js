var Backbone = require('backbone');
var Calc = require('../calculator/model/calc');
var CalcView = require('../calculator/view/calcview');

var calc = new Calc({});
var calcView = new CalcView({model: calc});