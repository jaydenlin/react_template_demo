var React = require('react/addons');

var hellpTemplate = require("../templates/hello.rt");

var Hello = React.createClass({
  
  render: function() {
    
    return hellpTemplate();
    
  }

});

module.exports = Hello;

