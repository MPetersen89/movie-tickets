//Business logic 
/*function Ticket
  this.movies =;
  this.movieId = 0
*/

function Movie(movieTitle, movieDescription, movieShowTime, movieRating) {
  this.movieTitle = movieTitle;
  this.movieDescription = movieDescription;
  this.movieShowTime = movieShowTime;
  this.movieRating = movieRating;
}

//variables for individual movies
var movies = [
new Movie ("BladeRunner", "sci-fi", ["11 am", "1 pm",  "4 pm", "6 pm"], "R"),
new Movie ("theAvengers", "sci-fi", ["11 am", "1 pm",  "4 pm", "6 pm"], "PG-13"),
new Movie ("harryPotter", "fantasy", ["11 am", "1 pm", "4 pm", "6 pm"], "PG")
];

Ticket.prototype.addMovie = function(movie) {
  movie.id = this.assignId();
  this.movie.push(movie);
}

Ticket.prototype.assignId =function(movie) {
  this.movieId += 1;
  return this.movieId;
}

function UserMovieSelection (movie){ 
}

$(document).ready(function(event) {
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