'use strict';

var cleanValidate = function(formData, rules, cb) {
  /*
   * formData is a JSON object with form controls and user input
   * rules is a JSON object with a ruleset to validate against formData
   * cb is callback function in the form of cb(null, ['valErr1', 'valErr2']);
   */

  if (formData && rules) {
    cb(null, []);
  }
};

module.exports = cleanValidate;
