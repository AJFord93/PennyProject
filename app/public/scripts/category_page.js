function createCategoryPage() {

  const div1 = $('<div>').addClass('col-lg-12 text-center');
  const div2 = $('<div>').addClass('container category-input');
  const heading = $('<h1>').css('margin-bottom', '50px').text('Choose a Category');
  const categoryForm = $('<form>').attr('method', 'POST').attr('action', '/app').attr('id', 'select-a-category');
  const formGroup = $('<div>').addClass('form-group');


  const row1 = $('<div>').addClass('row');

  const loveDiv = $('<div>').addClass('col-lg-3 category');
  const loveInput = $('<input>').attr('type', 'image').attr('src', '../public/img/Love.png').attr('alt', 'submit').attr('data-name', 'love')
    .css('width', '200px').css('height', '200px');

  const lifeDiv = $('<div>').addClass('col-lg-3 category');
  const lifeInput = $('<input>').attr('type', 'image').attr('src', '../public/img/Life.png').attr('alt', 'submit').attr('data-name', 'life')
    .css('width', '200px').css('height', '200px').addClass('img-rounded');

  const familyDiv = $('<div>').addClass('col-lg-3 category');
  const familyInput = $('<input>').attr('type', 'image').attr('src', '../public/img/Family.png').attr('alt', 'submit').attr('data-name', 'family')
    .css('width', '200px').css('height', '200px');

  const homeDiv = $('<div>').addClass('col-lg-3 category');
  const homeInput = $('<input>').attr('type', 'image').attr('src', '../public/img/Home.png').attr('alt', 'submit').attr('data-name', 'home')
    .css('width', '200px').css('height', '200px');

  const row2 = $('<div>').addClass('row');

  const sportsDiv = $('<div>').addClass('col-lg-4 category');
  const sportsInput = $('<input>').attr('type', 'image').attr('src', '../public/img/Sports.png').attr('alt', 'submit').attr('data-name', 'sports')
    .css('width', '200px').css('height', '200px');

  const politicsDiv = $('<div>').addClass('col-lg-4 category');
  const politicsInput = $('<input>').attr('type', 'image').attr('src', '../public/img/Politics.png').attr('alt', 'submit').attr('data-name', 'politics')
    .css('width', '200px').css('height', '200px');

  const fashionDiv = $('<div>').addClass('col-lg-4 category');
  const fashionInput = $('<input>').attr('type', 'image').attr('src', '../public/img/Fashion.png').attr('alt', 'submit').attr('data-name', 'fashion')
    .css('width', '200px').css('height', '200px');

  const row3 = $('<div>').addClass('row');
  const progressDiv = $('<div>').addClass('col-lg-12 progressBtns');
  const backInput = $('<input>').attr('type', 'image').attr('src', '../public/img/Back.png').attr('alt', 'submit').attr('data-name', 'back').addClass('backbtn refresh').css('margin-bottom', '40px');

  $('.wrapper').append(div1);
  div1.append(div2);
  div2.append(heading);
  $('.container').append(categoryForm);
  categoryForm.append(formGroup);

  formGroup.append(row1);

  row1.append(loveDiv);
  setTimeout(function(){
  loveDiv.append(loveInput).effect('bounce', 1350);
}, 200);

  row1.append(lifeDiv);
  setTimeout(function(){
    lifeDiv.append(lifeInput).effect('bounce', 1350);
  }, 500);

  row1.append(familyDiv);
  setTimeout(function(){
  familyDiv.append(familyInput).effect('bounce', 1350);
  }, 800);

  row1.append(homeDiv);
  setTimeout(function(){
  homeDiv.append(homeInput).effect('bounce', 1350);
  }, 1100);

  formGroup.append(row2);

  row2.append(sportsDiv);
  setTimeout(function(){
  sportsDiv.append(sportsInput).effect('bounce', 1350);
  }, 1400);

  row2.append(politicsDiv);
  setTimeout(function(){
  politicsDiv.append(politicsInput).effect('bounce', 1350);
  }, 1700);

  row2.append(fashionDiv);
  setTimeout(function(){
  fashionDiv.append(fashionInput).effect('bounce', 1350);
  }, 2000);

  formGroup.append(row3);

  row3.append(progressDiv);
  setTimeout(function(){
  progressDiv.append(backInput).effect('bounce', 1350);
}, 2300);


  $(document).on('click', '.refresh', function(e){
    e.preventDefault();
    window.location.replace('/app');
  });
}
