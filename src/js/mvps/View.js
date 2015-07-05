var Mustache = require('mustache');
var $        = require('jquery');
var _        = require('lodash');

var View = function (div, template, parentDiv) {
  var parent = _.isEmpty(parentDiv) ? 'body' : '#' + parentDiv;
  return {
    getDiv        : function () {
      return $('#' + div);
    },
    getContainer  : function () {
      return $(parent);
    },
    render        : function (params) {
      return this.getDiv().replaceWith(Mustache.to_html(template, params));
    },
    renderTemplate: function (params, template) {
      return Mustache.to_html(template, params)
    }
  };
};

module.exports = View;