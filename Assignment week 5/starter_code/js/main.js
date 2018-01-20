console.log('javascript file linked to index.html');

$(document).ready(function () {
	
	console.log('jquery is loaded');

	$('#submit-btn').click(changeImage);

	function changeImage() {
		event.preventDefault();
		var city = ($('#city-type').val());
		city = String(city);

		if ((city) === 'New York'|| city ==='New York City'|| city === 'NYC') {	
			console.log('clicked NYC')		
			$('body').css('background-image', 'url(images/nyc.jpg)')
		}	else if 
			((city) === 'San Francisco'|| city === 'SF'|| city === 'Bay Area') {
			console.log('clicked SF')
			$('body').css('background-image', 'url(images/sf.jpg)')
		}	else if 
			((city) === 'Los Angeles'|| city === 'LA'|| city === 'LAX') {
			console.log('clicked LA')
			$('body').css('background-image', 'url(images/la.jpg)')
		}	else if 
			((city) === 'Austin'|| city === 'ATX') {
			console.log('clicked ATX')
			$('body').css('background-image', 'url(images/austin.jpg)')
		}	else if 
			((city) === 'Sydney'|| city === 'SYD') {
			console.log('clicked SYD')
			$('body').css('background-image', 'url(images/sydney.jpg)') 
		}	else {
			console.log('invalid input')
			$('body').css('background-image', 'url(images/citipix_skyline.jpg)') 
		}
	}

});

// Leads to abstraction below, refactoring
// $(document).ready(function () {
//   console.log('jquery loaded!');

//   // bind event listener to UPDATE button
//   $('#submit-btn').click(function (event) {
//     // prevent default page refresh
//     event.preventDefault();

//     // get user's input from input element
//     var userInput = $('#city-type').val();

//     // find corresponding URL for the city
//     var imageUrl = getImageUrlForCity(userInput);

//     // add image to background using URL
//     if (imageUrl !== null) {
//       updateBodyBgImage(imageUrl);
//     } else {
//       console.log('Error, that is not a valid city name!');
//     }
//   });

//   // Given a string that represents a city name,
//   // return a matching image url for that city.
//   // Takes in a parameter that we choose to name cityName, for use inside the function.
//   function getImageUrlForCity (cityName) {
//     if (cityName === 'New York' || cityName === 'New York City' || cityName === 'NYC') {
//       return 'nyc.jpg';
//     } else if (cityName === 'San Francisco' || cityName === 'Bay Area' || cityName === 'SF') {
//       return 'sf.jpg';
//     } else if (cityName === 'Los Angeles' || cityName === 'LAX' || cityName === 'LA') {
//       return 'la.jpg';
//     } else if (cityName === 'Austin' || cityName === 'ATX') {
//       return 'austin.jpg';
//     } else if (cityName === 'Sydney' || cityName === 'SYD') {
//       return 'sydney.jpg';
//     } else {
//       // the city name passed into this function does not match any we know,
//       // so return null
//       return null;
//     }
//   }

//   // Given a string that represents the url to an image in our project directory,
//   // set it as the background image of the page body.
//   // Takes in a paramter that we choose to name imageUrl, for use inside the function.
//   function updateBodyBgImage (imageUrl) {
//     // .css() method can actually be used to set multiple property-value pairs
//     $('body').css({
//       'background-image': 'url("images/' + imageUrl + '")',
//       'background-size': 'cover',
//       'background-position': 'center'
//     });

//     // NOTE: the above is the same as 3 separate .css() calls
//     // $('body').css('background-image', 'url("images/' + imageUrl + '")');
//     // $('body').css('background-size', 'cover');
//     // $('body').css('background-position', 'center');
//   }
// });