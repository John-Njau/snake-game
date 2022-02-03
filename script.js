var redCounter = document.getElementById("redCounter");
var blueCounter = document.getElementById("blueCounter");
var redScore = 0;
var blueScore = 0;

if(d1 < d2) {
  status.innerHTML += " <br>Blue Wins!";
  var blueCounter=+1;
  blueScore ++;
  blueCounter.innterHTML= "Blue has " + blueScore + " points!";
}
else if(d1 > d2) {
  status.innerHTML += " <br>Red Wins!";
  var blueCounter=+1;
  document.getElementByID("redCounter").innterHTML=redCounter;
}