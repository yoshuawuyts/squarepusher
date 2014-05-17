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
      list.add([{"height": 2, "width": 2}, {"height": 2, "width": 2}]);
      list.applyId();
      list.attr.should.eql([{"height": 2, "width": 2, "id": 0}, {"height": 2, "width": 2, "id": 1}]);
      done();
    });
  });

  describe('.applySurface()', function () {
    it('should calc and set the surface on each tile', function (done) {
      var list = List();
      list.applySurface();
      done();
    });
  });

  describe('.applyRotation()', function () {
    it('should calc and set the horizontal value on each tile', function (done) {
      var list = List();
      list.applyRotation();
      done();
    });

    it('should calc and set the vertical value on each tile', function (done) {
      var list = List();
      list.applyRotation();
      done();
    });
  });

  describe('.sort()', function () {
    it('should sort arrays from large to small', function (done) {
      var list = List();
      list.sort();
      done();
    });
  });

  describe('.giveTile()', function () {
    it('should return the largest available tile', function (done) {
      var list = List();
      list.giveTile();
      done();
    });

    it('should accept an offset', function (done) {
      var list = List();
      list.giveTile();
      done();
    });
  });

  describe('.length()', function () {
    it('should return the length of the \'attr\' value', function (done) {
      var list = List();
      list.length();
      done();
    });
  });
});