/* global $ */

// Log message to console to verify JavaScript file is linked
console.log('javascript file linked to index.html');

// Execute JavaScript only after all elements have rendered on page
$(document).ready(function () {
  // Log message to console to verify jQuery has loaded
  console.log('jquery is loaded');

  // Add click event listeners to "Read more >" of each post
  $('#read-more-post-1').click(showMorePost1);
  $('#read-more-post-2').click(showMorePost2);
  $('.hamburger-icon').click(toggleMobileNavBar);

  function toggleMobileNavBar() {
    $('.nav-item').css('display', 'block');
    $('nav').slideToggle();
  }

  function showMorePost1() {
    var toggleButton = $('#read-more-post-1');
    var postExerpt = $(toggleButton).parent().find('.exerpt');

    if ($(postExerpt).data('state') === 'hidden') {
      // change data-state attribute value to 'show'
      $(postExerpt).data('state', 'show');
      $(postExerpt).slideDown();

      // change the text to "Read less"
      $(toggleButton).text('Read less <');
    } else {
      // change data-state attribute value to 'hidden'
      $(postExerpt).data('state', 'hidden');
      $(postExerpt).slideUp();
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
});
