console.log('javascript file linked to index.html');

$(document).ready(function () {

	console.log('jquery is loaded');

  $('#read-more-post-1').click(showMorePost1);
  $('#read-more-post-2').click(showMorePost2);

  function showMorePost1() {
    var toggleButton = $('#read-more-post-1');
    var postExerpt = $(toggleButton).parent().find('.exerpt');

    if ($(postExerpt).data('state') === 'hidden') {
      $(postExerpt).data('state', 'show');
      $(postExerpt).show();
      $(toggleButton).text('Read less <');
    } else {
      $(postExerpt).data('state', 'hidden');
      $(postExerpt).hide();
      $(toggleButton).text('Read more >');
    }
  }

  function showMorePost2() {
    var toggleButton = $('#read-more-post-2');
    var postExerpt = $(toggleButton).parent().find('.exerpt');

    if ($(postExerpt).data('state') === 'hidden') {
      $(postExerpt).data('state', 'show');
      $(postExerpt).slideDown();
      $(toggleButton).text('Read less <');
    } else {
      $(postExerpt).data('state', 'hidden');
      $(postExerpt).slideUp();
      $(toggleButton).text('Read more >');
    }
  }


$('.line').click(function() {
if ($('ul').attr('class')) {
	$('ul').removeClass($('ul').attr('class'))}
else {
	$('ul').addClass('slideDown')
  }
})

// $('#search-icon').click(getJSON);
// var url = ''
// function getJSON() {
// url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=';
// $.ajax ({
//   url: url + SEARCH_STR,
//   dataType: 'jsonp',
//   method: 'GET',
// })
// }


})
;
