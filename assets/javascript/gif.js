//ARRAY that holds soccer players
var soccerArray = [];
var intervalId;
//function that will make buttons for the people we input
function renderButtons() {
   
    $("#soccer").empty();
    //making a button to store the one soccer player's name at a time
    for (var i = 0; i < soccerArray.length; i++) {
        //makes the button with jquery
        var soccerButton = $("<button>");
        //making a class
        soccerButton.addClass("soccerPlayerArray");
        //this will get he results of the player entered. 
        soccerButton.attr("data-name", soccerArray[i]);
        soccerButton.text(soccerArray[i]);
        $("#soccer").append(soccerButton);
        console.log(soccerButton);   
    }
}
    $("#add-player").on("click", function(event){
        event.preventDefault();
        var soccerPlayerArray =$("#soccer-input").val().trim();
        soccerArray.push(soccerPlayerArray);

        renderButtons();
        
 console.log(soccerArray);

    renderButtons();



    //trying to keep my API key safe, because it's mine but not really safe because i 
    //still see it on inspect...hahaha. 
    var APIKey = 'JcB3Sp7eKTeUg9qXsB4I7lKJW5wASId9';
    //using queryURL to add my API to the url
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + soccerArray + "&api_key=" + APIKey + "&limit=10" + "&rating=g" +"&tag=soccer";


    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            var results = response.data;
            console.log(results);


            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("#gifs");
                //this will be the spot were we hold what we are looking for like
                //ratings or 
                var rating = results[i].rating;
                var gif = results[i].images.original.url;
                console.log(rating);
                //this next spot is where it will print out 
                var p = $("<p>").text("Rating: " + rating);
                // this is the spot were it will hold the gif and limit ten
               var playerImage= $("<img>");

               playerImage.attr("src", gif);

                gifDiv.prepend(p);
                gifDiv.prepend(playerImage);

                $("#gifs").prepend(gifDiv);
                
            }
            console.log(playerImage);
            console.log(gifDiv);
            console.log("#gifs");
            
        });
    });
