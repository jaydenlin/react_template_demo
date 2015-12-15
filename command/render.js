var path = require('path');
var React = require('react/addons');
require('node-jsx').install();
require('../plugins/node-react-templates').install();

//var compPath="../src/templates/hello.rt";
var compPath="../src/components/hello.jsx";

var component = require(compPath);
//console.log(component());
var contents = React.renderToString(React.createElement(component));

console.log(contents);
