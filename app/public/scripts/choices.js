// Choice: Ask a question
 $("#demo01").animatedModal();

  $('<h1>').fadeIn(1400);
  $('#question-cloud').fadeIn(1400);
  $('#answer-cloud').fadeIn(1400);

$('#question-cloud').on('click', function(e) {
  e.preventDefault();

  let choice = $(this).attr('id');
  // console.log(choice);

  $('#question-cloud').off();
  $( "#question-cloud" ).effect( "puff", 1800 );

  setTimeout(function(){
    $('.wrapper').empty();
    createCategoryPage();
    chooseCategory(choice);

  }, 1700);

});


// Choice: Give an Answer
$('#answer-cloud').on('click', function(e) {
  e.preventDefault();

  let choice = $(this).attr('id');
  // console.log(choice);

  $('#answer-cloud').off();
  $( "#answer-cloud" ).effect( "puff", 2000 );

  setTimeout(function(){
    $('.wrapper').empty();
    createCategoryPage();
    chooseCategory(choice);

  }, 1700);
});


// Choose a Category
function chooseCategory(choice) {
  $(document).on('click', '.category', function(e) {
    e.preventDefault();

    let category = $(this).find('input').attr('data-name');
    // console.log(category); // Save to the database


    $.ajax({
      type: "POST",
      url: '/app',
      data: {category: category},
      success: function(data) {
        //console.log(data);
      }


    });


      $(document).off();
      $('.wrapper').empty();

      if(choice === 'question-cloud') {
        createQuestionPage();
      } else {
        createAnswerPage();
      }


  });
}
