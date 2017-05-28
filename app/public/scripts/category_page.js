function createCategoryPage() {

  const div1 = $('<div>').addClass('col-lg-12 text-center');
  const div2 = $('<div>').addClass('container category-input');
  const heading = $('<h1>').css('margin-bottom', '50px')
    .text('Choose a Category');
  const categoryForm = $('<form>').attr('method', 'POST').attr('action', '/category')
    .attr('id', 'select-a-category');
  const formGroup = $('<div>').addClass('form-group');
  const row1 = $('<div>').addClass('row');
  const loveDiv = $('<div>').addClass('col-lg-3 category').attr('id', 'love');
  const loveLink = $('<a>').attr('href', '#');
  const loveImg = $('<img>').attr('src', '../public/img/Love.png')
    .css('width', '200px').css('height', '200px');
  const lifeDiv = $('<div>').addClass('col-lg-3 category').attr('id', 'life');
  const lifeLink = $('<a>').attr('href', '#');
  const lifeImg = $('<img>').attr('src', '../public/img/Life.png')
    .css('width', '200px').css('height', '200px');
  const familyDiv = $('<div>').addClass('col-lg-3 category').attr('id', 'family');
  const familyLink = $('<a>').attr('href', '#');
  const familyImg = $('<img>').attr('src', '../public/img/Family.png')
    .css('width', '200px').css('height', '200px');
  const homeDiv = $('<div>').addClass('col-lg-3 category').attr('id', 'home');
  const homeLink = $('<a>').attr('href', '#');
  const homeImg = $('<img>').attr('src', '../public/img/Home.png')
    .css('width', '200px').css('height', '200px');
  const row2 = $('<div>').addClass('row');
  const sportsDiv = $('<div>').addClass('col-lg-4 category').attr('id', 'sports');
  const sportsLink = $('<a>').attr('href', '#');
  const sportsImg = $('<img>').attr('src', '../public/img/Sports.png')
    .css('width', '200px').css('height', '200px');
  const politicsDiv = $('<div>').addClass('col-lg-4 category').attr('id', 'politics');
  const politicsLink = $('<a>').attr('href', '#');
  const politicsImg = $('<img>').attr('src', '../public/img/Politics.png')
    .css('width', '200px').css('height', '200px');
  const fashionDiv = $('<div>').addClass('col-lg-4 category').attr('id', 'fashion');
  const fashionLink = $('<a>').attr('href', '#');
  const fashionImg = $('<img>').attr('src', '../public/img/Fashion.png')
    .css('width', '200px').css('height', '200px');

  $('.wrapper').append(div1);
  div1.append(div2);
  div2.append(heading);
  $('.container').append(categoryForm);
  categoryForm.append(formGroup);
  formGroup.append(row1);
  row1.append(loveDiv);
  loveLink.append(loveImg);
  loveDiv.append(loveLink);
  row1.append(lifeDiv);
  lifeLink.append(lifeImg);
  lifeDiv.append(lifeLink);
  row1.append(familyDiv);
  familyLink.append(familyImg);
  familyDiv.append(familyLink);
  row1.append(homeDiv);
  homeLink.append(homeImg);
  homeDiv.append(homeLink);
  formGroup.append(row2);
  row2.append(sportsDiv);
  sportsLink.append(sportsImg);
  sportsDiv.append(sportsLink);
  row2.append(politicsDiv);
  politicsLink.append(politicsImg);
  politicsDiv.append(politicsLink);
  row2.append(fashionDiv);
  fashionLink.append(fashionImg);
  fashionDiv.append(fashionLink);

}