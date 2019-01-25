var numRead = function(yourNum){
  var newLife = "";
  var numArray = yourNum.split("");

  for (var i=0; i < parseInt(numArray.length); i++){
    if (numArray[i] == 3) {
      numArray[i] = " I'm sorry, Dave. I'm afraid I can't do that. ";
    } else if (numArray[i] == 2) {
    numArray[i] = " Boop! ";
    } else if (numArray[i] == 1) {
      numArray[i] = " Beep! ";
    }
      newLife+=numArray[i];
    }

  return newLife;
};

$(document).ready(function(){
  $("form#beepBoop").submit(function(event){
    var userInput = $("input#userInput").val();

    $("#output").text(numRead(userInput));

    event.preventDefault();
  });
});
