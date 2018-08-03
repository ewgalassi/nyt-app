

$(document).on('click', "#search-button", function () {
    console.log("Search!");



    var searchInput = $("search-input").val();
    var limit = $("#limit").val();

    var api = "b57e90d3d55f4e5aaf47b5f25cd1bc11";
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";


    url += "?api-key=" + api;
    url += "&q=" + searchInput;
  

    $.ajax({
        url: url,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        var results = response.response.docs;
        console.log(results);


        for (var i = 0; i < limit; i++) {
            console.log(results[i].headline.print_headline);
            console.log(results[i].byline.original);
            console.log(results[i].news_desk);
            console.log(results[i].pub_date);
            console.log(results[i].web_url);

        }







    })


});




// done(function(result) {
//  console.log(result);
// }).fail(function(err) {
//  throw err;
// });