'use strict';

var fs = require('fs');
var expect = require('chai').expect;
require('dotenv').config();
var runInSandbox = require("auth0-rules-testharness");


var user = {
  "name": "Richard Seldon",
  "email": "richard.seldon@auth0.com",
  "email_verified": true
};

var context = {
  "clientID": "wWXS5rz3asdfdfkzbCXho3zNPNv77c",
  "clientName": "My Auth0 Client",
  "connectionStrategy": "auth0"
};

var configuration = {
  NAME: 'world'
};

var params = {
  timeout: 5,
  ca: '',
  tenant: process.env.AUTH0_TENANT,
  url: process.env.SANDBOX_URL,
  token: process.env.WEBTASK_TOKEN
};



describe('auth0-rules-testharness', function () {


  it('should console log "hello, world" - available in output array', function (done) {

    console.log("running test...");

    var script = fs.readFileSync('./rules/helloWorld.js', 'utf8');

    console.log(script);

    var callback = function (err, result, output, stats) {
      console.log('output: ', output);
      console.log('result: ', result);
      expect(output[0]).to.equal('hello, world');
      done();
    };

    var args = [user, context, callback];
    runInSandbox(script, args, configuration, params);

  });

  it('should append attribute "foo" to user with value "bar" - available in result object', function (done) {

    var script = fs.readFileSync('./rules/helloWorld.js', 'utf8');

    var callback = function (err, result, output, stats) {
      // console.log('result: ', result);
      expect(result.foo).to.equal('bar');
      done();
    };

    var args = [user, context, callback];
    runInSandbox(script, args, configuration, params);
  });

});