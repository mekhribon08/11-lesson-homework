var elList = document.querySelector("[data-list]");
var imageUrl = "https://image.tmdb.org/t/p/w500";

for (var i = 0; i < movies.length; i++) {
  var movie = movies[i];

  var elLi = document.createElement("li");
  var elImg = document.createElement("img");
  var elDiv = document.createElement("div");

  elImg.src = `${imageUrl}${movie.poster_path}`;
  elDiv.textContent = `${movie.title}--${movie.vote_average} -- ${movie.release_date}`;

  elLi.classList.add("el-list");
  elImg.classList.add("el-img");
  elDiv.classList.add("el-div");

  elLi.appendChild(elImg);
  elLi.appendChild(elDiv);
  elList.appendChild(elLi);
}
