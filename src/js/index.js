var header    = require('./mvps/Header.js')();
var results   = require('./mvps/Result.js')();
var facets    = require('./mvps/Facets.js')();
var s_facets  = require('./mvps/SelectedFacets.js')();

var host    = 'http://data.twigkit.com/solr-gutenberg/select/?version=2.2&start=0&rows=10&wt=json&json.nl=arrarr&facet=true&facet.limit=10&facet.field=subject&facet.field=language&facet.mincount=1';
var solrjs  = require('./service/solrjs.js')(host);
var search  = require('./service/SearchService.js')(solrjs);