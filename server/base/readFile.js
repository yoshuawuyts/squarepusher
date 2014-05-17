/**
 * Module dependencies
 */

var path = require('path');
var fs = require('fs');

var filePath = path.join(__dirname + '../../../data/' + 'description.md');

/**
 * Read file from disk
 */

module.exports = fs.readFileSync(filePath, 'utf-8');