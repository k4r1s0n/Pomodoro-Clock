$(document).ready(function(){
	var buzzer = $('#buzzer')[0];
	$('#reset').hide();
	var count = parseInt($('#num').html());

	$('#minus5Clock').click(function(){
		if (count > 5) {
			count -= 5;
		}
		$('#num').html(count);
	});
});