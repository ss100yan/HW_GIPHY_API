

var Animals = ["dog","cat","rabit","hamster","horse","swan","mouse","ant","bear","shark",];
var i ;
var input;
var title;
var bns;


$( document ).ready(function() {

    
    
    console.log( "ready!" );
    var button;
for (i=0; i<Animals.length; i++){
    button=$('<button/>').attr({
    type: "button",
    class:"btn btn-outline-secondary",
    id: Animals[i],
    value: Animals[i]
}).text(Animals[i]);
    
$("#buttons").append(button); 
console.log(i)

    };
    $("#button-addon1").click(function() {
        
        bns = $("button");

        input=$( "input[class=form-control]" ).val();

        button=$('<button/>').attr({
            type: "button",
            class:"btn btn-outline-secondary",
            id: input,
            value: input
        }).text(input);
    
        $("#buttons").append(button); 
        console.log(i)
        
        Animals.push(input);
        console.log(Animals)
        
        
      });



      $(document).on('click', '.btn' ,function (event) {
        //Process button click event
        
    title = this.id;
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
}); 