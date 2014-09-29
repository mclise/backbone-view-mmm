var Backbone = require('backbone');
$ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  events: {
    'click #sub' : 'calculate'
  }, 

  initialize: function() {
    this.render();
  },

  render: function() {
    var template = require('../template/calctemplate.hbs');
    var data = this.model.attributes;
    this.$el.html(template(data));
    return this;
  },

  calculate: function() {
    var numbers = this.$el.find('numbers').val();
    this.model.set('nums', numbers);
    this.model.findAnswer(numbers);
    this.render();
  }
})