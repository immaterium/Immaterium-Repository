console.log('javascript file linked to index.html');

$(document).ready(function () {
	
	console.log('jquery is loaded');

	$('#submit-btn').click(changeImage);

	function changeImage(event) {
		event.preventDefault();
		var city = ($('#city-type').val());
		city = String(city);

		if ($(city) === 'New York'||'New York City'||'NYC') {	
			console.log('clicked NYC')		
			$('body').css('background-image', 'url(images/nyc.jpg)')
		}	else if 
			($(city) === 'San Francisco'||'SF'||'Bay Area') {
			console.log('clicked SF')
			$('body').css('background-image', 'url(images/sf.jpg)')
		}	else if 
			($(city) === 'Los Angeles'||'LA'||'LAX') {
			console.log('clicked LA')
			$('body').css('background-image', 'url(images/la.jpg)')
		}	else if 
			($(city) === 'Austin'||'ATX') {
			console.log('clicked ATX')
			$('body').css('background-image', 'url(images/austin.jpg)')
		}	else if 
			($(city) === 'Sydney'||'SYD') {
			console.log('clicked SYD')
			$('body').css('background-image', 'url(images/sydney.jpg)') 
		}	
	}

});