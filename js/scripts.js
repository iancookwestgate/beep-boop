var userNum = function(number) {
  var parsedNum = parseInt(number);

  if(parsedNum %3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  }
  if(parsedNum %2 === 0) {
    return "Boop!";
  }
  if(parsedNum %1 === 0) {
    return "Beep!";
  }
}










$(document).ready(function(){
  $("form#beepBoop").submit(function(event){
    var userInput = $("input#userInput").val();

    $("#output").text(userNum(userInput));

    event.preventDefault();
  });
});
