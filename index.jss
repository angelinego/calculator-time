//LEVEL 0 - 2
var milliseconds = Date.now();
var date = new Date();
var minute = date.getMinutes();
var second = date.getSeconds();
var hour = date.getHours ();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();

console.log(milliseconds);
console.log("Date:",date);
console.log("Minute:",minute);
console.log("Second:",second);
console.log("Hour:",hour);
console.log("Day:",day);
console.log("Month:",month);
console.log("Year:",year);

//LEVEL 2
function getDate(date) {
  return date.getDate();
}

function getMonth(date) {
  month = date.getMonth();
  return month;
}

function getStringMonthFromDate(date){
  month = date.getMonth()
  monthLists = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]

  return monthLists[month];
}
console.log (getStringMonthFromDate(date))

//LEVEL 3
function getStringMonthFromInt(int){
  monthLists = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]

  return monthLists[int];
}
console.log(getStringMonthFromInt(getMonth(date)))
