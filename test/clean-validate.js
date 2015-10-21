/*globals describe, it*/

'use strict';

var valivore = require('../index');

describe('cleanValidate()', function() {
  it('doesn\'t give an error', function() {
    valivore.cleanValidate({}, {}, function(err) {
      (err === null).should.be.true();
    });
  });

  it('gives a valErr array', function() {
    valivore.cleanValidate({}, {}, function(err, valErrs) {
      valErrs.should.be.an.Array();
    });
  });
});
