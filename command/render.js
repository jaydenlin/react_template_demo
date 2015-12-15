var path = require('path');
var React = require('react/addons');
require('node-jsx').install();

var compPath="../src/components/hello.jsx";

var component = require(compPath);
var contents = React.renderToString(React.createElement(component));

console.log(contents);
