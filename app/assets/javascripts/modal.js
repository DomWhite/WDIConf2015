$(document).ready(function() {

	$('.show-modal').click(function() {
		$('.modal-background').show();
	});


	$('.close-modal').on('click', function(e) {
		$('.modal-background').hide();
	});


});
