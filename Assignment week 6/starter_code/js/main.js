console.log('javascript file linked to index.html');

$(document).ready(function () {
	
	console.log('jquery is loaded');

var city = ['NYC','SF','LA','ATX','SYD']

for (var i=0; i<city.length; i++) {
	$('select').append(('<option>')+city[i]+('</option>'));
}


$('#city-type').change(function(event) {
 	
 	event.preventDefault();

	var userChoice = ($('#city-type').val());

	var imageSource = obtainSource(userChoice);

	// if (imageSource !== null) {
	      updateBackground(imageSource);
	    // } else {
	    //   console.log('Error, that is not a valid city name!');
    // }
 });


	function obtainSource(theme) {
			if ((theme) === 'New York'|| theme ==='New York City'|| theme === 'NYC') {	
				console.log('clicked NYC')
				return 'nyc.jpg';
				// $('body').css('background-image', 'url(images/nyc.jpg)')
			}	else if 
				((theme) === 'San Francisco'|| theme === 'SF'|| theme === 'Bay Area') {
				console.log('clicked SF')
				return 'sf.jpg';
				// $('body').css('background-image', 'url(images/sf.jpg)')
			}	else if 
				((theme) === 'Los Angeles'|| theme === 'LA'|| theme === 'LAX') {
				console.log('clicked LA')
				return 'la.jpg';
				// $('body').css('background-image', 'url(images/la.jpg)')
			}	else if 
				((theme) === 'Austin'|| theme === 'ATX') {
				console.log('clicked ATX')
				return 'austin.jpg';
				// $('body').css('background-image', 'url(images/austin.jpg)')
			}	else if 
				((theme) === 'Sydney'|| theme === 'SYD') {
				console.log('clicked SYD');
				return 'sydney.jpg';
				// $('body').css('background-image', 'url(images/sydney.jpg)') 
			}	
		}

	function updateBackground(imageSource) {
		// theme = String(theme)
		// $('body').css('background-image', 'url(images/'+theme+'.jpg'); 

		    // $('body').css('background-image'), 'url("images/'+imageSource+'")';

		$('body').css({
			'background-image': 'url("images/' + imageSource + '")',
			 // 'background-size': 'cover',
			 // 'background-position': 'center'
  		});

}
});


// console.log('javascript file linked to index.html');

// $(document).ready(function () {
	
// 	console.log('jquery is loaded');

// 	$('#submit-btn').click(changeImage);

// 	function changeImage() {
// 		event.preventDefault();
// 		var city = ($('#city-type').val());
// 		city = String(city);

// 		if ((city) === 'New York'|| city ==='New York City'|| city === 'NYC') {	
// 			console.log('clicked NYC')		
// 			$('body').css('background-image', 'url(images/nyc.jpg)')
// 		}	else if 
// 			((city) === 'San Francisco'|| city === 'SF'|| city === 'Bay Area') {
// 			console.log('clicked SF')
// 			$('body').css('background-image', 'url(images/sf.jpg)')
// 		}	else if 
// 			((city) === 'Los Angeles'|| city === 'LA'|| city === 'LAX') {
// 			console.log('clicked LA')
// 			$('body').css('background-image', 'url(images/la.jpg)')
// 		}	else if 
// 			((city) === 'Austin'|| city === 'ATX') {
// 			console.log('clicked ATX')
// 			$('body').css('background-image', 'url(images/austin.jpg)')
// 		}	else if 
// 			((city) === 'Sydney'|| city === 'SYD') {
// 			console.log('clicked SYD')
// 			$('body').css('background-image', 'url(images/sydney.jpg)') 
// 		}	else {
// 			console.log('invalid input')
// 			$('body').css('background-image', 'url(images/citipix_skyline.jpg)') 
// 		}
// 	}

// });