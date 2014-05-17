/*eslint no-unused-expressions: 0*/
'use strict';

/**
 * Module dependencies
 */

var should = require('should');
var Grid = require('../../client/modules/grid/grid');
var stubGrid = require('../../data/grid1.json');
var stubData = require('../../data/data1.json');
var stubAttr1 = require('./attr1.json');
var stubAttr2 = require('./attr2.json');
var stubAttr3 = require('./attr3.json');

/**
 * Test
 */

describe('#grid()', function () {
  it('should have an empty \'attr\' on create', function (done) {
    var grid = Grid();
    grid.attr.should.be.empty;
    done();
  });

  describe('.initialize()', function () {
    it('should initalize an empty grid of size n', function (done) {
      var grid = Grid();
      grid.initialize({'height': 3, 'width': 3});
      grid.attr.should.eql(stubAttr1);
      done();
    });
  });

  describe('.add()', function () {
    it('should add nodes', function (done) {
      var grid = Grid();
      grid.initialize({'height': 3, 'width': 3});
      grid.add({'height': 1, 'width': 1, 'id': 0});
      grid.attr.should.eql(stubAttr2);

      grid.add({'height': 2, 'width': 2, 'id': 1});
      grid.attr.should.eql(stubAttr3);
      done();
    });

    it('should not add a node if it doesn\'t fit on the row', function (done) {
      var grid = Grid();
      grid.initialize({'height': 3, 'width': 3});
      grid.add({'height': 4, 'width': 1, 'id': 0}).should.be.false;
      grid.add({'height': 1, 'width': 4, 'id': 0}).should.be.false;
      grid.add({'height': 4, 'width': 4, 'id': 0}).should.be.false;
      done();
    });

    it('should not add a node if it overlaps with the previous row', function (done) {
      var grid = Grid();
      grid.initialize({'height': 3, 'width': 3});
      grid.add({'height': 1, 'width': 1, 'id': 0});
      grid.add({'height': 2, 'width': 2, 'id': 1});
      grid.add({'height': 2, 'width': 2, 'id': 2}).should.be.false;
      done();
    });
  });
});