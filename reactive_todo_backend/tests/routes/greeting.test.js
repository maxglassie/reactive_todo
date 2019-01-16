const expect = require('chai').expect;

const { hello } = require('../../routes/greeting');

// setup
let req = {
  body: {}
};

let res = {
  sendCalledWith: '',
  send: function(arg) {
    this.sendCalledWith = arg
  }
};

// describe arg1 = "description", arg2 = anonymous function {
  //describe('desc', it)
// }

describe('Greeting Route', function() {
  describe('Hello() function', function() {
    it('Should error out if no name provided', function() {
      hello(req, res);
      expect(res.sendCalledWith).to.contain('error');
    });
  });
});