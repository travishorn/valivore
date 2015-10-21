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

##Contributing

###Setup

1. **Fork the project.** Click the **Fork** above.
2. **Clone your project.** At a terminal, run
`git clone https://github.com/username/valivore.git` where *username* is your
GitHub username.
3. **Add this project as a remote.** `cd valivore && git remote add upstream
https://github.com/travishorn/valivore.git`

###Working on code locally

1. **Pull latest version.** `git pull upstream master`
2. **Check out a new branch.** `git checkout -b branch-name` where *branch-name*
is a descriptive name to indicate what you'll be working on
3. **Write tests.** All tests are described in the `tests` directory. Add tests
to the appropriate file, or create a new test file if necessary.
3. **Make your changes.**
4. **Make sure all tests are passing.** `npm test`
5. **Stage files for tracking.** `git add filename` where *filename* is the name
of a file you've added or changed. Repeat for all changed/added files.
6. **Commit changes.** `git commit -m "Brief description of changes."`

###Pushing changes online & requesting a pull

1. **Push branch to GitHub.** `git push origin -u branch-name` where
*branch-name* is the name of the branch you've been working on.
2. **Send pull request.** Visit your forked project on GitHub, select your
branch, click the **Compare & pull request** button

The pull request will not be accepted unless all tests pass:

- jshint using [airbnb's standards](https://github.com/airbnb/javascript/blob/master/linters/jshintrc)
- jscs using [airbnb's standards](https://github.com/jscs-dev/node-jscs/blob/master/presets/airbnb.json)
- mocha (make sure you added tests to cover the code you wrote)
- istanbul (coverage must not fall below 90%)

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
