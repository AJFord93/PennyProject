function createAnswerPage() {

  const heading = $('<div>').addClass('container');
  const h1 = $('<h1>').addClass('text-center')
    .text('Share Your Knowledge').css('margin-bottom', '50px');
  const answerAQuestion = $('<div>').addClass('row');
  const answerCloud = $('<div>').addClass('col-md-3 col-md-offset-1 text-center answer-cloud');
  const answerLink = $('<a>').attr('href', '/app');
  const answerImg = $('<img>').attr('src', '../public/img/cloud_answer.png')
    .css('width', '400px').css('height', 'auto');
  const answerDiv = $('<div>').addClass('col-md-5 col-md-offset-2 text-center answer');
  const questionToAnswer = $('<p>').text('Question from the database')
    .css('font-family', 'sans-serif').css('color', '#fff');
  const answerForm = $('<form>').attr('method', 'POST').attr('action', '/app')
    .attr('id', 'answer-a-question');
  const textDiv = $('<div>').addClass('form-group');
  const textInput = $('<textarea>').addClass('form-control')
    .attr('rows', '8').attr('id', 'shareYourKnowledge').attr('name', 'answer')
      .attr('placeholder', 'Enter your answer ...').css('margin-top', '20px');
  const submitBtn = $('<button>').text('Submit').attr('type', 'submit')
    .addClass('btn btn-default').css('float', 'right');


  const row = $('<div>').addClass('row');
  const backBtnDiv = $('<div>').addClass('col-lg-12');
  const genCatBtn = $('<input>').attr('type', 'image').attr('src', '../public/img/Back.png').addClass('backbtn').attr('id', 'genCats').attr('data-name', 'button').css('margin', '40px 0 40px 50px');


  $('.wrapper').append(heading);
  heading.append(h1);
  heading.append(answerAQuestion);
  answerAQuestion.append(answerCloud);
  answerCloud.append(answerLink);
  answerCloud.append(answerImg);
  answerAQuestion.append(answerDiv);
  answerDiv.append(questionToAnswer); // Get from the database
  answerDiv.append(answerForm);
  answerForm.append(textDiv);
  textDiv.append(textInput);
  answerForm.append(submitBtn);

  answerCloud.append(row);
  row.append(backBtnDiv);
  backBtnDiv.append(genCatBtn);

  $(document).on('click', '#genCats', function(b){
    b.preventDefault();
    $(answerImg).effect('puff', 1500);

    let choice = 'answer-cloud';
    console.log(choice);

    $('#answer-cloud').off();
    setTimeout(function(){
        $('.wrapper').empty();
        createCategoryPage();
        chooseCategory(choice);
    }, 1500)
  });


}




// Progress Buttons
