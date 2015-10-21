'use strict';

var valivore = {
  cleanValidate: function(formData, rules, cb) {
    /*
     * formData is a JSON object with form controls and user input
     * rules is a JSON object with a ruleset to validate against formData
     * cb is callback function in the form of cb(null, ['valErr1', 'valErr2']);
     */

    if (formData && rules) {
      cb(null, []);
    }
  },

  validate: function() {
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
          valivore.cleanValidate(formData, rules, cb);
        }
      }
    }
  },
};

module.exports = valivore;
