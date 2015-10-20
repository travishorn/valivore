#valivore

[![Build Status](https://travis-ci.org/travishorn/valivore.svg?branch=master)](https://travis-ci.org/travishorn/valivore)
[![Code Climate](https://codeclimate.com/github/travishorn/valivore/badges/gpa.svg)](https://codeclimate.com/github/travishorn/valivore)
[![Test Coverage](https://codeclimate.com/github/travishorn/valivore/badges/coverage.svg)](https://codeclimate.com/github/travishorn/valivore/coverage)

> Isomorphic form validation. Write rules once, validate on the client and server.

##Installation

npm support will be available once the module is further along in development.
For right now, you can install by cloning the git repository.

    git clone https://github.com/travishorn/valivore.git

##Usage

###Server-side (using express)

    var valivore = require('valivore');

    var rules = {}; // Rule spec is under development

    app.post('form-submission', function(req, res) {
      valivore.validate(req.body, rules, function(err, valErrs) {
        if (err) {
          res.send('Error occurred: %s', err);
        } else if (valErrs) {
          res.send('Validation errors: %s', valErrs);
        } else {
          res.send('All good.');
        }
      });
    });

###Client-side (using browserify)

    var valivore = require('valivore');

    var form = document.getElementById('form');
    var rules = {}; // Rule spec is under development

    form.addEventListener('submit', function() {
      valivore.validate(form, rules, function(err, valErrs) {
        if (err) {
          console.log('Error occurred: %s', err);
          return false;
        } else if (valErrs) {
          console.log('Validation errors: %s', err);
          return false;
        } else {
          console.log('All good.');
          return true;
        }
      });
    });

##Testing

Tests are managed by gulp and written in mocha. Code is run through jshint,
jscs, and mocha. Code coverage is checked to be at least 90% by istanbul.

    npm test

##License

The MIT License (MIT)

Copyright (c) 2015 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
