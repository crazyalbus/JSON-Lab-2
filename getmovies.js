var request = new XMLHttpRequest();
request.open('GET', 'https:data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
request.onreadystatechange = function(){
  if((request.status==200) && (request.readyState==4)){
    // console.log(request.responseText);
    var allMovies = JSON.parse(this.responseText);
    filterMovies(allMovies.data);
  }
}

request.send();

function filterMovies(arr) {
document.getElementById('result').innerHTML += "<strong>Movies shot at the Golden Gate Bridge</strong><br>"
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    if(arr[i][10] == "Golden Gate Bridge"){
      out = "Movie Title: " + arr[i][8] + " -- Release Year: " + arr[i][9] + " -- Production Company: " + arr[i][12];
      document.getElementById('result').innerHTML += out + "<br>";
    }
  }
}
