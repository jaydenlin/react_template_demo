var React = require('react/addons');
//var isNode=(typeof module !== 'undefined' && module.exports);
// if(isNode){
//   var rt=require("react-templates");
// }else{
//  var hellpTemplate = require("../templates/hello.rt");
//}

// var hellpTemplate = rt.convertTemplateToReact("<h3>Hello World</h3>");

var Hello = React.createClass({
  getInitialState: function() {
    return {
      name:"Jayden",
      link:"jdlin.com"
    };
  },
  render: function() {
    //console.log(hellpTemplate);
    //return hellpTemplate();
    return <div>Hello World</div>
  }

});

module.exports = Hello;

