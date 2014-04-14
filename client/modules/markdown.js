'use strict';

/**
 * Module dependencies
 */

var marked = require('marked');
var React = require('react');

/**
 * Define view
 *
 * @params {String} markdown
 */

module.exports = React.createClass({
  render: function () {
    return React.DOM.div({
      dangerouslySetInnerHTML: {
        __html: marked(this.props.markdown)
      }
    })
  }
});