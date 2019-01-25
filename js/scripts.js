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
  var newLife = "";


  for (var i = 0; i < parseInt(yourNum); i++) {
    do {
      i = " I'm sorry, Dave. I'm afraid I can't do that. ";
      i++;
    } while (i == 3);

    do {
      i = " I'm sorry, Dave. I'm afraid I can't do that. ";
      i++;
    } while (i == 2);

    do {
      i = " I'm sorry, Dave. I'm afraid I can't do that. ";
      i++;
    } while (i == 1);

      newLife += i;
    }


  return newLife;
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
