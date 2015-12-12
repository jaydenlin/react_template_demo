var React = require('react/addons');

var hellpTemplate = require("../templates/hello.rt");

var Hello = React.createClass({
  getInitialState: function() {
    return {
      name:"Jayden" 
    };
  },
  render: function() {
    
    return hellpTemplate.apply(this);
    
  }

});

module.exports = Hello;

