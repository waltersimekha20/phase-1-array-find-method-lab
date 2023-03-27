const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
function superBowlWin=record.find(function(game){
  return game.result==="W";
});
if (winningYear) {
  return winningYear.year;
}
else{
  return undefined;
}
