/**
 * Module dependencies
 */

var markdownComponent = require('./modules/markdown');
var canvasComponent = require('./modules/canvas');
var tilesComponent = require('./modules/tiles');
var React = require('react');

/**
 * Initialize ENV variables.
 */

var PORT = process.env.port || 1337;
var host = process.env.NODE_ENV == 'production' ? 'mywebsite.com' : 'localhost:' + PORT;

/**
 * Define React class.
 *
 * @props {String} markdown
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
        React.DOM.base({href: 'http://assets.' + host},
          React.DOM.link({rel: 'shortcut icon', href: '/favicon.ico'}),
          React.DOM.link({rel: 'stylesheet', href:'/styles/build.css'})
        )
      ),
      React.DOM.body(null, 
        canvasComponent(),
        markdownComponent({markdown: this.props.markdown}),
        tilesComponent()
      )
    )
  }
});