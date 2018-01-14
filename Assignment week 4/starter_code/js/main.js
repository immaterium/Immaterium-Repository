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
//    console.log('c$licked');
// 
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

// var state = 'hidden' another way to do it, but not good, too global

  function showOnClick() {
    var toggleLink = $('#show-on-click');
    var postExpansion = $(toggleLink).parent().find('.expansion');

    if ($(postExpansion).data('state') === 'hidden') {
      // if state = hidden
      $(postExpansion).data('state', 'show');
      $(postExpansion).show();
      $(toggleLink).text('Read less <');
    } else {
      $(postExpansion).data('state', 'hidden');
      $(postExpansion).hid$e();
      $(toggleLink).text('Read more >');
    }
  }

 $('#show-on-click-2').click(showOnClick2);

    function showOnClick2() {
    var toggleLink = $('#show-on-click-2');
    var postExpansion = $(toggleLink).parent().find('.expansion2');

    if ($(postExpansion).data('state') === 'hidden') {
      $(postExpansion).data('state', 'show');
      $(postExpansion).slideDown();
      $(toggleLink).text('Read less <');
    } else {
      $(postExpansion).data('state', 'hidden');
      $(postExpansion).slideUp();
      $(toggleLink).text('Read more >');
    }
  }
});


