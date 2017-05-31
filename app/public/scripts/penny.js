//===========================================================================
//Login-SignUp Modal content creation
//===========================================================================

//Global Content Div
const modalContent = $("<div>").addClass("modal-content");

//Header Div
const modalHeader = $("<div>").addClass("modal-header");

//Add the close button to the Header
modalHeader.append("<button type='button' class='close' data-dismiss='modal'>" + "&times;" + "</button>");
//Add the title to the Header
modalHeader.append("<h4 class='modal-title'>" + "Sign Up" + "</h4>");
//Add the Header div to the global Content div
modalContent.append(modalHeader);

//Body Div
const modalBody = $("<div>").addClass("modal-body");
//Add the body content to the Body div
modalBody.append("<p>" + "This is a paragraph" + "</p>");
//Add the Body div to the global Content div
modalContent.append(modalBody);

//Footer Div
const modalFooter = $("<div>").addClass("modal-footer");
//Add the close button to the Footer div
modalFooter.append("<button type='button' class='btn btn-default' data-dismiss='modal'>" + "Close" + "</button>");
//Add the Footer div to the global Content div
modalContent.append(modalFooter);

//Add the global Content div to the Modal-Dialog div
//$(".modal-dialog").append(modalContent);
