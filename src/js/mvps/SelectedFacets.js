var _              = require('lodash');
var template       = require('./selected_facets.html');
var facet_template = require('./selected_facet.html');
var View           = require('./View.js');

var view      = View('selected-facets', template);
view.addFacet = function (facet) {
  var element = view.renderTemplate(facet_template, facet);
  view.getDiv().find('#selected_facet_list').append(element).slideDown();
};

view.removeFacet = function (facet) {
  view.getDiv().find('[id="selected_' + facet.name + '_' + facet.value + '"]').remove.slideUp();
};

function SelectedFacets() {
  view.render({});
  var facets = [];
  return {
    add   : function (facet) {
      facets.push(facet);
      view.addFacet(facet);
    },
    remove: function (facet) {
      var index = _.indexOf(facets, facet);
      facets.splice(index, 1);
      view.removeFacet(facet);
    }
  }
};

module.exports = SelectedFacets;