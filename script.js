var main = function() {

$('.more-btn').click(function(){
	// console.log(this);
	// $('.more-menu').toggle();
// console.log("clicking works")
 $(this).next().toggle();
	});
	$('.share').click(function(){
		$(this).next().toggle();
	});
	$('.notification').click(function(){
		$(this).next().toggleClass('active');
	});

};

$(document).ready(main);