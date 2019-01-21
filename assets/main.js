

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
    class:"btn btn-outline-primary",
    id: "btns",
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
            class:"btn btn-outline-primary",
            id: "btns",
            value: input
        }).text(input);
    
        $("#buttons").append(button); 
        console.log(i)
        
        Animals.push(input);
        console.log(Animals)
        
        
      });



      $(document).on('click', '#btns' ,function (event) {
        //Process button click event
        
    title = this.value;
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
    var gifDiv = $("<figure>");
    var gifDiv2 = $("<figcaption>");
    var gifDiv3 = $("<figcaption>");
    var Image = $("<img>");

    
    Image.attr({
        src: results[i].images.fixed_height_still.url, 
        still: results[i].images.fixed_height_still.url,
        animate: results[i].images.fixed_height.url,
        state: 'still',
        class: 'gif img-thumbnail'
    });
    
    
    

    var Rating = results[i].rating;
    var Title = results[i].title;
    console.log(Rating);
    console.log(Title);
    gifDiv3.prepend("Title: "+Title);
    gifDiv2.prepend("Rating: "+Rating);
    
    gifDiv.prepend(gifDiv3);
    gifDiv.prepend(gifDiv2);

    gifDiv.prepend(Image);
          
    $("#gifs").prepend(gifDiv);
    
  }
  $(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("animate"));
      $(this).attr("state", "animate");
    } else {
      $(this).attr("src", $(this).attr("still"));
      $(this).attr("state", "still");
    }
  });
});



});



}); 