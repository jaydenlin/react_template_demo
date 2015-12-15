var React = require('react/addons');

var hellpTemplate = require("../templates/hello.rt");

var Hello = React.createClass({
  getInitialState: function() {
    return {
      name:"Jayden",
      link:"jdlin.com"
    };
  },
  render: function() {
    //console.log(hellpTemplate);
    return hellpTemplate();
    //return <div>Hello World</div>
  }

});

module.exports = Hello;

