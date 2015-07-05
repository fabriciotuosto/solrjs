var View     = require('./View.js');
var template = require('./header.html');

var view             = View('header', template);
view.getSearchParams = function () {
  return view.getDiv().find('#q').val();
};

function Header() {
  view.render();

  return {
    getParam: function () {
      return view.getSearchParams() ;
    }
  };
};

module.exports = Header;