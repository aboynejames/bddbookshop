/**
*  jQuery listen for clicks and interaction	
* 
*/	
$(document).ready(function(){
// capture the quantity
	$("#totalprice").click(function(e){
			e.preventDefault(e);
			idclick = $(this).attr("id");
			idtitle = $(this).attr("title");	
			quantityin = $("#quantityin").val();

			// calculate book total value  price * quantity
			totalcal = {};
			totalcal = new object();
			totalvaluecal = totalcal.bookcost(quantityin);

			// display the price
			$("span").html('<div id="totalvalue">' + totalvaluecal +'</div>');

	});
	

});