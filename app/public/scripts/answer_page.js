function createAnswerPage() {

  const heading = $('<div>').addClass('container');
  const h1 = $('<h1>').addClass('text-center')
    .text('Share Your Knowledge').css('margin-bottom', '50px');
  const answerAQuestion = $('<div>').addClass('row');
  const answerCloud = $('<div>').addClass('col-lg-6 answer-cloud');
  const answerLink = $('<a>').attr('href', '/app');
  const answerImg = $('<img>').attr('src', '../public/img/cloud_answer.png')
    .css('width', '300px').css('height', 'auto');
  const answerDiv = $('<div>').addClass('col-lg-6 answer');
  const questionToAnswer = $('<p>').text('Question from the database')
    .css('font-family', 'sans-serif').css('color', '#fff'); // Get from the database
  const answerForm = $('<form>').attr('method', 'POST').attr('action', '/app')
    .attr('id', 'answer-a-question');
  const textDiv = $('<div>').addClass('form-group');
  const textInput = $('<textarea>').addClass('form-control')
    .attr('rows', '8').attr('id', 'shareYourKnowledge').attr('name', 'answer')
      .attr('placeholder', 'Enter your answer ...');
  const submitBtn = $('<button>').text('Submit').attr('type', 'submit')
    .addClass('btn btn-default').css('float', 'right');

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

  $('h1').effect('shake', 'slow');
  $('img').effect('shake', 'slow');
  $('form').effect('shake', 'slow');

}