var React = require('react/addons');

var helloTemplate = require("../templates/hello.rt");
// var ItemNode = React.createClass({

//   render: function() {
//     return itemTemplate.apply(this);;
//   }

// });

var Hello = React.createClass({
  
  getInitialState: function() {
    return {
      name:"Jayden",
      items:[
        {
          productName:"AAA",
          price:"130"
        },
        {
          productName:"BBB",
          price:"160"

        }
      ] 
    };
  },
  render: function() {
   
    return helloTemplate.apply(this);
    
  }

});

module.exports = Hello;

