/**
 * Module dependencies
 */

var React = require('react');

/**
 * Define React class.
 */

module.exports = React.createClass({
  displayName: 'Index',
  render: function() {
    return React.DOM.html({className: 'no-js'}, 
      React.DOM.head(null, 
        React.DOM.meta({charSet: 'utf-8'}),
        React.DOM.meta({httpEquiv: 'X-UA-Compatible', content: 'IE=edge'}),
        React.DOM.title(null, 'squarePusher'),
        React.DOM.meta({name: 'viewport', content: 'width=device-width, initial-scale=1'}),
        React.DOM.link({rel: 'stylesheet', href: 'css/styles.css'})
      )
    )
  }
});