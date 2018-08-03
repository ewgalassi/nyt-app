//Begin creating basic click events. Register the submit button
//Get the data from the text-boxes and store as variables.
//Experiment with creating content regions for where the article will go.
$(document).ready(function () {

    $("#search").on("click", function (event) {
        event.preventDefault();
    })

    $("#clear").on("click", function() {
        $("#results").empty();
        event.preventDefault();
    })

    var searTerm = $("#searchTerm").val().trim();
    var numRecords = $("#numRecords").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();

    var newArticle = $("<li>");
    $("#results").append(newArticle);








});

