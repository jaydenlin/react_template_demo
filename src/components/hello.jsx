var React = require('react/addons');
//var rt = require('react-templates/src/reactTemplates');
var hellpTemplate = require("../templates/hello.rt");
//var hellpTemplate = rt.convertTemplateToReact("<h3>Hello World</h3>",{modules: 'commonjs', name: 'template'});
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
  }

});

module.exports = Hello;
