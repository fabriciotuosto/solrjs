var ajax = require('ajax-promise');

var SearchService = function (solr) {
  function search(){
    return ajax.get(solr.getUrl());
  }

  return {
    query      : function (term) {
      solr.query(term);
      return search();
    },
    search     : search,
    addFacet   : function (field, value) {
      solr.query.addFacet(field, value);
      return search();
    },
    removeFacet: function (field, value) {
      solr.removeFacet(field, value);
      return search();
    }
  }
};

module.exports = SearchService;