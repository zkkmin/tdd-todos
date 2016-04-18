var assert = require('assert');
//var chai = require('chail');
//chai.Should();

// Edith has heard about a cool new online to-do app. She goes
// to check out its homepage
// She notices the page title and header mention to-do lists
describe("NewVisitorTest", function(){
  it('should have the right title - To-Do', function () {
      browser.url('http://localhost:3000');
      browser.getTitle().should.be.equal('To-Do');
  });
})
