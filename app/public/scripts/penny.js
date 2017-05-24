$(".appq").click(function() {
    $(".text-center").empty();
    const formContainer = $("<div>").addClass("container");
    const formRow = $("<div>").addClass("row");
    const formCol = $("<div>").addClass("col-md-12");
    const questionForm = $("<form>");
    const formDiv = $("<div>").addClass("form-group");
    const questionText = $("<textarea>").addClass("form-control")
        .attr("rows", "3");
    formContainer.append(formRow);
    formRow.append(formCol);
    formCol.append(questionForm);
    questionForm.append(formDiv);
    formDiv.append(questionText);
});

