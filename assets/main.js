

var Animals = ["dog","cat","rabit","hamster","horse","swan","mouse","ant","bear","shark",];
var i ;
var input;
var title;
$( document ).ready(function() {
    console.log( "ready!" );
    var button;
for (i=0; i<Animals.length; i++){
    button=$('<input/>').attr({
    type: "button",
    id: Animals[i],
    value: Animals[i]
});
$("#buttons").append(button); 
console.log(i)

    };
    $("#button-addon1").click(function() {
        
        input=$( "input[class=form-control]" ).val();

        button=$('<input/>').attr({
            type: "button",
            id: input,
            value: input
        });
    
        $("#buttons").append(button); 
        console.log(i)
        

        
      });

     
     title = Animals[0];
     var queryURL ="http://api.giphy.com/v1/gifs/search?q="+ title +"&api_key=dc6zaTOxFJmzC&limit=10";
    //   "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";
 
     $.ajax({
       url: queryURL,
       method: "GET"
     }).then(function(response) {
       console.log(response);
       console.log(response.Runtime);
    
// -----------------------------------------------------------------------------

    var results = response.data;

   for (var i = 0; i < results.length; i++) {
    var gifDiv = $("<div>");

    var Image = $("<img>");
    Image.attr("src", results[i].images.fixed_height.url);

    gifDiv.prepend(Image);

    $("#gifs").prepend(gifDiv);
  }
  
});



    });