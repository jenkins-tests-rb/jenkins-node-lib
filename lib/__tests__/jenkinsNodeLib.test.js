const assert = require('assert');
const jenkinsNodeLib = require('../index.js');

describe('jenkinsNodeLib', () => {
  it('complicated test', () => {
    assert.equal(jenkinsNodeLib(), 'cloudbees test', 'complicated test failed');
  });
});
