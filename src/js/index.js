var _        = require('lodash');
var $        = require('jquery');
var header   = require('./mvps/Header.js')();
var results  = require('./mvps/Result.js')();
var facets   = require('./mvps/Facets.js')();
var s_facets = require('./mvps/SelectedFacets.js')();

var host   = ' http://www.goodreads.com/book/';
var solrjs = require('./service/solrjs.js')(host);
var search = require('./service/SearchService.js')(solrjs);

var onSearch      = _.flow(header.getParam, search.query);
var onResults     = _.flow(results.showResults, facets.showResults);
var onAddFacet    = _.flow(facets.toggle, s_facets.add, search.search);
var onRemoveFacet = _.flow(facets.toggle, s_facets.remove, search.search);

$('#search').on('submit', function(event){
  onSearch().then(onResults);
});