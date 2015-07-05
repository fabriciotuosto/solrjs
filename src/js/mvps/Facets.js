var View     = require('./View.js');
var template = require('./facets.html');

var view    = View('facets', template);
view.toogle = function (name) {

};

function extract_values(data) {
  return {name: data[0], count: data[1], parent: f};
}

var Facets = function () {
  return {
    toggle     : function (facet_id) {
      view.toggle(facet_id);
      return {};
    },
    showResults: function (results) {
      var facets = _.map(results.facet_counts.facet_fields, function (data) {
        var values = _.map(data, extract_values);
        return {
          fname : data,
          values: values
        };
      });
      view.render({facets: facets});
    }
  };
};

module.exports = Facets;