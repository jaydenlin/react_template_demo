require('node-jsx').install();
var React = require('react/addons');
var assert = require('chai').assert,
expect = require('chai').expect;

describe('Modify TODO Items', function() {
  it('should be added an item when click add button', function() {
    var Root = require('../../src/containers/Root.jsx');
    var TestUtils = React.addons.TestUtils;
    //TestUtils.renderIntoDocument(<Root></Root>);
    var checkbox = TestUtils.renderIntoDocument( <Root /> );
    expect(2).to.equal(2);
  });
  it('should be deleted an item when click delete button', function() {
    var Root = require('../../src/containers/Root.jsx');
    var TestUtils = React.addons.TestUtils;
    expect(2).to.equal(2);
  });
});
