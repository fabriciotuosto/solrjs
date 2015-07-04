var _ = require('lodash');

function create(){
	return {
		params : {
			fq: [],
			q: '*:*'	
		}
	}
}

function newFacet(field, value){
	return {field: field, value: value};
}

function stringFQ(fq){
	return '&fq=' + fq.field + ':("'+ fq.value+'")';
}

function SolrJS(host){
	var that = create();

	return {
		reset: function(){
			that = create();
		},
		query : function(terms){
			that.params.q = _.isEmpty(terms) ? '*:*' : terms;
		},
		addFacet : function(field, value){
			that.params.fq.push(newFacet(field,value));
		},
		removeFacet : function(field, value){
			var index = _.indexOf(that.params.fq, newFacet(field, value));
			if(index > 0){
				that.params.fq.splice(index, 1);
			}
		},
		getUrl : function(){
			var url = host + '&q=' + that.params.q;
			var fqs = _.map(that.params.fq, stringFQ).join('');
			return url + fqs;
		}
	};
};


module.exports = SolrJS;