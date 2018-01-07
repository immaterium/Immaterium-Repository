console.log('javascript file linked to index.html');
$(document).ready(function () {
	// console. log ()
// $('.readmore').click(MoreText);
// $('.readless').click(LessText);

 // var answerIsShown = false;

 // function MoreText() {
   console.log('jquery linked');

//   // $('#answer-1').slideDown();
//   $('.hide #show-this-on-click').show({
//      'easing': 'swing'
//    });

// function LessText() {
//   $('.readless hide').hide({
//      'easing': 'swing'
//    });	
 

//   $('.learnmore').click(MoreTextSB);

//  // var answerIsShown = false;

//  function revealMoreText() {
//    console.log('clicked');

//   // $('#answer-1').slideDown();
//   $('.hide #learnmoretext').toggle({
//      'easing': 'swing'
//    });

      // LOGIC FOR IMPLEMENTING YOUR OWN TOGGLE
    // console.log('value of answerIsShown:', answerIsShown);
    // $('#answer-1').css({'display': 'block'})
    // if (answerIsShown === false) {
    //   $('#answer-1').show();
    //   answerIsShown = true;
    // } else if (answerIsShown === true) {
    //   $('#answer-1').hide();
    //   answerIsShown = false;
    // }
  
  $('#show-on-click').click(showOnClick);

  function showOnClick() {
    var toggleLink = $('#show-on-click');
    var postExpansion = $(toggleLink).parent().find('.expansion');

    if ($(postExpansion).data('state') === 'hidden') {
      $(postExpansion).data('state', 'show');
      $(postExpansion).show();
      $(toggleLink).text('Read less <');
    } else {
      $(postExpansion).data('state', 'hidden');
      $(postExpansion).hide();
      $(toggleLink).text('Read more >');
    };


