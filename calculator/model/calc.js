var Backbone = require('backbone');
Backbone.$ = require('jquery');

var calculate = require('../central_tendancy');

module.exports = Backbone.Model.extend({
  defaults : {
    nums: '',
    mean: '',
    median: '',
    mode: ''
  },
  findAnswer: function(num){
    var answers = calculate(num);
    this.set('mean', answers[0]);
    this.set('median', answers[1]);
    this.set('mode', answers[2]);
  }
})