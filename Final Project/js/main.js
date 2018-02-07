console.log('javascript file linked to index.html');

$(document).ready(function () {
	
	console.log('jquery is loaded');

  // Add click event listeners to "Read more >" of each post
  $('#read-more-post-1').click(showMorePost1);
  $('#read-more-post-2').click(showMorePost2);

  function showMorePost1() {
    var toggleButton = $('#read-more-post-1');
    var postExerpt = $(toggleButton).parent().find('.exerpt');

    if ($(postExerpt).data('state') === 'hidden') {
      // change data-state attribute value to 'show'
      $(postExerpt).data('state', 'show');

      // reveal exerpt with animation (try with show() and slideDown())
      $(postExerpt).show();
      // $(postExerpt).slideDown();

      // change the text to "Read less"
      $(toggleButton).text('Read less <');
    } else {
      // change data-state attribute value to 'hidden'
      $(postExerpt).data('state', 'hidden');

      // hide exerpt with animation (try with hide() and slideUp())
      $(postExerpt).hide();
      // $(postExerpt).slideUp();

      // change text back to "Read more"
      $(toggleButton).text('Read more >');
    }
  }

  /**
   * Basically the same function as showMorePost1
   * except without the comments.
   */
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
});