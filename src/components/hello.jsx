var React = require('react/addons');

var itemTemplate = require("../templates/item.rt");
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
    
    // var itemNodes=this.state.items.map(function(item){
    //   console.log(item);
    //   return <ItemNode item={item}/>;
    
    // });

    return itemTemplate.apply(this);
    
  }

});

module.exports = Hello;

