'use strict';

var cleanValidate = require('./clean-validate');

var validate = function() {
  if (arguments.length === 0) {
    return new Error('Last argument must be a callback function.');
  } else if (typeof (arguments[arguments.length - 1]) !== 'function') {
    return new Error('Last argument must be a callback function.');
  } else {
    var cb = arguments[arguments.length - 1];

    if (arguments.length !== 3) {
      cb('Expected 3 arguments. Recevied ' + arguments.length + '.', null);
    } else {
      var formData = arguments[0];
      var rules = arguments[1];

      if (typeof (formData) !== 'object') {
        cb('Form data must be an object.', null);
      } else if (typeof (rules) !== 'object') {
        cb('Rules must be an object.', null);
      } else {
        cleanValidate(formData, rules, cb);
      }
    }
  }
};

module.exports = validate;
