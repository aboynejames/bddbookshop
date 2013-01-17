
var object = function() {
  this.book = '';
	this.book = '10min introduciton to BDD';
	this.price = '';
	};
	
// class methods

object.prototype.bookcost = function(bquantity) {
	
	this.price = bquantity * 12;
	return this.price;

};
