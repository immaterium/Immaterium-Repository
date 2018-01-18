console.log('javascript file linked to index.html');

$(document).ready(function () {
	
	console.log('jquery is loaded');

	$('#submit-btn').click(changeImage);

	function changeImage(event) {
		event.preventDefault();
		// var city = $('#city-type').val();
		var city = '1'
		// if ($(city) === 'New York'||'New York City'||'NYC') {
			if ($(city) === '1') {
			$('body').css('background', 'url(images/nyc.jpg)');
		}	else if 
			($(city) === 'San Francisco'||'SF'||'Bay Area') {
			$('body').css('background', 'url(images/sf.jpg)');
		}	else if 
			($(city) === 'Los Angeles'||'LA'||'LAX') {
			$('body').css('background', 'url(images/la.jpg)');
		}	else if 
			($(city) === 'Austin'||'ATX') {
			$('body').css('background', 'url(images/austin.jpg)');
		}	else if 
			($(city) === 'Sydney'||'SYD') {
			$('body').css('background', 'url(images/sydney.jpg)');
		}	
	}

});