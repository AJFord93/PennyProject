function createQuestionPage() {

  const heading = $('<div>').addClass('container');
  const h1 = $('<h1>').addClass('text-center')
    .text('What\'s on Your Mind?').css('margin-bottom', '50px');
  const askAQuestion = $('<div>').addClass('row');
  const quesCloud = $('<div>').addClass('col-lg-6 question-cloud');
  const quesLink = $('<a>').attr('href', '/app');
  const quesImg = $('<img>').attr('src', '../public/img/cloud_question.png')
    .css('width', '300px').css('height', 'auto');
  const quesDiv = $('<div>').addClass('col-lg-6 question');
  const questionForm = $('<form>').attr('method', 'POST').attr('action', '/app')
    .attr('id', 'ask-a-question');
  const textDiv = $('<div>').addClass('form-group');
  const textInput = $('<textarea>').addClass('form-control')
    .attr('rows', '5').attr('id', 'whatsOnYourMind').attr('name', 'question')
      .attr('placeholder', 'Enter your question ...');
  const submitBtn = $('<button>').text('Submit').attr('type', 'submit')
    .addClass('btn btn-default').css('float', 'right');

    const row = $('<div>').addClass('row');
    const backBtnDiv = $('<div>').addClass('col-lg-12');
    const genCatBtn = $('<input>').attr('type', 'image').attr('src', '../public/img/Back.png').addClass('backbtn').attr('id', 'genCats');

  $('.wrapper').append(heading);
  heading.append(h1);
  heading.append(askAQuestion);
  askAQuestion.append(quesCloud);
  quesCloud.append(quesLink);
  quesCloud.append(quesImg);
  askAQuestion.append(quesDiv);
  quesDiv.append(questionForm);
  questionForm.append(textDiv);
  textDiv.append(textInput);
  questionForm.append(submitBtn);
  quesCloud.append(row);
  row.append(backBtnDiv);
  backBtnDiv.append(genCatBtn);

  $(document).on('click', '#genCats', function(b){
    b.preventDefault();

    let choice = $(this).attr('id');
    console.log(choice);

    $('#question-cloud').off();
    $('.wrapper').empty();
    createCategoryPage();
    chooseCategory(choice);
  });

};
