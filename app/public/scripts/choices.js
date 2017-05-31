// Choice: Ask a question
$('#question-cloud').on('click', function(e) {
  e.preventDefault();

  let choice = $(this).attr('id');
  console.log(choice);

  $('#question-cloud').off();
  $('.wrapper').empty();
  createCategoryPage();
  chooseCategory(choice);
});


// Choice: Give an Answer
$('#answer-cloud').on('click', function(e) {
  e.preventDefault();

  let choice = $(this).attr('id');
  console.log(choice);

  $('#answer-cloud').off();
  $('.wrapper').empty();
  createCategoryPage();
  chooseCategory(choice);
});


// Choose a Category
function chooseCategory(choice) {
  $(document).on('click', '.category', function(e) {
    e.preventDefault();

    let category = $(this).find('input').attr('data-name');
    console.log(category); // Save to the database


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