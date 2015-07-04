var View = require('./View.js');

var view = View('results','<div id="results">Results</div>');

function Results(){
	view.render();

	return {
		showResults : function(data){
			view.render(data).fadeIn();
		}
	};
}

module.exports = Results;