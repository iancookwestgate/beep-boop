// var numRead = function(yourNum){
//   var newLife = "";
//   for (var i = 0; i < parseInt(yourNum); i++) {
//
//     if (i == 3) {
//       i = " I'm sorry, Dave. I'm afraid I can't do that. ";
//     } else if (i == 2) {
//       i = " Boop! ";
//     } else if (i == 1) {
//       i = " Beep! "
//     }
//       newLife += i;
//     }
//
//   return newLife;
// };

var numRead = function(yourNum){
  var result = [];

  for (var i = 0; i <= yourNum; i++) {

    if (i.toString().includes("3")) {
      result.push(" I'm sorry, Dave. I'm afraid I can't do that. ");
    } else if (i.toString().includes("2")) {
      result.push("Boop!");
    } else if (i.toString().includes("2")) {
      result.push("Beep!");
    } else
      result.push (" " +i);
    }

  return result;
};


// var numRead = function(yourNum){
//   var newLife = "";
//   var numArray = yourNum.split("");
//
//   for (var i=0; i < numArray.length; i++){
//
//     if (numArray[i] == 3) {
//       numArray[i] = " I'm sorry, Dave. I'm afraid I can't do that. ";
//     } else if (numArray[i] == 2) {
//     numArray[i] = " Boop! ";
//     } else if (numArray[i] == 1) {
//       numArray[i] = " Beep! ";
//     }
//       newLife+=numArray[i];
//     }
//
//   return newLife;
// };

$(document).ready(function(){
  $("form#beepBoop").submit(function(event){
    var userInput = $("input#userInput").val();

    $("#output").text(numRead(userInput));

    event.preventDefault();
  });
});
