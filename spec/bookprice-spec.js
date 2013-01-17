if ( typeof require != "undefined") {
    var buster = require("buster");
	 var object = require("../src/bookprice.js");
}

buster.spec.expose(); // Make spec functions global

var spec = describe("Create book object testing tdd style", function () {
    before(function () {
			newhybrid = {};
			newhybrid = new object;

			newbook = newhybrid.book;
			newprice = newhybrid.bookcost(2);
			
    });

    it("Please test if there is a new book in the library", function () {
			
        buster.assert.equals('10min introduciton to BDD', newbook);
    });
	
    it("What is the total cost given quantity for a book", function () {
			
        buster.assert.equals('24', newprice);
    });
	
		
		
	});  // closes spec