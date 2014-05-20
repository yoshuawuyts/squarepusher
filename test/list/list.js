/*eslint no-unused-expressions: 0*/
'use strict';

/**
 * Module dependencies
 */

var should = require('should');
var List = require('../../client/modules/list/list');

/**
 * Test
 */

describe('#list()', function () {
  describe('when initialized', function () {
    it('should have empty attributes', function (done) {
      var list = List();
      list.attr.should.be.empty;
      done();
    });
  });

  describe('.add()', function () {
    it('should save an array of tiles', function (done) {
      var list = List();
      list.add([{"height": 2, "width": 2}]);
      list.attr.should.eql([{"height": 2, "width": 2}]);
      done();
    });
  });

  describe('.applyId()', function () {
    it('should set an id on each tile', function (done) {
      var list = List();
      list.add([
        {"height": 2, "width": 2}, 
        {"height": 2, "width": 2}
      ]);
      list.applyId();
      list.attr.should.eql([
        {"height": 2, "width": 2, "id": 0}, 
        {"height": 2, "width": 2, "id": 1}
      ]);
      done();
    });
  });

  describe('.applySurface()', function () {
    it('should calc and set the surface on each tile', function (done) {
      var list = List();
      list.add([
        {"height": 2, "width": 2}, 
        {"height": 2, "width": 3}
      ]);
      list.applySurface();
      list.attr.should.eql([
        {"height": 2, "width": 2, "surface": 4}, 
        {"height": 2, "width": 3, "surface": 6}
      ]);
      done();
    });
  });

  describe('.applyRotation()', function () {
    it('should set \'square\' true on square tiles', function (done) {
      var list = List();
      list.add([{"height": 2, "width": 2}]);
      list.applyRotation();
      list.attr.should.eql([{"height": 2, "width": 2, "square": true}]);
      done();
    });

    it('should set \'square\' false on non square tiles', function (done) {
      var list = List();
      list.add([{"height": 2, "width": 3}]);
      list.applyRotation();
      list.attr.should.containDeep([{"height": 2, "width": 3, "square": false}]);
      done();
    });

    it('should calc and set the horizontal & vertical values on each tile', function (done) {
      var list = List();
      list.add([{"height": 2, "width": 3}]);
      list.applyRotation();
      list.attr.should.containDeep([
        {"height": 2, "width": 3, "horizontal": [2, 3], "vertical": [3, 2]}
      ]);
      done();
    });
  });

  describe('.sort()', function () {
    it('should sort arrays from large to small', function (done) {
      var list = List();
      list.add([
        {"height": 2, "width": 2},
        {"height": 3, "width": 3} 
      ]);
      list.sort();
      list.attr.should.eql([
        {"height": 3, "width": 3},
        {"height": 2, "width": 2} 
      ]);
      done();
    });
  });

  describe('.giveTile()', function () {
    it('should throw if no argument is provided', function (done) {
      var list = List();
      list.add([
        {"height": 3, "width": 3, "id": 0}, 
        {"height": 2, "width": 2, "id": 1}
      ]);
      list.giveTile.bind().should.throw('Provide an offset for \'giveTile\'');
      done();
    });


    it('should return a tile if it isn\'t used', function (done) {
      var list = List();
      list.add([
        {"height": 3, "width": 3, "id": 0}, 
        {"height": 2, "width": 2, "id": 1}
      ]);
      list.giveTile(0).should.eql({"height": 3, "width": 3, "id": 0});
      done();
    });

    it('should return false if a tile is used', function (done) {
      var list = List();
      list.add([
        {"height": 3, "width": 3, "id": 0}, 
        {"height": 3, "width": 3, "id": 1}, 
        {"height": 2, "width": 2, "id": 2}
      ]);
      list.giveTile(1).should.eql({"height": 3, "width": 3, "id": 1});
      list.giveTile(2).should.eql({"height": 2, "width": 2, "id": 2});
      list.used = [1, 2];
      list.giveTile(2).should.eql(false);
      done();
    });
  });

  describe('.setUsed()', function () {
    it('should add a tile to the used list', function (done) {
      var list = List();
      list.add([
        {"height": 3, "width": 3, "id": 0}, 
        {"height": 3, "width": 3, "id": 1}, 
        {"height": 2, "width": 2, "id": 2}
      ]);
      
      list.setUsed(1);
      list.used.should.eql([1]);
      done();
    });
  });

  describe('.length()', function () {
    it('should return the length of the \'attr\' value', function (done) {
      var list = List();
      list.add([
        {"height": 3, "width": 3, "id": 0}, 
        {"height": 3, "width": 3, "id": 1}, 
        {"height": 2, "width": 2, "id": 2}
      ]);
      list.length().should.eql(3);
      done();
    });
  });
});