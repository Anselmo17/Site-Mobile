


/*desse caixa de texto*/

$('#navbar-topCasaFina').on('show.bs.collapse', function() {
	$('.texto-banner').css('transform', 'translate(-50%, 10%');

});



/*sobe a caixa de texto*/
$('#navbar-topCasaFina').on('hide.bs.collapse', function() {
	$('.texto-banner').css('transform', 'translate(-50%, -50%');
});