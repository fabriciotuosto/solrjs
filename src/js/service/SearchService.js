var SearchService = function(solr) {
	return {
		query  : function(term){
			solr.query(terms);
			search();
		},
		search : function(){
			var url = solr.getUrl();
			console.log('URL IS', url);
			// HTTP AND EVENTS LOOKING FOR A GOOD EVENT HANDLING MECHANISM
		},
		addFacet : function(field, value){
			solr.query.addFacet(field, value);
			search();
		},
		removeFacet : function(field, value){
			solr.removeFacet(field, value);
			search();
		}
	}
};

module.exports = SearchService;