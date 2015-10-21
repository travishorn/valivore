/*globals describe, it*/

'use strict';

var valivore = require('../index');

describe('validate()', function() {
  it('errors when no args specified', function() {
    valivore.validate().should.be.an.Error();
  });

  it('errors when last arg isn\'t a function', function() {
    valivore.validate({}, {}, 'test').should.be.an.Error();
  });

  it('errors when missing args', function() {
    valivore.validate(function(err) {
      err.should.be.type('string');
    });

    valivore.validate({}, function(err) {
      err.should.be.type('string');
    });
  });

  it('errors when missing args AND last arg isn\'t a function', function() {
    valivore.validate({}).should.be.an.Error();
    valivore.validate({}, {}).should.be.an.Error();
  });

  it('errors when wrong arg type', function() {
    valivore.validate({}, 'test', function(err) {
      err.should.be.type('string');
    });

    valivore.validate('test', {}, function(err) {
      err.should.be.type('string');
    });
  });

  it('doesn\'t give valErrs when missing arguments', function() {
    valivore.validate(function(err, valErrs) {
      (valErrs === null).should.be.true();
    });

    valivore.validate({}, function(err, valErrs) {
      (valErrs === null).should.be.true();
    });
  });

  it('doesn\'t give valErrs when incorrect arg type', function() {
    valivore.validate({}, 'test', function(err, valErrs) {
      (valErrs === null).should.be.true();
    });

    valivore.validate('test', {}, function(err, valErrs) {
      (valErrs === null).should.be.true();
    });
  });

  it('gives a valErr array', function() {
    valivore.validate({}, {}, function(err, valErr) {
      valErr.should.be.an.Array();
    });
  });
});
