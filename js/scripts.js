//Business logic 
function Ticket() {
  this.movies = [];
  this.movieId = 0
}

Ticket.prototype.addMovie = function(movie) {
  movie.id = this.assignId();
  this.movies.push(movie);
}

Ticket.prototype.assignId =function(movie) {
  this.movieId += 1;
  return this.movieId;
}

/*Ticket.prototype.rating = function(){
  if (this.movieRating === "R"){
    //console.log(true)
    alert("You must be 18 or older to purchase tickets for this movie, please enter your age")
  }*/

  /*Movie.prototype.movieDetails = function () {
    return this.movieTitle + " " + this.movieShowTime + " " + this.movieRating
  }*/

  /*Movie.prototype.selection = function() {
    return "You are seeing " + this.movieTitle + " at " + this.movieShowTime + ". Enjoy the show!"
  }*/

  /*function TicketPrice (movieshowtimeparam){ 
    if (movieShowTime === "11 am" || "1 pm") {
    //display ticket price of 5$
    } else {
    //display ticket price of 9$
  }*/


function Movie(movieTitle, movieDescription, movieShowTime, movieRating) {
  this.movieTitle = movieTitle;
  this.movieDescription = movieDescription;
  this.movieShowTime = movieShowTime;
  this.movieRating = movieRating;
}

//variables for individual movies

let bladeRunner = new Movie("BladeRunner", "sci-fi", ["11 am", "1 pm",  "4 pm", "6 pm"], "R");
let theAvengers = new Movie("theAvengers", "sci-fi", ["11 am", "1 pm",  "4 pm", "6 pm"], "PG-13");
let harryPotter = new Movie("harryPotter", "fantasy", ["11 am", "1 pm", "4 pm", "6 pm", "PG"]);


/*function displayMovieDetails(detailsToDisplay) {
  let movieDetails = movie.
  $("#show")
}*/

function UserMovieSelection (movie){
  $("div.movieSelection").on("click","img", function(){
});

$(document).ready(function() {
  $("avengers-img").click(function() {
    $("avengersDescription").show();
    console.log("image is responsive");
  });
  $("harryPotter-img").click(function() {
    $("harryPotterDescription").show();
    console.log("image is responsive");
  });
  $("bladeRunner-img").click(function() {
    $("bladeRunnerDescription").show();
    console.log("image is responsive");
  });
  event.preventDefault();
});
}