$(document).ready(function () {
	var buzzer = $('#buzzer')[0];
	$('#reset, #timer-label').hide();
	var count = parseInt($('#session-length').html());
	var breakTime = parseInt($('#break-length').html());
	$('#session-decrement').click(function () {
		if (count > 1) {
			count -= 1;
		}
		$('#session-length').html(count);
	});

	$('#session-increment').click(function () {
		if (count < 60) {
			count += 1;
		}
		$('#session-length').html(count);
	});

	$('#break-decrement').click(function () {
		if (breakTime > 1) {
			breakTime -= 1;
		}
		$('#break-length').html(breakTime);
	});

	$('#break-increment').click(function () {
		if (breakTime < 60) {
			breakTime += 1;
		}
		$('#break-length').html(breakTime);
	});

	$('#start_stop').click(function () {
		var counter = setInterval(timer, 1000);
		var startBreak;
		const isLessTen = (num) => num < 10 ? '0' + num : num;
		count *= 60;
		function timer() {
			$('#start_stop, #session-decrement, #session-increment, #break-decrement, #break-increment, #break-length, #session-label, #break-label').hide();
			$('#timer-label').show();
			$('#timer-label').html('Session Time:');
			count -= 1;
			if (count === 0) {
				clearInterval(counter);
				buzzer.play();
				startBreak = setInterval(breakTimer, 1000);
				$('#session-length').hide();
			}
		
			$('#session-length').html(isLessTen(Math.floor(count/60))  + ':' + isLessTen(count%60));
			
			
		};

		function breakTimer() {
			$('#timer-label').html('Break Time:');
			$('#break-length, #timer-label').show();
			breakTime -= 1;
			if(breakTime === 0) {
				clearInterval(startBreak);
				buzzer.play();
				$('#break-length, #timer-label').hide();
				$('#reset').show();
			}
			if (breakTime%60 >= 10) {
				$('#break-length').html(Math.floor(breakTime/60) + ':' + breakTime%60);
			} else {
				$('#break-length').html(Math.floor(breakTime/60) + ':' + '0' + breakTime%60);
			} 
			$('#break-length').html(breakTime);
		};
	});
	$('#reset').click(function(){
		count = 25;
		breakTime = 5;
		$('#session-length').html(count);
		$('#break-length').html(breakTime);
		$('#start_stop, #session-decrement, #break-increment, #break-decrement, #break-increment, #session-length, #break-length, #session-label, #break-label').show();
		$('#reset, #timer-label').hide();
	});
	$('#time-left').html();
});