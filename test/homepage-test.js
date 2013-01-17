/*
* check the homepage index.html webpage has been displayed
*/
var casper = require('casper').create();

//casper.start();

var baseUrl = "http://localhost/sites/playground/bookshop/src/homepage.html";

casper.test.comment("Scenario: A user can view the home page");

casper.start(baseUrl, function() {
	this.test.comment('is the homepage is live on the web');
  this.test.assertHttpStatus(200, "Response is a success if 200 else a fail");
  this.test.assertTitle("Techmeetup - Aberdeen", "Title is as expected or else fail");
});

casper.then(function() {
	this.test.comment('header navigation');
	casper.test.assertExists('#header', 'the element exists');

});

casper.then(function() {
	this.test.comment('main content AJAX point');
	casper.test.assertExists('#maincontent', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('the homepage footer');
	casper.test.assertExists('#footer', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('does the quantity form exist');
	casper.test.assertExists('form#quantity', 'the element exists');
	
});


casper.then(function() {
	this.test.comment('fill two books quantity');
	this.fill('form#quantityinput', { 'quantityin': '2' }, true);
	
});

casper.then(function() {
	this.test.comment('click on the calculate total price button');
	   this.mouseEvent('click', '#totalprice');
	
});

casper.then(function() {
	this.test.comment('a new div totalvalue inserted ready to recieve value');
	casper.test.assertExists('#totalvalue', 'the new div element exists');
	
});


//casper.run();
casper.run(function() {
// need for exporting xml xunit/junit style
  //this.test.renderResults(true, 0, 'reports/test-casper.xml');
  //this.test.done();
	//this.exit();
	this.test.renderResults(true, 0, this.cli.get('save') || false);	
});
