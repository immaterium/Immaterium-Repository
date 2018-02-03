console.log('javascript file linked to index.html');

$(document).ready(function () {
	
	console.log('jquery is loaded');

$('.line').click(function() {
if ($('ul').attr('class')) {
	$('ul').removeClass($('ul').attr('class'))}
else {
	$('ul').addClass('slideDown')
}
})
});