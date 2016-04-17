var assert = require('assert');
//var chai = require('chail');
//chai.Should();

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://localhost:3000');
        var title = browser.getTitle();
        assert.equal(title, 'TDD Todos');
    });
});
describe('testing chai assert', function(){
  it('should do some chai assertions', function(){
    browser.url('http://localhost:3000');
    browser.getTitle().should.be.equal('TDD Todos');
  });
});
